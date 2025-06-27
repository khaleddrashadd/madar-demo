import { DollarSign, FileCheck2, FileX2 } from 'lucide-react';
import DelinquentCard from './DelinquentCard';
const DelinquentCollectionOverView = ({ selectedPortfolio }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:w-10/12">
      <DelinquentCard
        title="عدد المقترضين"
        value={selectedPortfolio ? '2k' : '6k'}
        icon={<DollarSign className="w-10 h-10" />}
      />
      <DelinquentCard
        title="عدد العقود المتعثرة"
        value={selectedPortfolio ? '200' : '500'}
        icon={<FileCheck2 className="w-10 h-10" />}
      />
      <DelinquentCard
        title="العقود المتعثرة/العقود النشطة"
        value={selectedPortfolio ? '2%' : '4%'}
        icon={<FileX2 className="w-10 h-10" />}
      />
    </div>
  );
};
export default DelinquentCollectionOverView;
