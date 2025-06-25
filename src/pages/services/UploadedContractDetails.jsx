import ContractBriefDetails from '../../features/onboarding/components/ContractBriefDetails';
import ContractData from '@/features/onboarding/components/ContractData';

const UploadedContractDetails = () => {
  return (
    <div className="p-4 mt-2">
      <ContractBriefDetails />
      <ContractData />
    </div>
  );
};
export default UploadedContractDetails;
