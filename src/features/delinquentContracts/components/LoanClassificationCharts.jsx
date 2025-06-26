import CollectionPerformanceChart from './CollectionPerformanceChart';
import LoanClassificationTable from './LoanClassificationTable';
import LoanOverDueChart from './LoanOverDueChart';

const LoanClassificationCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <CollectionPerformanceChart />
      <LoanOverDueChart />
      <div className="lg:col-span-2">
        <LoanClassificationTable />
      </div>
    </div>
  );
};
export default LoanClassificationCharts;
