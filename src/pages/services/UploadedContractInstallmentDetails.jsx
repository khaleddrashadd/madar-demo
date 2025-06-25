import TransactionTable from '@/features/onboarding/components/TransactionTable';
import InstallmentBriefDetails from './InstallmentBriefDetails';
const UploadedContractInstallmentDetails = () => {
  return (
    <div className="p-4 mt-2">
      <InstallmentBriefDetails />
      <TransactionTable />
    </div>
  );
};
export default UploadedContractInstallmentDetails;
