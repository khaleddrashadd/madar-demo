import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Skeleton } from '@/components/ui/skeleton';
import BucketFilter from './BucketFilter';
import EmptyState from '@/components/EmptyState';
import { getSelectedMonth } from '../store/contractSlice';
import { useSelector } from 'react-redux';
import TooltipInfo from '@/components/TooltipInfo';

const BucketGrowthRate = ({
  children,
  isLoading,
  isEmpty,
  resetPagination,
}) => {
  const selectedMonth = useSelector(getSelectedMonth);
  if (isLoading) {
    return <Skeleton className="w-full h-[21.8rem]" />;
  }
  const title = selectedMonth.toString().trim()
    ? 'لا يوجد معدل تزايد بناءاً على العناصر المدخلة، يجب اختيار فترة اكثر من شهر.'
    : 'لا توجد بيانات';
  const emptyState = (
    <EmptyState>
      <p className="font-semibold">{title}</p>
    </EmptyState>
  );
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>معدل تزايد ال Buckets </span>
            <TooltipInfo id="bucketGrowthRate" place="top-start" delay={300}>
              <ul className="list-inside list-disc">
                <li>يمثل المعدل المتوسط للزيادة في كل حالة</li>
                <li>
                  يمكن للمستخدم اختيار حالة واحدة أو أكثر، وعندها يعرض النظام
                  بيانات هذه الحالة على معدل التزايد وجدول العقود الموجود في
                  الأسفل
                </li>
              </ul>
            </TooltipInfo>
          </div>
          {!isEmpty && <BucketFilter resetPagination={resetPagination} />}
        </CardTitle>
      </CardHeader>
      <CardContent>{isEmpty ? emptyState : children}</CardContent>
    </Card>
  );
};

export default BucketGrowthRate;
