import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import EmptyState from '@/components/EmptyState';
import TooltipInfo from '@/components/TooltipInfo';
import { Skeleton } from '@/components/ui/skeleton';

const PortfoliosTotalContracts = ({ children, isLoading, isEmpty }) => {
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
            إجمالي عدد العقود للمحافظ
          </CardTitle>
          <TooltipInfo
            id="portfoliosTotalContracts"
            place="top-start"
            delay={300}
          >
            <ul className="list-inside list-disc">
              <li>يعرض العدد الإجمالي للعقود داخل كل محفظة</li>
              <li>
                يمكن للمستخدم اختيار محفظة معينة، وعندها يتم تحديث جميع الرسوم
                البيانية في لوحة التحكم لعرض بيانات المحفظة المحددة
              </li>
            </ul>
          </TooltipInfo>
        </div>
      </CardHeader>
      <CardContent>{isEmpty ? emptyState : children}</CardContent>
    </Card>
  );
};

export default PortfoliosTotalContracts;
