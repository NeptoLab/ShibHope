import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie"
import util from 'ethereumjs-util';
import web3 from "web3";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = cookie.parse(req.headers.cookie || '');

  if (!cookies.token) {
    res.status(403);
    return res.json({
      "X-Hasura-Role": "user"
    });
  }

  const sig = util.fromRpcSig(cookies.token);
  const publicKey = util.ecrecover(util.toBuffer(web3.utils.sha3('shibhope')), sig.v, sig.r, sig.s);
  const address = util.pubToAddress(publicKey).toString('hex');

  return res.json({
    "X-Hasura-User-Id": address,
    "X-Hasura-Role": "user"
  });
}
