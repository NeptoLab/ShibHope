import { useWeb3React } from '@web3-react/core';
import { Pressable, Button, HStack, Popover, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import usePayment from 'hooks/usePayment';
import Link from './Link';
import Web3Modal from './Web3Modal';
import { AbstractConnector } from '@web3-react/abstract-connector';
import useModal from 'hooks/useModal';

const Header: React.FC = () => {
  const { isOpen, handleClose, handleOpen } = useModal();
  const [ provider, setProvider ] = useState<AbstractConnector>();
  const { active, account, library, activate, deactivate } = useWeb3React();
  const { balance, price } = usePayment(library, account);

  const handleSelectProvider = async (provider: AbstractConnector) => {
    setProvider(provider);
    handleClose();
  }

  useEffect(() => {
    provider && handleConnect();
  }, [provider]);

  const handleConnect = async () => {
    try {
      if (!provider) {
        handleOpen();
        return;
      }
      
      await activate(provider);
    } catch(e) {
      console.error(e);
    }
  };

  const handleDisconnect = async () => {
    setProvider(undefined);
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
            onPress={handleConnect}
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
