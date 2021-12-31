import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import type Web3 from "web3";
import cookie from 'js-cookie';

const fetcher = (url: string) => fetch(url).then(r => r.json());

const usePayment = (web3: Web3, account?: string | null) => {
  const contract = useRef<any>(null);
  const [ balance, setBalance ] = useState<number | undefined>(undefined);
  const { data: { data: { price } } = { data: { price: 0 } } } = useSWR('https://api.pancakeswap.info/api/v2/tokens/0xAe448cB5A3ec77BA4aDcc6C8f9621e5921DCd77a', fetcher);
  const { data: { result, status } = { result: null, status: 0 } } = useSWR('https://api.bscscan.com/api?module=contract&action=getabi&address=0xae448cb5a3ec77ba4adcc6c8f9621e5921dcd77a', fetcher);

  useEffect(() => {
    if (web3 && !!parseInt(status)) {
      contract.current = new web3.eth.Contract(JSON.parse(result), '0xAe448cB5A3ec77BA4aDcc6C8f9621e5921DCd77a');
      contract.current.methods.balanceOf(account).call().then((balance: number) => {
        setBalance(balance);
      });
    }
  }, [web3, result]);

  useEffect(() => {
    if (account && !cookie.get('token')) {
      web3.eth.personal.sign('Verify Signature', account, '').then((token) => {
        cookie.set('token', token);
      });
    }
  }, [account]);

  return {
    balance,
    price,
    send: async (value: number, to: string) => {
      if (!account) { return; }
      return web3.eth.sendTransaction({
        from: account,
        to: contract.current._address,
        data: contract.current.methods.transfer(to, web3.utils.toWei( value.toString() ) ).encodeABI(),
      });
    }
  };
};

export default usePayment;
