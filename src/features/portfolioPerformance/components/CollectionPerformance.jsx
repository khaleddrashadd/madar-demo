import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import EmptyState from '@/components/EmptyState';
import { Skeleton } from '@/components/ui/skeleton';
import TooltipInfo from '@/components/TooltipInfo';
import SaudiRiyal from '@/components/SaudiRiyal';

const CollectionPerformance = ({ children, isLoading, isEmpty }) => {
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
        <CardTitle className="text-right font-bold">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <span>متابعة آداء التحصيل</span>
              <span className="flex">
                (<SaudiRiyal size="lg" />)
              </span>
            </div>
            <TooltipInfo
              id="collectionPerformance"
              place="left-middle"
              delay={300}
            >
              <p>
                يعرض الرسم البياني أداء التحصيل المالي، حيث يُظهر المقارنة بين
                الأداء الفعلي والأداء المتوقع
              </p>
              <ul className="list-inside list-disc">
                <li>
                  الاداء الفعلي هو مبالغ التحصيل المفترض تحصيلها خلال الفترة
                  الزمنية المحددة
                </li>
                <li>
                  الاداء المتوقع هو مبالغ التحصيل المتوقع تحصيلها خلال الفترة
                  الزمنية المحددة وايضاً تشمل المبالغ المتأخرة من الأشهر السابقة
                  لم يتم تحصيلها في وقتها
                </li>
              </ul>
            </TooltipInfo>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>{isEmpty ? emptyState : children}</CardContent>
    </Card>
  );
};

export default CollectionPerformance;
