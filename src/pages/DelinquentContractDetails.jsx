import BeneficiaryDetails from '@/features/delinquentContracts/components/BeneficiaryDetails';
import BeneficiaryNotes from '@/features/delinquentContracts/components/BeneficiaryNotes';
import BeneficiaryPerformanceChart from '@/features/delinquentContracts/components/BeneficiaryPerformanceChart';
import ComplaintsTable from '@/features/delinquentContracts/components/ComplaintsTable';
import ContractDetails from '@/features/delinquentContracts/components/ContractDetails';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const DelinquentContractDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6">
      <div className="p-6 flex items-start gap-2 text-4xl bg-white rounded-md mt-2">
        <div className="cursor-pointer" onClick={() => navigate(-1)}>
          <ArrowRight className="w-10 h-10" />
        </div>
        <h2>عبد الله مسعود علي</h2>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-4 gap-4">
        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-bold">بيانات المستفيد</h4>
          <BeneficiaryDetails />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-bold">اداء المستفيد</h4>
            <BeneficiaryPerformanceChart />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-bold">الشكوي</h4>
            <ComplaintsTable />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-bold">بيانات العقد</h4>
          <div className="flex flex-col gap-3">
            <ContractDetails />
            <BeneficiaryNotes />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DelinquentContractDetails;
