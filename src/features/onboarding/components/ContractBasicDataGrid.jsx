import { Check, SaudiRiyal, X } from 'lucide-react';
import ContractDataGridRow from './ContractDataGridRow';
import { formatDate } from '@/lib/utils';
import { numberSeparator } from '@/utils/numberSeparator';
import { Skeleton } from '@/components/ui/skeleton';

const ContractBasicDataGrid = ({ data, isLoading }) => {
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
          label="رقم العقد"
          value={data?.mortgageAccountNumber}
        />
        <ContractDataGridRow label="الهوية الوطنية" value={data?.nationalId} />
        <ContractDataGridRow label="نوع العقد" value={data?.contractType} />
        <ContractDataGridRow label="نوع الحساب" value={data?.accountType} />
        <ContractDataGridRow
          label="تاريخ العقد"
          value={formatDate(data?.originationDate, 'DD/MM/YYYY')}
        />
        <ContractDataGridRow label="اسم الممول" value={data?.originatorName} />
        <ContractDataGridRow
          label="القسط الشهري"
          value={numberSeparator(data?.currentMonthlyInstallment)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="تاريخ إنشاء سمة"
          value={formatDate(data?.simahGeneratedDate, ' DD/MM/YYYY')}
        />
        <ContractDataGridRow
          label="مبلغ الرصيد الإضافي"
          value={numberSeparator(data?.advanceAmount)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="تاريخ الفاتورة القادمة"
          value={formatDate(data?.nextBillDate, ' DD/MM/YYYY')}
        />
        <ContractDataGridRow
          label="قرض مدعوم"
          value={data?.isREDFSubsidized ? 'نعم' : 'لا'}
          preIcon={
            data?.isREDFSubsidized ? (
              <Check className="text-secondary-400" size={16} />
            ) : (
              <X className="text-danger-300" size={16} />
            )
          }
        />
        <ContractDataGridRow
          label="الاسم بالكامل"
          value={data?.beneficiaryName}
        />
        <ContractDataGridRow label="رقم الجوال" value={data?.mobileNumber} />
        <ContractDataGridRow
          label="مالك المحفظة"
          value={data?.portfolioOwner}
        />
        <ContractDataGridRow
          label="منشئ المحفظة"
          value={data?.portfolioOriginator}
        />
        <ContractDataGridRow
          label="رقم المحفظة"
          value={data?.portfolioNumber}
        />
        <ContractDataGridRow
          label="تاريخ إنتهاء العقد"
          value={formatDate(data?.maturityDate, ' DD/MM/YYYY')}
        />
        <ContractDataGridRow label="الايام المتأخرة" value={data?.dpd} />
      </div>

      <div className="bg-white rounded-lg overflow-hidden border border-ivory-200 h-fit">
        <ContractDataGridRow
          label="تاريخ أول عملية"
          value={formatDate(data?.firstAppraisalDate, ' DD/MM/YYYY')}
        />
        <ContractDataGridRow
          label="فترة السداد"
          value={data?.paymentFrequency}
        />
        <ContractDataGridRow label="يوم القسط" value={data?.installmentDay} />
        <ContractDataGridRow
          label="المدة عند التمويل"
          value={data?.initialTerm}
        />
        <ContractDataGridRow
          label="الدفعة الأولي"
          value={numberSeparator(data?.downPayment)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="مبلغ المديونية الحالي"
          value={numberSeparator(data?.currentLoanAmount)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow label="نوع العقار" value={data?.propertyType} />
        <ContractDataGridRow
          label="عدد الأقساط المدفوعة"
          value={data?.numberofPaidInstallments}
        />
        <ContractDataGridRow
          label="المدة المتبقية"
          value={data?.remainingTerm}
        />
        <ContractDataGridRow
          label="نوع الفائدة الحالي"
          value={data?.interestTypeOrigination}
        />
        <ContractDataGridRow
          label="مجدول"
          value={data?.isRestructured ? 'نعم' : 'لا'}
          preIcon={
            data?.isRestructured ? (
              <Check className="text-secondary-400" size={16} />
            ) : (
              <X className="text-danger-300" size={16} />
            )
          }
        />
        <ContractDataGridRow
          label="المبلغ الإجمالي للمديونية"
          value={numberSeparator(data?.totalPayableAmount)}
          postIcon={<SaudiRiyal size={16} />}
        />
        <ContractDataGridRow
          label="هل يوجد كفيل؟"
          value={data?.isGuarantor ? 'نعم' : 'لا'}
          preIcon={
            data?.isGuarantor ? (
              <Check className="text-secondary-400" size={16} />
            ) : (
              <X className="text-danger-300" size={16} />
            )
          }
        />
        <ContractDataGridRow
          label="تاريخ إنتهاء العقد عند التمويل"
          value={formatDate(data?.initialMaturityDate, ' DD/MM/YYYY')}
        />
        <ContractDataGridRow
          label="الرقم المرجعي للصندوق"
          value={data?.redfRefNumber}
        />
      </div>
    </div>
  );
};
export default ContractBasicDataGrid;
