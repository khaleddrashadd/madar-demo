import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import EmptyState from '@/components/EmptyState';
import TooltipInfo from '@/components/TooltipInfo';
import { Skeleton } from '@/components/ui/skeleton';

const BucketRate = ({ children, isLoading, isEmpty }) => {
  if (isLoading) {
    return <Skeleton className="w-full h-[21.8rem]" />;
  }
  const emptyState = (
    <EmptyState>
      <p className="font-semibold">لا توجد بيانات</p>
    </EmptyState>
  );
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <div className="flex items-center gap-2">
          <CardTitle className="text-right font-bold">
            <div className="flex items-center gap-1">
              <span> نسبة معدل ال Buckets (%)</span>
            </div>
          </CardTitle>
          <TooltipInfo id="bucketRate" place="top-middle" delay={300}>
            يوضح نسبة معدل كل حالة قسط (مثال current، Bucket 1, Bucket 2) خلال
            الفترة الزمنية المحددة
          </TooltipInfo>
        </div>
      </CardHeader>
      <CardContent>{isEmpty ? emptyState : children}</CardContent>
    </Card>
  );
};

export default BucketRate;
