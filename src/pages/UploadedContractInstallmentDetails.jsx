import TransactionTable from '@/features/addContracts/components/TransactionTable';
import InstallmentBriefDetails from '../features/addContracts/components/InstallmentBriefDetails';
const UploadedContractInstallmentDetails = () => {
  return (
    <div className="p-4 mt-2">
      <InstallmentBriefDetails />
      <TransactionTable />
    </div>
  );
};
export default UploadedContractInstallmentDetails;
