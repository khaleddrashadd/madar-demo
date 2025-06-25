import { useState } from 'react';
import UploadContractsForm from './UploadContractsForm';
import UploadContractsStepper from './UploadContractsStepper';
import { CONTRACT_UPLOAD_STEPS } from '../constants/steps';
import { useSuspenseQuery } from '@tanstack/react-query';
import checkIsAllowedToUpload from '../services/checkIsAllowedToUpload';
import UnderProgressNoUploadFiles from './UnderProgressNoUploadFiles';
import { useSelector } from 'react-redux';
import { getAdminLegalOwner } from '@/layouts/store/prevailageSlice';

const UploadContractsContent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const prevailage = useSelector(getAdminLegalOwner);
  const { data: isAllowedToUpload } = useSuspenseQuery({
    queryKey: ['checkIsAllowedToUpload'],
    queryFn: () => checkIsAllowedToUpload(prevailage),
  });
  return (
    <>
      {isAllowedToUpload ? (
        <div className="flex flex-col gap-y-4">
          <div className="mt-5 flex items-center justify-center bg-white p-6 rounded-lg border border-ivory-200">
            <UploadContractsStepper
              steps={CONTRACT_UPLOAD_STEPS}
              currentStep={currentStep}
            />
          </div>
          <UploadContractsForm
            currentStep={currentStep}
            onChangeSteps={setCurrentStep}
          />
        </div>
      ) : (
        <UnderProgressNoUploadFiles />
      )}
    </>
  );
};

export default UploadContractsContent;
