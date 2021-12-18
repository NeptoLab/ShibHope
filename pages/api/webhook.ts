import { NextApiRequest, NextApiResponse } from "next";
import util from 'ethereumjs-util';
import web3 from "web3";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.headers.cookie);

  if (!req.headers.authorization) {
    res.status(403);
    res.end();
    return;
  }

  const sig = util.fromRpcSig(req.headers.authorization);
  const publicKey = util.ecrecover(util.toBuffer(web3.utils.sha3('test')), sig.v, sig.r, sig.s);
  const address = util.pubToAddress(publicKey).toString('hex');

  res.json({
    "X-Hasura-User-Id": address,
    "X-Hasura-Role": "user"
  });
}
