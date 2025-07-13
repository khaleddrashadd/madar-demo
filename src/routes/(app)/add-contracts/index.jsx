import AddContracts from '@/pages/AddContracts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/add-contracts/')({
  component: AddContracts,
});
