import { Check, SaudiRiyal, X } from 'lucide-react';
import ContractDataGridRow from './ContractDataGridRow';
import { formatDate } from '@/lib/utils';
import { numberSeparator } from '@/utils/numberSeparator';
import { Skeleton } from '@/components/ui/skeleton';

const ContractBeneficiaryDataGrid = ({ data, isLoading }) => {
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
          label="تاريخ انتهاء الهوية"
          value={formatDate(data?.nidExpiryDate, 'DD/MM/YYYY')}
        />
        <ContractDataGridRow label="الهوية الوطنية" value={data?.nid} />
        <ContractDataGridRow
          label="الجنس"
          value={
            data?.gender?.toLowerCase() === 'f'
              ? 'أنثى'
              : data?.gender?.toLowerCase() === 'm'
              ? 'ذكر'
              : data?.gender
          }
        />
        <ContractDataGridRow
          label="تاريخ الميلاد"
          value={formatDate(data?.dob, 'DD/MM/YYYY')}
        />
        <ContractDataGridRow label="الاسم بالكامل" value={data?.fullName} />
        <ContractDataGridRow label="رقم الجوال" value={data?.mobileNumber} />
        <ContractDataGridRow label="رقم المبني" value={data?.buildingNumber} />
        <ContractDataGridRow
          label="المديونية إلي الدخل ٪"
          value={data?.fti}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow label="البريد الالكتروني" value={data?.email} />
        <ContractDataGridRow label="رقم هوية الراعي" value="--" />
        <ContractDataGridRow label="اسم الراعي" value="--" />
        <ContractDataGridRow label="الشارع" value={data?.streetName} />
        <ContractDataGridRow label="الحي" value={data?.neighborhood} />
      </div>

      <div className="bg-white rounded-lg overflow-hidden border border-ivory-200 h-fit">
        <ContractDataGridRow label="المدينة" value={data?.cityName} />
        <ContractDataGridRow label="الرمز البريدي" value={data?.postalCode} />
        <ContractDataGridRow
          label="الرقم الإضافي"
          value={data?.additionalNumber}
        />
        <ContractDataGridRow label="المهنة" value={data?.professionName} />
        <ContractDataGridRow
          label="إجمالي الدخل الشهري"
          value={numberSeparator(data?.netMonthlyIncome)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="التزامات أخري"
          value={data?.otherObligations}
        />
        <ContractDataGridRow
          label="مقترض مشارك"
          value={data?.isCoBorrower ? 'نعم' : 'لا'}
          preIcon={
            data?.isCoBorrower ? (
              <Check className="text-secondary-400" size={16} />
            ) : (
              <X className="text-danger-300" size={16} />
            )
          }
        />
        <ContractDataGridRow label="اسم البنك" value="--" />
        <ContractDataGridRow label="رقم الحساب" value={data?.iban} />
        <ContractDataGridRow
          label="متوفي "
          value={data?.isDead ? 'نعم' : 'لا'}
          preIcon={
            data?.isRestructured ? (
              <Check className="text-secondary-400" size={16} />
            ) : (
              <X className="text-danger-300" size={16} />
            )
          }
        />
        <ContractDataGridRow
          label="تاريخ الوفاة"
          value={formatDate(data?.deathDate, ' DD/MM/YYYY')}
        />
      </div>
    </div>
  );
};
export default ContractBeneficiaryDataGrid;
