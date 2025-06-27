import ContractDataGridRow from '@/features/onboarding/components/ContractDataGridRow';
import SaudiRiyal from '@/components/SaudiRiyal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';

const data = {
  originationDate: '01/01/2025',
  dueDate: '05/02/2025',
  contractAddress: 'حي الملقا - جدة',
  contractType: 'سكني',
  contractStatus: 'مرابحة',
  contractNumber: 'SR7654',
  financingAmount: '270,520.00',
  bank: 'BAI',
};

const ContractDetails = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-ivory-200 h-fit">
      <ContractDataGridRow label="تاريخ النشأة" value={data?.originationDate} />
      <ContractDataGridRow label="تاريخ الاستحقاق" value={data?.dueDate} />
      <ContractDataGridRow label="عنوان العقار" value={data?.contractAddress} />
      <ContractDataGridRow label="نوع العقار" value={data?.contractType} />
      <ContractDataGridRow
        label="نوع العقد"
        value={data?.contractStatus}
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
      <ContractDataGridRow label="رقم العقد" value={data?.contractNumber} />
      <ContractDataGridRow
        label="قيمة التمويل"
        value={data?.financingAmount}
        valueClassName="w-fit"
        iconClassName="flex-1"
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
      <ContractDataGridRow label="البنك" value={data?.bank} />
    </div>
  );
};
export default ContractDetails;
