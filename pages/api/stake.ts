import Web3 from 'web3';

import fetch from "isomorphic-fetch"
import { NextApiRequest, NextApiResponse } from 'next';
import { Mutation_Root, Mutation_RootStake_CampaignArgs, Query_Root, StakeCampaignArgs } from "types/models";

const STAKE_CAMPAIGN_MUTATION = `
  mutation stake_campaign($campaign_id: bigint!, $amount: numeric!, $value: numeric!, $tx_number: String!) {
    insert_stake_one(object: {amount: $amount, value: $value, campaign_id: $campaign_id, tx_number: $tx_number}) {
      id
    }
  }
`;

const STAKE_WITH_COMMENT_MUTATION = `
  mutation stake_campaign($campaign_id: bigint!, $amount: numeric!, $value: numeric!, $text: String, $tx_number: String!) {
    insert_stake_one(object: {amount: $amount, value: $value, comment: {data: {text: $text}}, campaign_id: $campaign_id, tx_number: $tx_number}) {
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

const stakeCampaign = async ({ text, ...variables }: StakeCampaignArgs & { amount: number }, headers: any) => {
  const response = await fetch(
    "https://shibhope.hasura.app/v1/graphql",
    {
      method: 'POST',
      body: JSON.stringify({
        query: !!text ? STAKE_WITH_COMMENT_MUTATION : STAKE_CAMPAIGN_MUTATION,
        variables: !!text ? { text, ...variables } : variables,
      }),
      headers,
    }
  );
  const result = await response.json();

  console.log(result);
  
  if (result.errors) {
    throw result.errors[0];
  }

  const data: Mutation_Root = result.data;

  if (!data.insert_stake_one) {
    throw 'Stake Payload Is Empty';
  }

  return data.insert_stake_one;
};

const getTokenPrice = async () => {
  const response = await fetch('https://api.pancakeswap.info/api/v2/tokens/0xAe448cB5A3ec77BA4aDcc6C8f9621e5921DCd77a');
  const data = await response.json();
  return data.price || 0;
}

const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { object: { tx_number, campaign_id, text, value } }: Mutation_RootStake_CampaignArgs = req.body.input;
    const { session_variables } = req.body;

    const campaign = await getCampaign(campaign_id);
    const receipt = await web3.eth.getTransactionReceipt(tx_number);
    const price = await getTokenPrice();

    if (!receipt) {
      throw 'Can\'t get transaction receipt';
    }
    
    const txValue = parseInt(web3.utils.hexToNumberString(receipt.logs[0].data)) / 10**18;
    const txTo = web3.utils.hexToNumberString(receipt.logs[0].topics[2]);
    const txFrom = receipt.from;

    if (!receipt.status || txValue !== parseFloat(value) || txTo !== web3.utils.hexToNumberString(campaign.owner) || txFrom !== session_variables['x-hasura-user-id']) {
      throw 'Transaction can\'t be verified';
    }

    const data = await stakeCampaign({ tx_number, campaign_id, amount: value * price, value, text }, { authorization: req.headers.authorization });
    return res.json(data);
  } catch(e: any) {
    return res.status(400).json({
      message: e.message || e.toString()
    });
  }
};

export default handler;
