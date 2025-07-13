import DelinquentContractDetails from '@/pages/DelinquentContractDetails';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/collections/delinquent-contracts/$id')({
  component: DelinquentContractDetails,
});
