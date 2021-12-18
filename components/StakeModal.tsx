import { Button, FormControl, HStack, Input, Modal, Text } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import React from 'react'
import usePayment from 'hooks/usePayment';
import { useWeb3React } from '@web3-react/core';
import { IModalProps } from 'native-base/lib/typescript/components/composites/Modal';

const StakeModal: React.FC<IModalProps> = (props) => {
  const { formState: { errors }, control, handleSubmit } = useForm();
  const { account, library } = useWeb3React();
  const { price, send } = usePayment(library, account);

  const handleStake = (data: { amount: number }) => {
    send(data.amount, '0xc2EdABfaaB792160188d8Bb7B5fEE4e7Cce21634');
  };

  return (
    <Modal {...props}>
      <Modal.Content>
        <Modal.CloseButton p={0} m={-2} />
        <Modal.Header>
          Stake for Campaign
        </Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Amount</FormControl.Label>
            <Controller
              defaultValue={0}
              control={control}
              name="amount"
              rules={{
              required: true,
              }}
              render={({ field: { value, ...fieldProps } }) => (
                <>
                  <Input placeholder="XXXXX GRUMPYSHIB" value={value} {...fieldProps} />
                  <Text mt={2} color="gray.600" fontSize="8px">≈{(price * value / Math.pow(10, 18)).toFixed(2)}</Text>
                </>
              )}
            />
            {errors.amount && <Text>This is required.</Text>}
          </FormControl>
          <Button mt={4} variant="glow" onPress={handleSubmit(handleStake)}>Stake</Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default StakeModal;
