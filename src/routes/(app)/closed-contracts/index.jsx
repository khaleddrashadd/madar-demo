import ClosedContracts from '@/pages/ClosedContracts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/closed-contracts/')({
  component: ClosedContracts,
});
