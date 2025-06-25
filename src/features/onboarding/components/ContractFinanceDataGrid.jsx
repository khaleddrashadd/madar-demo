import { SaudiRiyal } from 'lucide-react';
import ContractDataGridRow from './ContractDataGridRow';
import { formatDate } from '@/lib/utils';
import { numberSeparator } from '@/utils/numberSeparator';
import { Skeleton } from '@/components/ui/skeleton';

const ContractFinanceDataGrid = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <Skeleton className="w-full h-96" />
        <Skeleton className="w-full h-96" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-ivory-850">
      <div className="bg-white rounded-lg overflow-hidden border border-ivory-200 h-fit">
        <ContractDataGridRow
          label="نوع الفائدة عند التأسيس"
          value={data?.interestTypeOrigination}
        />
        <ContractDataGridRow
          label="نسبة العائد السنوي المئوي الأصلية (APR%)"
          value={data?.originalAPR}
        />
        <ContractDataGridRow
          label="سقف تعديل السعر مدى الحياة"
          value={data?.lifeTimeCapRateAdjustment}
        />
        <ContractDataGridRow
          label="فترة إعادة الضبط (بالأشهر)"
          value={data?.resetInterval}
        />
        <ContractDataGridRow
          label="فترة السعر الثابت الأولية (بالأشهر)"
          value={data?.initialFixedRatePeriod}
        />
        <ContractDataGridRow
          label="المؤشر المستخدم لإعادة ضبط السعر"
          value={data?.indexUsedForRateReset}
        />
        <ContractDataGridRow
          label="الحد الأدنى لتعديل السعر مدى الحياة"
          value={data?.lifeTimeFloorOnRateAdjustment}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="أقصى زيادة في سعر الفائدة"
          value={data?.maximumInterestRateIncrease}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="أقصى انخفاض في سعر الفائدة"
          value={data?.maximumInterestRateDecrease}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="معدل فائدة المؤشر عند التأسيس"
          value={data?.interestIndexRateAtOrigination}
        />
        <ContractDataGridRow
          label="هامش سعر الفائدة"
          value={data?.interestRateMargin}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="القسط الشهري عند التمويل"
          value={numberSeparator(data?.initialMonthlyInstallment)}
          postIcon={<SaudiRiyal size={16} />}
        />
      </div>

      <div className="bg-white rounded-lg overflow-hidden border border-ivory-200 h-fit">
        <ContractDataGridRow label="نوع العقد" value={data?.contractTypeName} />
        <ContractDataGridRow
          label="مبلغ التمويل الأصل"
          value={numberSeparator(data?.originalLoanAmount)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="قيمة LTV"
          value={numberSeparator(data?.loanToValueAtOrigination)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="مبلغ الأصل الغير مدفوع"
          value={numberSeparator(data?.unpaidPrincipalBalance)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="تاريخ آخر إعادة تسعير"
          value={formatDate(data?.lastRepricingDate, ' DD/MM/YYYY')}
        />
        <ContractDataGridRow
          label="القسط الشهري"
          value={numberSeparator(data?.currentMonthlyInstallment)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="الدفعة الأخيرة"
          value={numberSeparator(data?.finalPayment)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="مدة عقد الإيجار"
          value={data?.lengthOfLeasePeriod}
        />
        <ContractDataGridRow
          label="المتبقي من أصل التمويل"
          value={numberSeparator(data?.outstandingAmount)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow label="تكلفة المدة" value={data?.termCostRate} />
      </div>
    </div>
  );
};
export default ContractFinanceDataGrid;
