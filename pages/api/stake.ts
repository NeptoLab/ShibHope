import Web3 from 'web3';

import fetch from "isomorphic-fetch"
import { NextApiRequest, NextApiResponse } from 'next';
import { Mutation_Root, Mutation_RootStake_CampaignArgs, Query_Root, StakeCampaignArgs } from "types/models";

const STAKE_CAMPAIGN_MUTATION = `
  mutation stake_campaign($campaign_id: bigint!, $amount: numeric!, $text: String!, $tx_number: String!) {
    insert_stake_one(object: {amount: $amount, comment: {data: {text: $text}}, campaign_id: $campaign_id, tx_number: $tx}) {
      id
    }
  }
`;

const GET_CAMPAIGN_QUERY = `
  query get_campaign($id: bigint!) {
    campaign_by_pk(id: $id) {
      amount
      category
      created_at
      description
      id
      location
      owner
    }
  }
`;

const getCampaign = async (id: number) => {
  const response = await fetch(
    "https://shibhope.hasura.app/v1/graphql",
    {
      method: 'POST',
      body: JSON.stringify({
        query: GET_CAMPAIGN_QUERY,
        variables: { id }
      })
    }
  );
  const result = await response.json();

  console.log(result);

  if (result.errors) {
    throw result.errrors[0];
  }

  const data: Query_Root = result.data;

  if (!data.campaign_by_pk) {
    throw 'Campaign Not Found';
  }

  return data.campaign_by_pk;
};

const stakeCampaign = async (variables: StakeCampaignArgs) => {
  const response = await fetch(
    "https://shibhope.hasura.app/v1/graphql",
    {
      method: 'POST',
      body: JSON.stringify({
        query: STAKE_CAMPAIGN_MUTATION,
        variables
      })
    }
  );
  const result = await response.json();

  console.log(result);
  
  if (result.errors) {
    throw result.errors[0];
  }

  const data: Mutation_Root = result.data;

  if (!data.stake_campaign) {
    throw 'Stake Payload Is Empty';
  }

  return data.stake_campaign;
};

const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { object: { tx_number, campaign_id, amount, text } }: Mutation_RootStake_CampaignArgs = req.body.input;
    const { session_variables } = req.body;

    const campaign = await getCampaign(campaign_id);
    const tx = await web3.eth.getTransactionReceipt(tx_number);

    if (tx.to !== campaign.owner || (tx as any).value !== amount || tx.from !== session_variables['x-hasura-user-id']) {
      throw 'Transaction can\'t be verified';
    }

    const data = await stakeCampaign({ tx_number, campaign_id, amount, text });
    return res.json(data);
  } catch(e: any) {
    return res.status(400).json({
      message: e.toString()
    });
  }
};

export default handler;
