import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import EmptyState from '@/components/EmptyState';
import TooltipInfo from '@/components/TooltipInfo';
import { Skeleton } from '@/components/ui/skeleton';

const PaymentStatus = ({ children, isLoading, isEmpty }) => {
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
              <span>نسبة حالة الأقساط (%)</span>
            </div>
          </CardTitle>
          <TooltipInfo id="paymentStatus" place="top-middle" delay={300}>
            يوضح نسبة الاقساط في كل حالة (سداد كلي، سداد جزئي، لم يسدد) خلال
            الفترة الزمنية المحددة
          </TooltipInfo>
        </div>
      </CardHeader>
      <CardContent>{isEmpty ? emptyState : children}</CardContent>
    </Card>
  );
};

export default PaymentStatus;
