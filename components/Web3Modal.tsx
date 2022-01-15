import { Button, Modal } from 'native-base';
import { IModalProps } from 'native-base/lib/typescript/components/composites/Modal';
import React from 'react';
import MetaMaskIcon from './MetaMaskIcon';
import WalletConnectIcon from './WalletConnectIcon';
import type { Web3ProviderType } from 'hooks/usePayment';

const Web3Modal: React.FC<{ onSelect: (name: Web3ProviderType) => void } & IModalProps> = ({ onSelect, ...props }) => {
  return (
    <Modal {...props}>
      <Modal.Content>
        <Modal.CloseButton p={0} m={-2} />
        <Modal.Header>
          Connect Wallet
        </Modal.Header>
        <Modal.Body p={4}>
          <Button variant="outline" leftIcon={<MetaMaskIcon size={50} />} size="lg" onPress={() => onSelect('injected')}>MetaMask</Button>
          <Button variant="outline" mt={2} leftIcon={<WalletConnectIcon size={50} />} size="lg" onPress={() => onSelect('walletconnect')}>WalletConnect</Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default Web3Modal;
