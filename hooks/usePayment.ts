import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import type Web3 from "web3";
import cookie from 'js-cookie';
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector, WalletConnectConnectorArguments } from "@web3-react/walletconnect-connector";

import { getTokenPrice, TOKEN_INFO_URL } from "services/token";
import GrumpyShibaAbi from 'contracts/GrumpyShibaAbi.json';

export const providers = {
  injected: new InjectedConnector({
    supportedChainIds: [56],
  }),
  walletconnect: new WalletConnectConnector({
    supportedChainIds: [56],
    rpc: {  
      56: "https://bsc-dataseed.binance.org",
    },
    chainId: 56,
    network: 'binance'
  } as WalletConnectConnectorArguments)
};

export type Web3ProviderType = keyof typeof providers;

const usePayment = (web3: Web3, account?: string | null) => {
  const contract = useRef<any>(null);
  const [ balance, setBalance ] = useState<number | undefined>(undefined);
  const { data: price = 0 } = useSWR(TOKEN_INFO_URL, getTokenPrice);

  useEffect(() => {
    if (web3) {
      contract.current = new web3.eth.Contract(GrumpyShibaAbi as any, '0xAe448cB5A3ec77BA4aDcc6C8f9621e5921DCd77a');
      contract.current.methods.balanceOf(account).call().then((balance: number) => {
        setBalance(balance);
      });
    }
  }, [web3]);

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
