import AppHeading from '@/components/AppHeading';
import UploadContractsContent from '@/features/onboarding/components/UploadContractsContent';
import UploadContractsSkeleton from '@/features/onboarding/components/UploadContractsSkeleton';
import { Suspense } from 'react';

const UploadContracts = () => {
  return (
    <div className="p-4">
      <AppHeading
        title="إسناد المحافظ"
        className="bg-white font-semibold p-6"
      />
      <Suspense fallback={<UploadContractsSkeleton />}>
        <UploadContractsContent />
      </Suspense>
    </div>
  );
};

export default UploadContracts;
