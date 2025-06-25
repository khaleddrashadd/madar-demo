import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import EmptyState from '@/components/EmptyState';
import TooltipInfo from '@/components/TooltipInfo';
import { Skeleton } from '@/components/ui/skeleton';
import SaudiRiyal from '@/components/SaudiRiyal';

const PaymentAmount = ({ children, isLoading, isEmpty }) => {
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
          <CardTitle className="text-right font-bold flex gap-2">
            مبلغ الأقساط
            <span className="flex">
              {' '}
              (<SaudiRiyal size="lg" />)
            </span>
          </CardTitle>
          <TooltipInfo id="paymentAmount" place="top-end" delay={300}>
            يعرض المبالغ المستحقة كأقساط في كل حالة (سداد كلي، سداد جزئي، لم
            يُسدَّد) خلال الفترة الزمنية المحددة
          </TooltipInfo>
        </div>
      </CardHeader>
      <CardContent>{isEmpty ? emptyState : children}</CardContent>
    </Card>
  );
};

export default PaymentAmount;
