import ActualExpectedDelinquentTable from './ActualExpectedDelinquentTable';
import DelinquentContractsByRateChart from './DelinquentContractsByRateChart';
import DelinquentContractsChart from './DelinquentContractsChart';
import LoansExpectedRevenueChart from './LoansExpectedRevenueChart';

const DelinquentMainCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      <LoansExpectedRevenueChart />
      <DelinquentContractsByRateChart />
      <DelinquentContractsChart />
      <ActualExpectedDelinquentTable />
    </div>
  );
};
export default DelinquentMainCharts;
