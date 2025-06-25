import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Skeleton } from '@/components/ui/skeleton';
import ContractBadge from './ContractBadge';
import EmptyState from '@/components/EmptyState';
import TooltipInfo from '@/components/TooltipInfo';

const ContractsStatuses = ({ children, isLoading, isEmpty, total }) => {
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
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2>حالات العقود</h2>
            <TooltipInfo id="contractsStatuses" place="top-start" delay={300}>
              <ul className="list-inside list-disc">
                <li>إجمالي عدد العقود في كل حالة قسط</li>
                <li>
                  يمكن للمستخدم اختيار حالة معينة، وعندها يعرض النظام بيانات هذه
                  الحالة على معدل التزايد وجدول العقود الموجود في الأسفل
                </li>
              </ul>
            </TooltipInfo>
          </div>
          <ContractBadge className="font-semibold">
            <span> إجمالي عدد العقود: </span>
            <span>{total}</span>
          </ContractBadge>
        </CardTitle>
      </CardHeader>
      <CardContent>{isEmpty ? emptyState : children}</CardContent>
    </Card>
  );
};

export default ContractsStatuses;
