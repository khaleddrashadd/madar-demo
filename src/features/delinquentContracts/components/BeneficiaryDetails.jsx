import ContractDataGridRow from '@/features/onboarding/components/ContractDataGridRow';
import SaudiRiyal from '@/components/SaudiRiyal';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const data = {
  alamServiceStatus: 'تم التحديث',
  bank: 'BAI',
  beneficiaryName: 'عبد الله محمود علي',
  nationalId: '1236224477',
  idExpiryDate: '01/09/2028',
  financeProviderName: 'BAI',
  birthDate: '01/09/1966',
  nationality: 'سعودي',
  gender: 'ذكر',
  sector: 'حكومي',
  companyName: 'شركة الكهرباء',
  mobileNumber: '966500',
  portfolioOwner: 'اسم الشركة',
  monthlyIncome: '30,500.00',
};

const BeneficiaryDetails = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-ivory-200 h-fit">
      <ContractDataGridRow
        label="حالة خدمة علم"
        value={data?.alamServiceStatus}
      />
      <ContractDataGridRow label="البنك" value={data?.bank} />
      <ContractDataGridRow label="اسم المستفيد" value={data?.beneficiaryName} />
      <ContractDataGridRow
        label="رقم الهوية"
        value={data?.nationalId}
        postIcon={
          <Button variant="ghost" className="p-0 h-fit rounded-full">
            <Badge
              variant="wait"
              className="border-none h-8 w-8 flex items-center justify-center rounded-full"
            >
              <Eye className="w-4 h-4 text-extended-500" />
            </Badge>
          </Button>
        }
      />
      <ContractDataGridRow
        label="تاريخ انتهاء رقم الهوية"
        value={data?.idExpiryDate}
      />

      <ContractDataGridRow
        label="تاريخ الميلاد الميلادي"
        value={data?.birthDate}
      />
      <ContractDataGridRow label="الجنسية" value={data?.nationality} />
      <ContractDataGridRow label="النوع ذكر" value={data?.gender} />
      <ContractDataGridRow label="القطاع" value={data?.sector} />
      <ContractDataGridRow label="اسم الشركة" value={data?.companyName} />
      <ContractDataGridRow label="رقم الجوال" value={data?.mobileNumber} />
      <ContractDataGridRow label="مالك المحفظة" value={data?.portfolioOwner} />
      <ContractDataGridRow
        label="الدخل الشهري"
        value={data?.monthlyIncome}
        iconClassName="flex-1"
        valueClassName="w-fit"
        postIcon={
          <div className="flex items-center justify-between w-full flex-1">
            <SaudiRiyal className="w-4 h-4" />
            <Button variant="ghost" className="p-0 h-fit rounded-full">
              <Badge
                variant="wait"
                className="border-none h-8 w-8 flex items-center justify-center rounded-full"
              >
                <Eye className="w-4 h-4 text-extended-500" />
              </Badge>
            </Button>
          </div>
        }
      />
    </div>
  );
};
export default BeneficiaryDetails;
