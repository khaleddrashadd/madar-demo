import { useState } from 'react';
import UploadContractsForm from './UploadContractsForm';
import UploadContractsStepper from './UploadContractsStepper';
import { CONTRACT_UPLOAD_STEPS } from '../constants/steps';

const UploadContractsContent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
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
  );
};

export default UploadContractsContent;
