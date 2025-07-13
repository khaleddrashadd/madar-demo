import ExportExcelButton from '@/components/ExportExcelButton';
import { useNavigate, useParams } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

const InstallmentBriefDetails = () => {
  const transactionId = useParams({
    select: (params) => params.transactionId,
  });

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between bg-white p-6 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="cursor-pointer" onClick={() => navigate({ to: '..' })}>
          <ArrowRight className="font-bold h-6 w-6" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 text-sm text-ivory-650">
            <span>تاريخ القسط 26/07/2023</span>
          </div>
          <div className="flex items-center gap-2 text-2xl text-ivory-950 font-bold">
            قسط رقم
            <span>#{transactionId}</span>
          </div>
        </div>
      </div>

      <ExportExcelButton className="text-primary-500">
        إستخراج كملف Excel
      </ExportExcelButton>
    </div>
  );
};

export default InstallmentBriefDetails;
