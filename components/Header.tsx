import { useWeb3React } from '@web3-react/core';
import cookie from 'js-cookie';
import { useIntl } from 'react-intl';
import { Pressable, Button, HStack, Popover, Text } from 'native-base';
import React, { useEffect } from 'react';
import Logo from './Logo';
import usePayment, { providers, Web3ProviderType } from 'hooks/usePayment';
import Link from './Link';
import Web3Modal from './Web3Modal';
import useModal from 'hooks/useModal';

const Header: React.FC = () => {
  const { isOpen, handleClose, handleOpen } = useModal();
  const { active, account, library, activate, deactivate } = useWeb3React();
  const { balance, price } = usePayment(library, account);
  const intl = useIntl();

  const handleSelectProvider = async (name: Web3ProviderType) => {
    await handleConnect(name);
    cookie.set('provider', name);
    handleClose();
  };

  const handleConnect = async (name: Web3ProviderType) => {
    const provider = providers[name];
    provider.on('networkChanged', (networkId) => {
      alert(networkId);
    });
    await activate(providers[name]);
  };

  useEffect(() => {
    if (cookie.get('provider')) {
      handleConnect(cookie.get('provider') as Web3ProviderType);
    }
  }, []);

  const handleDisconnect = async () => {
    cookie.remove('provider');
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
            <Popover.Content p={4} accessibilityLabel="Delete Customerd" w="250px">
              <Popover.Arrow />
              {balance && (
                <>
                  <Text fontSize="14px" fontWeight="bold">{`${(intl.formatNumber(balance / Math.pow(10, 18), {style: 'decimal'}))}`} GRUMPYSHIB</Text>
                  <Text mt={1} color="gray.600" fontSize="12px">≈{intl.formatNumber(price * balance / Math.pow(10, 18), { style: 'currency', currency: 'USD' })}</Text>
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
