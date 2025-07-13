import ContractDetails from '@/pages/ContractDetails';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/add-contracts/$contractId')({
  component: ContractDetails,
});
