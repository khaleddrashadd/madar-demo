import { Check, Eye, File, FolderOpen, X } from 'lucide-react';
import ContractDataGridRow from './ContractDataGridRow';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

const ContractDocsDataGrid = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <Skeleton className="w-full h-96" />
        <Skeleton className="w-full h-96" />
      </div>
    );
  }
  return (
    <div className="text-ivory-850">
      <div className="bg-white rounded-lg overflow-hidden border border-ivory-200 h-fit">
        <ContractDataGridRow
          labelClassName="min-w-[25%] flex-initial"
          label="تحميل الملف كاملاً"
          value={
            <div className="cursor-pointer hover:underline flex items-center text-sm gap-2 text-primary-500">
              <FolderOpen className="w-4 h-4" />
              قم بالضغط لتصفح الملف كاملاً من هنا
            </div>
          }
        />
        <ContractDataGridRow
          labelClassName="min-w-[25%]  flex-initial"
          label="بطاقة الهوية الوطنية"
          value={<DocsValue value={data?.nid} />}
        />
        <ContractDataGridRow
          labelClassName="min-w-[25%]  flex-initial"
          label="شهادة تعريف بالراتب"
          value={<DocsValue value={data?.salaryCertificate} />}
        />
        <ContractDataGridRow
          labelClassName="min-w-[25%] flex-initial"
          label="عقد الإيجار"
          value={<DocsValue value={data?.leaseContract} />}
        />
        <ContractDataGridRow
          labelClassName="min-w-[25%] flex-initial"
          label="جدول الأقساط"
          value={<DocsValue value={data?.installmentSchedule} />}
        />
        <ContractDataGridRow
          labelClassName="min-w-[25%] flex-initial"
          label="سندات لأمر"
          value={<DocsValue value={data?.promissoryNotes} />}
        />
        <ContractDataGridRow
          labelClassName="min-w-[25%] flex-initial"
          label="تقييمات"
          value={<DocsValue value={data?.appraisals} />}
        />
        <ContractDataGridRow
          labelClassName="min-w-[25%] flex-initial"
          label="صك الملكية"
          value={<DocsValue value={data?.propertyDeed} />}
        />
        <ContractDataGridRow
          labelClassName="min-w-[25%]  flex-initial"
          label="نموذج مصاريف المستفيد"
          value={<DocsValue value={data?.beneficiaryExpensesForm} />}
        />
        <ContractDataGridRow
          labelClassName="min-w-[25%]  flex-initial"
          label="ملفات أخرى"
          value={<DocsValue value={data?.otherFiles} />}
        />
      </div>
    </div>
  );
};

const DocsValue = ({ value }) => {
  if (!value) {
    return (
      <div className="flex items-center gap-1">
        <X className="w-4 h-4 text-red-500" />
        <span className="text-sm">لا يوجد</span>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-1">
        <Check className="w-4 h-4 text-secondary-400" />
        <span className="text-sm">يوجد</span>
      </div>
      <div className="p-2 flex justify-between items-center rounded-sm border border-ivory-200">
        <div className="flex items-center justify-between w-60">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary-50/10 rounded-sm">
              <File className="w-4 h-4" />
            </div>
            {value}
          </div>
          <Badge
            variant="wait"
            className="border-none h-9 w-9 flex items-center justify-center rounded-md"
          >
            <Eye className="w-5 h-5 text-extended-500" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ContractDocsDataGrid;
