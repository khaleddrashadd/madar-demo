import DefaultDialog from '@/components/partials/dialogs/DeafultDialog';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  FileText,
  TriangleAlert,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { usePreventCloseModal } from '@/hooks/usePreventCloseModal';

const UploadContractsActions = ({
  setIsExistModalOpen,
  currentStep,
  onChangeSteps,
  uploadedFiles,
}) => {
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const canMoveNext =
    (currentStep === 1 && uploadedFiles.contractFile) ||
    (currentStep === 2 && uploadedFiles.paymentScheduleFile) ||
    (currentStep === 3 && uploadedFiles.paymentTransactionFile);

  const canSubmit =
    currentStep === 3 &&
    uploadedFiles.contractFile &&
    uploadedFiles.paymentScheduleFile;

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('ContractFile', uploadedFiles.contractFile);
    formData.append('ScheduleFile', uploadedFiles.paymentScheduleFile);
    formData.append('TransactionFile', uploadedFiles.paymentTransactionFile);
    formData.append('PortfolioNumber', '12345');
    setIsProcessModalOpen(true);
    setIsConfirmationModalOpen(false);
  };
  const preventCloseProps = usePreventCloseModal();
  return (
    <div className="px-4 pt-6 flex items-center justify-between border-t">
      <div>
        <Button
          onClick={() => setIsExistModalOpen(true)}
          disabled={!uploadedFiles.contractFile}
          variant="ghost"
          className="text-ivory-600 hover:text-ivory-700 bg-transparent hover:bg-transparent"
        >
          <X className="h-4 w-4" />
          إلغاء
        </Button>
      </div>
      <div className="flex items-center gap-2">
        {currentStep !== 1 && (
          <Button
            onClick={() => onChangeSteps((prevStep) => prevStep - 1)}
            variant="outline"
            className="border-primary-500 text-primary-500 hover:bg-primary-50/50"
          >
            <ChevronRight className="h-4 w-4" />
            السابق
          </Button>
        )}
        {currentStep < 3 ? (
          <Button
            disabled={!canMoveNext}
            onClick={() => onChangeSteps((prevStep) => prevStep + 1)}
            className="bg-primary-500 text-white hover:bg-primary-600"
          >
            التالي
            <ChevronLeft className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            disabled={!canSubmit}
            onClick={() => {
              uploadedFiles.paymentTransactionFile
                ? handleSubmit()
                : setIsConfirmationModalOpen(true);
            }}
            className="bg-primary-500 text-white hover:bg-primary-600"
          >
            إتمام رفع العقود
            <FileCheck2 className="h-4 w-4" />
          </Button>
        )}
      </div>
      <DefaultDialog
        open={isProcessModalOpen}
        onOpenChange={setIsProcessModalOpen}
        headerless
        closeable={false}
        className="px-6 py-8"
        {...preventCloseProps}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full w-28 h-28 bg-secondary-100 flex items-center justify-center">
              <FileText className="h-14 w-14 text-secondary-400 m-auto" />
            </div>
            <h3 className="text-ivory-950 text-xl font-semibold text-center">
              سوف يتم معالجة العقود المرفوعة
            </h3>
            <p className="text-ivory-900 text-center">
              قد يأخذ هذا الإجراء بعض الوقت لحين إتمام عملية المعالجة، سوف يتم
              إشعارك عبر البريد الإلكتروني الخاص بك.
            </p>
            <Button
              className="w-full"
              onClick={() => setIsProcessModalOpen(false)}
            >
              حسناً
            </Button>
          </div>
        </div>
      </DefaultDialog>
      <DefaultDialog
        open={isConfirmationModalOpen}
        onOpenChange={setIsConfirmationModalOpen}
        headerless
        closeable={false}
        className="px-2 py-4 pt-8"
        {...preventCloseProps}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full w-28 h-28 bg-secondary-100 flex items-center justify-center">
              <TriangleAlert className="h-14 w-14 text-secondary-400 m-auto" />
            </div>
            <h3 className="text-ivory-950 text-xl font-semibold text-center">
              هل انت متأكد انك تريد رفع العقود بدون جدول عمليات السداد؟
            </h3>
            <Button className="w-full" onClick={handleSubmit}>
              نعم، إتمام رفع العقود
            </Button>
            <Button
              variant="outline"
              className="border-primary-500 hover:bg-primary-50/50 text-primary-500 w-full"
              onClick={() => setIsConfirmationModalOpen(false)}
            >
              لا
            </Button>
          </div>
        </div>
      </DefaultDialog>
    </div>
  );
};
export default UploadContractsActions;
