import ActiveContractsFilter from '@/features/activeContracts/components/ActiveContractsFilter';
import ActiveContractsHeader from '@/features/activeContracts/components/ActiveContractsHeader';
import ActiveContractsTabFilter from '@/features/activeContracts/components/ActiveContractsTabFilter';
import ActiveContractsTable from '@/features/activeContracts/components/ActiveContractsTable';
import { useState } from 'react';

const ActiveContracts = () => {
  //empty means all
  const [selectedContractType, setSelectedContractType] = useState([]);

  const onSelectFilter = (type) => {
    setSelectedContractType((prev) => {
      if (prev.includes(type)) {
        return prev.filter((item) => item !== type);
      } else {
        return [...prev, type];
      }
    });
  };
  return (
    <div className="p-4 mt-2">
      <ActiveContractsHeader />
      <ActiveContractsTabFilter
        selectedContractType={selectedContractType}
        onSelectFilter={onSelectFilter}
      />
      <div className="mt-4">
        <ActiveContractsFilter />
      </div>
      <div className="mt-4">
        <ActiveContractsTable selectedContractType={selectedContractType} />
      </div>
    </div>
  );
};
export default ActiveContracts;
