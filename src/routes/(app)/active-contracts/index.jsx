import ActiveContracts from '@/pages/ActiveContracts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/active-contracts/')({
  component: ActiveContracts,
});
