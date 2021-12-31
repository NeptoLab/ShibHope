import { useWeb3React } from '@web3-react/core';
import cookie from 'js-cookie';
import { Pressable, Button, HStack, Popover, Text } from 'native-base';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector, WalletConnectConnectorArguments } from '@web3-react/walletconnect-connector';
import React, { useEffect } from 'react';
import Logo from './Logo';
import usePayment from 'hooks/usePayment';
import Link from './Link';
import Web3Modal from './Web3Modal';
import useModal from 'hooks/useModal';

const providers = {
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
}

const Header: React.FC = () => {
  const { isOpen, handleClose, handleOpen } = useModal();
  const { active, account, library, activate, deactivate } = useWeb3React();
  const { balance, price } = usePayment(library, account);

  const handleSelectProvider = async (name: string) => {
    await handleConnect(name as keyof typeof providers);
    cookie.set('provider', name);
    handleClose();
  };

  const handleConnect = async (name: keyof typeof providers) => {
    await activate(providers[name]);
  };

  useEffect(() => {
    if (cookie.get('provider')) {
      setTimeout(() => {
        handleConnect(cookie.get('provider') as keyof typeof providers);
      }, 500);
    }
  }, []);

  const handleDisconnect = async () => {
    deactivate();
  };

  return (
    <>
      <Web3Modal isOpen={isOpen} onSelect={handleSelectProvider} onClose={handleClose} />
      <HStack bg="white" shadow={5} space={2} py={6} px={10} justifyContent="center">
        <Link href="/" passHref>
          <Pressable flex={1} maxW="245px" justifyContent="center" mr="auto">
            <Logo />
          </Pressable>
        </Link>
        {!active ? (
          <Button
            p={0}
            rounded="100px"
            _stack={{
              px: 4,
              py: 2,
              rounded: '100px',
              height: '100%',
              bg: {
                linearGradient: {
                  colors: ["#9D50F1", "#6573FC"],
                  start: [0, 0],
                  end: [1, 0],
                },
              }
            }}
            _text={{
              fontSize: "md",
              fontWeight: "bold",
              color: "white",
            }}
            onPress={handleOpen}
          >
            Connect Wallet
          </Button>
        ) : (
          <Popover trigger={(triggerProps) => (
            <Button _text={ { numberOfLines: 1, maxW: '120px' } } variant="outline" {...triggerProps}>
              {account}
            </Button>
          )}>
            <Popover.Content p={4} accessibilityLabel="Delete Customerd" w="56">
              <Popover.Arrow />
              {balance && (
                <>
                  <Text fontSize="8px" fontWeight="bold">{`${(balance / Math.pow(10, 18))} GRUMPYSHIB`}</Text>
                  <Text mt={1} color="gray.600" fontSize="8px">≈{(price * balance / Math.pow(10, 18)).toFixed(2)}</Text>
                </>
              )}
              <Button mt={4} onPress={handleDisconnect}>Disconnect</Button>
            </Popover.Content>
          </Popover>
        )}
      </HStack>
    </>
  );
};

export default Header;
