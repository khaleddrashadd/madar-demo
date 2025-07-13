import UploadedContractInstallmentDetails from '@/pages/UploadedContractInstallmentDetails';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/(app)/installment/$transactionId',
)({
  component: UploadedContractInstallmentDetails,
});
