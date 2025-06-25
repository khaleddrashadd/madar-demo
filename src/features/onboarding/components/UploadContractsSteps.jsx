import Step from './Step';
import StepForm from './StepForm';

const UploadContractsSteps = ({
  currentStep,
  setUploadedFiles,
  uploadedFiles,
}) => {
  let renderSteps;
  switch (currentStep) {
    case 1:
      renderSteps = (
        <>
          {!uploadedFiles.contractFile && <StepForm />}
          <Step
            currentStep={currentStep}
            title="ملف العقود"
            onSelectFile={(file) =>
              setUploadedFiles((prev) => ({
                ...prev,
                contractFile: file,
              }))
            }
            onRemoveFile={() =>
              setUploadedFiles((prev) => ({ ...prev, contractFile: null }))
            }
            file={uploadedFiles.contractFile}
          />
        </>
      );
      break;
    case 2:
      renderSteps = (
        <Step
          currentStep={currentStep}
          title="جدول السداد"
          onSelectFile={(file) =>
            setUploadedFiles((prev) => ({
              ...prev,
              paymentScheduleFile: file,
            }))
          }
          onRemoveFile={() =>
            setUploadedFiles((prev) => ({
              ...prev,
              paymentScheduleFile: null,
            }))
          }
          file={uploadedFiles.paymentScheduleFile}
        />
      );
      break;
    case 3:
      renderSteps = (
        <Step
          currentStep={currentStep}
          title="جدول عمليات السداد"
          onSelectFile={(file) =>
            setUploadedFiles((prev) => ({
              ...prev,
              paymentTransactionFile: file,
            }))
          }
          onRemoveFile={() =>
            setUploadedFiles((prev) => ({
              ...prev,
              paymentTransactionFile: null,
            }))
          }
          file={uploadedFiles.paymentTransactionFile}
        />
      );
      break;
  }
  if (!renderSteps) {
    return null; // or a fallback UI
  }
  return <>{renderSteps}</>;
};
export default UploadContractsSteps;
