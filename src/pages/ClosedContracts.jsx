import ClosedContractsFilter from '@/features/closedContracts/components/ClosedContractsFilter';
import ClosedContractsHeader from '@/features/closedContracts/components/ClosedContractsHeader';
import ClosedContractsTable from '@/features/closedContracts/components/ClosedContractsTable';

const ClosedContracts = () => {
  //empty means all

  return (
    <div className="p-4 mt-2">
      <ClosedContractsHeader />

      <div className="mt-4">
        <ClosedContractsFilter />
      </div>
      <div className="mt-4">
        <ClosedContractsTable />
      </div>
    </div>
  );
};
export default ClosedContracts;
