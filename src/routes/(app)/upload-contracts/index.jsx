import UploadContracts from '@/pages/UploadContracts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/upload-contracts/')({
  component: UploadContracts,
});
