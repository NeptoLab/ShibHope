import { AlertDialog, Button, IModalProps } from 'native-base'
import React, { useRef } from 'react'

const UnsupportedNetworkModal: React.FC<Pick<IModalProps, 'onClose' | 'isOpen'> & { onSwitchNetwork: () => void }> = ({ onClose, onSwitchNetwork, ...props }) => {
  const closeRef = useRef();

  const handleSwitchNetwork = async () => {
    await onSwitchNetwork();
    onClose();
  }

  return (
    <AlertDialog leastDestructiveRef={closeRef} onClose={onClose} {...props}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Unsupported Network</AlertDialog.Header>
          <AlertDialog.Body>
            Sorry but currently only Binance Smart Chain mainnet is supported.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                ref={closeRef}
                onPress={onClose}
              >
                Ignore
              </Button>
              <Button colorScheme="primary" onPress={handleSwitchNetwork}>
                Switch Network
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
  )
}

export default UnsupportedNetworkModal
