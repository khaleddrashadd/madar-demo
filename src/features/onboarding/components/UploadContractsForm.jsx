import { TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/card';
import { useState } from 'react';
import DefaultDialog from '@/components/partials/dialogs/DeafultDialog';
import UploadContractsSteps from './UploadContractsSteps';
import UploadContractsActions from './UploadContractsActions';
import { usePreventCloseModal } from '@/hooks/usePreventCloseModal';
import { useNavigate } from 'react-router';

const initialUploadedFiles = {
  contractFile: null,
  paymentScheduleFile: null,
  paymentTransactionFile: null,
};

const UploadContractsForm = ({ currentStep, onChangeSteps }) => {
  const [isExistModalOpen, setIsExistModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState(initialUploadedFiles);
  const navigate = useNavigate();

  const onResetForm = () => {
    setIsExistModalOpen(false);
    setUploadedFiles(initialUploadedFiles);
    onChangeSteps(1);
    navigate('/'); // Redirect to the home
  };
  const preventCloseProps = usePreventCloseModal();

  return (
    <>
      <Card>
        {/* Upload Section */}
        <CardContent className="bg-white rounded-lg shadow-sm border border-ivory-200 pb-8  h-[442px]">
          <UploadContractsSteps
            currentStep={currentStep}
            setUploadedFiles={setUploadedFiles}
            uploadedFiles={uploadedFiles}
          />
          <UploadContractsActions
            currentStep={currentStep}
            onChangeSteps={onChangeSteps}
            setIsExistModalOpen={setIsExistModalOpen}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        </CardContent>
      </Card>
      <DefaultDialog
        className="px-6 py-8"
        open={isExistModalOpen}
        onOpenChange={setIsExistModalOpen}
        closeable={false}
        headerless
        {...preventCloseProps}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full w-28 h-28 bg-secondary-100 flex items-center justify-center">
              <TriangleAlert className="h-14 w-14 text-secondary-400 m-auto" />
            </div>
            <h3 className="text-ivory-950 text-xl font-semibold text-center">
              في حال الضغط على إلغاء فإنك ستفقد جميع البيانات التي قمت بإدخالها
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <Button onClick={onResetForm}>فهمت، قم بالإلغاء</Button>
            <Button
              onClick={() => setIsExistModalOpen(false)}
              variant="outline"
              className="border-primary-500 hover:bg-primary-50/50 text-primary-500"
            >
              العودة لرفع العقود
            </Button>
          </div>
        </div>
      </DefaultDialog>
    </>
  );
};
export default UploadContractsForm;
