import Web3 from 'web3';

import fetch from "isomorphic-fetch"
import { NextApiRequest, NextApiResponse } from 'next';
import { Mutation_RootStake_CampaignArgs, Stake_Insert_Input } from "types/models";

const HASURA_OPERATION = `mutation stake_campaign($campaign_id: bigint!, $amount: numeric!, $text: String!, $tx_number: String!) {
  insert_stake_one(object: {amount: $amount, comment: {data: {text: $text}}, campaign_id: $campaign_id, tx_number: $tx}) {
    id
  }
}`;

const execute = async (variables: Stake_Insert_Input) => {
  const fetchResponse = await fetch(
    "https://shibhope.hasura.app/v1/graphql",
    {
      method: 'POST',
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};

const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { object: { tx, ...object } }: Mutation_RootStake_CampaignArgs = req.body.input;
  
  const response = await web3.eth.sendSignedTransaction(tx.raw);

  const { data, errors } = await execute({ tx_number: response.transactionHash,...object });

  if (errors) {
    return res.status(400).json(errors[0]);
  }

  return res.json({
    ...data.insert_stake_one
  });
};

export default handler;
