import ForcastChart from './ForcastChart';
import TotalLoansPerPortfolioChart from './TotalLoansPerPortfolioChart';

const data = [
  { month: 'Jan', value: 480, type: 'historical' },
  { month: 'Feb', value: 550, type: 'historical' },
  { month: 'Mar', value: 420, type: 'historical' },
  { month: 'Apr', value: 580, type: 'historical' },
  { month: 'May', value: 460, type: 'historical' },
  { month: 'Jun', value: 640, type: 'historical' },
  { month: 'Jul', value: 780, type: 'forecast' },
  { month: 'Aug', value: 870, type: 'forecast' },
  { month: 'Sept', value: 920, type: 'forecast' },
  { month: 'Oct', value: 950, type: 'forecast' },
  { month: 'Nov', value: 980, type: 'forecast' },
  { month: 'Dec', value: 1000, type: 'forecast' },
];

const singlePortfolioData = [
  { month: 'Jan', value: 180, type: 'historical' },
  { month: 'Feb', value: 250, type: 'historical' },
  { month: 'Mar', value: 160, type: 'historical' },
  { month: 'Apr', value: 170, type: 'historical' },
  { month: 'May', value: 99, type: 'historical' },
  { month: 'Jun', value: 330, type: 'historical' },
  { month: 'Jul', value: 225, type: 'forecast' },
  { month: 'Aug', value: 550, type: 'forecast' },
  { month: 'Sept', value: 520, type: 'forecast' },
  { month: 'Oct', value: 560, type: 'forecast' },
  { month: 'Nov', value: 530, type: 'forecast' },
  { month: 'Dec', value: 630, type: 'forecast' },
];
const DelinquentCollectionCharts = ({
  selectedPortfolio,
  setSelectedPortfolio,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      <ForcastChart data={selectedPortfolio ? singlePortfolioData : data} />
      <TotalLoansPerPortfolioChart
        selectedPortfolio={selectedPortfolio}
        setSelectedPortfolio={setSelectedPortfolio}
      />
    </div>
  );
};
export default DelinquentCollectionCharts;
