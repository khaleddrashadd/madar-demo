import DelinquentContracts from '@/pages/DelinquentContracts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/collections/delinquent-contracts/')({
  component: DelinquentContracts,
});
