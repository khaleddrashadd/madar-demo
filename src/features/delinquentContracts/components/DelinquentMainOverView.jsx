import { numberSeparator } from '@/utils/numberSeparator';
import { ChartLine, FileX2, SaudiRiyal, Users } from 'lucide-react';
import DelinquentCard from './DelinquentCard';

const DelinquentMainOverView = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <DelinquentCard
        title="عدد المقترضين"
        value="6k"
        icon={<Users className="w-10 h-10" />}
      />
      <DelinquentCard
        title="عدد العقود المتعثرة"
        value="500"
        icon={<FileX2 className="w-10 h-10" />}
      />
      <DelinquentCard
        title="العقود المتعثرة/العقود النشطة"
        value="4%"
        icon={<ChartLine className="w-10 h-10" />}
      />
      <DelinquentCard
        title="جميع العقود"
        value="500"
        icon={<FileX2 className="w-10 h-10" />}
      />
      <DelinquentCard
        title="إجمالي قيمة القروض المتعثرة"
        value={numberSeparator(1678987.8)}
        icon={<SaudiRiyal className="w-10 h-10" />}
      />
      <DelinquentCard
        title="المدفوعات الفعلية للقروض المتعثرة"
        value={numberSeparator(678000)}
        icon={<SaudiRiyal className="w-10 h-10" />}
      />
      <DelinquentCard
        title="إجمالي الإيرادات المتوقعة"
        value={numberSeparator(3435832.8)}
        icon={<SaudiRiyal className="w-10 h-10" />}
      />
      <DelinquentCard
        title="الخسارة المتوقعه"
        value={numberSeparator(1003987.8)}
        icon={<SaudiRiyal className="w-10 h-10" />}
      />
      <DelinquentCard
        title="ارباح مدار"
        value={numberSeparator(2000000)}
        icon={<SaudiRiyal className="w-10 h-10" />}
      />
    </div>
  );
};
export default DelinquentMainOverView;
