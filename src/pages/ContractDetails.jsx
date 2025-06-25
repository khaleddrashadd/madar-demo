import ContractBriefDetails from '@/features/addContracts/components/ContractBriefDetails';
import ContractData from '@/features/addContracts/components/ContractData';

const ContractDetails = () => {
  return (
    <div className="p-4 mt-2">
      <ContractBriefDetails />
      <ContractData />
    </div>
  );
};
export default ContractDetails;
