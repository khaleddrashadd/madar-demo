import { useState } from 'react';
import { Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CustomBtn from '@/components/partials/btns/CustomBtn';
import DefaultDialog from '@/components/partials/dialogs/DeafultDialog';
import LogTimeline from '@/features/InvoicesApproval/components/Invoices/LogTimeline';

// Mock API function that returns a promise
const mockApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data: 'Operation completed' });
    }, 2000); // 2 second delay to simulate API call
  });
};

const TableActions = ({ isLogDialogOpen, setIsLogDialogOpen }) => {
  // Fixed: Destructure item from props
  const [isLoading, setIsLoading] = useState(false);

  const handleApiCall = async () => {
    setIsLoading(true);
    try {
      const response = await mockApiCall();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/*  Log Dialogue  */}
      <DefaultDialog
        title="سجل الإجراءات"
        open={isLogDialogOpen}
        onOpenChange={setIsLogDialogOpen}
        dir="rtl"
      >
        <LogTimeline />
      </DefaultDialog>

      <div className="flex gap-3 justify-center">
        <CustomBtn
          title="الفاتورة الضريبية"
          variant="extended_outline"
          isLoading={isLoading}
          loadingText="..جاري التحميل"
          onClick={handleApiCall}
          icon={<Eye />}
        />

        {/* HANDLE LOG */}
        <Button
          variant="secondary"
          size="sm"
          className="items-center gap-2 p-2"
          onClick={() => setIsLogDialogOpen(true)}
        >
          <Clock className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default TableActions;
