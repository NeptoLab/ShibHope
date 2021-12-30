import { Button, FormControl, HStack, Input, Modal, Text } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import React from 'react'
import usePayment from 'hooks/usePayment';
import { useWeb3React } from '@web3-react/core';
import { IModalProps } from 'native-base/lib/typescript/components/composites/Modal';
import { gql, useMutation } from '@apollo/client';
import { Campaign, Mutation_Root } from 'types/models';

const StakeCampaignMutation = gql`
  mutation stake_campaign($object: StakeCampaignArgs!) {
    stake_campaign(object: $object) {
      id
    }
  }
`;

const StakeModal: React.FC<IModalProps & { campaign: Campaign }> = ({ campaign, ...props }) => {
  const { formState: { errors }, control, handleSubmit } = useForm();
  const { account, library } = useWeb3React();
  const { price, send } = usePayment(library, account);

  const [ stakeCampaign ] = useMutation<Mutation_Root>(StakeCampaignMutation);

  const handleStake = async ({ amount }: { amount: number }) => {
    const result = await send(amount, campaign.owner);
    if (result) {
      await stakeCampaign({ variables: { object: { amount, campaign_id: campaign.id, tx_number: result.transactionHash } } });
    }
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
