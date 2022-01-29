import { NextPage } from "next";
import { FormControl, Input, Modal, Text, View, Button, Link } from 'native-base';

import React from "react";
import Layout from "components/Layout";
import Title from "components/Title";
import { Controller, useForm } from "react-hook-form";
import useModal from "hooks/useModal";
import usePayment from "hooks/usePayment";
import { useWeb3React } from "@web3-react/core";

const CHARITY_WALLET_ADDRESS = '0x45a164217DA69B98f9cCa828cF0f22dDe0E95582';

const DonatePage: NextPage = () => {
  const { control, watch, formState: { errors }, handleSubmit } = useForm<{ value: number }>();
  const { library, account } = useWeb3React();
  const { send, price } = usePayment(library, account);
  const donationModal = useModal();

  const handleDonate = async ({ value }: { value: number }) => {
    const result = await send(value, CHARITY_WALLET_ADDRESS);
    if (result) {
    }
  }

  return (
    <Layout>
      <Title>Donate</Title>
      <Text textAlign="center">You can donate any amount on our charity wallet that would be spreaded between all campaigns</Text>
      <Text textAlign="center">
        Your donation will be transferred to a special charity wallet:
        <Link href="https://bscscan.com/address/0x45a164217DA69B98f9cCa828cF0f22dDe0E95582" isExternal>{CHARITY_WALLET_ADDRESS}</Link>
      </Text>
      <View mx="auto" mt={7} w={["auto", "auto", "auto", "450px"]}>
        <FormControl>
          <FormControl.Label>Amount</FormControl.Label>
          <Controller
            defaultValue={0}
            control={control}
            name="value"
            rules={{
            required: true,
            }}
            render={({ field: { value, ...fieldProps } }) => (
              <>
                <Input placeholder="XXXXX GRUMPYSHIB" value={value.toString()} {...fieldProps} />
                <Text mt={2} color="gray.600" fontSize="8px">≈{(price * value).toFixed(2)}</Text>
              </>
            )}
          />
          {errors.value && <Text>This is required.</Text>}
        </FormControl>
        <Button mt={4} mx="auto" maxW={250} variant="glow" onPress={handleSubmit(handleDonate)}>Donate</Button>
      </View>
      <Modal isOpen={donationModal.isOpen} onClose={donationModal.handleClose}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>
            Thank You
          </Modal.Header>
          <Modal.Body p={4}>
            You{"'"}ve successfully donated {watch('value')}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Layout>
  );
};

export default DonatePage;
