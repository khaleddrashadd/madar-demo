import { SaudiRiyal } from 'lucide-react';
import ContractDataGridRow from './ContractDataGridRow';
import { formatDate } from '@/lib/utils';
import { numberSeparator } from '@/utils/numberSeparator';
import { Skeleton } from '@/components/ui/skeleton';

const ContractPropertyDataGrid = ({ data, isLoading }) => {
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
          label="نوع العقار"
          value={data?.propertyTypeName}
        />
        <ContractDataGridRow label="رقم المبنى" value={data?.buildingNumber} />
        <ContractDataGridRow label="الشارع" value={data?.streetName} />
        <ContractDataGridRow label="الحي" value={data?.neighborhood} />
        <ContractDataGridRow label="المدينة" value={data?.cityName} />
        <ContractDataGridRow label="الرمز البريدي" value={data?.postalCode} />
        <ContractDataGridRow
          label="الرقم الإضافي"
          value={data?.additionalNumber}
        />
        <ContractDataGridRow
          label="حالة الاشغال"
          value={data?.occupancyStatus}
        />
      </div>

      <div className="bg-white rounded-lg overflow-hidden border border-ivory-200 h-fit">
        <ContractDataGridRow
          label="تاريخ التقييم الأول"
          value={formatDate(data?.firstAppraisalDate, 'DD/MM/YYYY')}
        />
        <ContractDataGridRow
          label="مبلغ التقييم الأول"
          value={data?.firstAppraisalValuation}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="تاريخ التقييم الثاني"
          value={formatDate(data?.secondAppraisalDate, 'DD/MM/YYYY')}
        />
        <ContractDataGridRow
          label="مبلغ التقييم الثاني"
          value={numberSeparator(data?.secondAppraisalValuation)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="مبلغ شراء العقار"
          value={numberSeparator(data?.propertyPurchaseAmount)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="تكلفة المدة"
          value={data?.interestIndexUsedAtOrigination}
          postIcon={<SaudiRiyal size={16} />}
        />
      </div>
    </div>
  );
};
export default ContractPropertyDataGrid;
