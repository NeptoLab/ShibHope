import { NextApiRequest, NextApiResponse } from 'next';
import * as util from 'ethereumjs-util';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('header', req.headers.authorization);

  if (!req.headers.authorization) {
    return res.json({
      'X-Hasura-Role': 'user'
    });
  }

  const sig = util.fromRpcSig(req.headers.authorization);
  const publicKey = util.ecrecover(util.toBuffer(util.hashPersonalMessage(Buffer.from('Verify Signature'))), sig.v, sig.r, sig.s);
  const addrBuf = util.pubToAddress(publicKey);
  const address = util.bufferToHex(addrBuf);

  console.log('user', address);

  return res.json({
    'X-Hasura-User-Id': address,
    'X-Hasura-Role': 'user'
  });
}
