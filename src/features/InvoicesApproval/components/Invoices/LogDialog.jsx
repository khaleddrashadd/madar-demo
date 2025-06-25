import DefaultDialog from '@/components/partials/dialogs/DeafultDialog';
import LogTimeline from './LogTimeline';

const LogDialog = ({ isLogDialogOpen, setIsLogDialogOpen, data }) => {
  return (
    <DefaultDialog
      title="سجل الإجراءات"
      open={isLogDialogOpen}
      onOpenChange={setIsLogDialogOpen}
      dir="rtl"
      scrollable
    >
      <LogTimeline data={data?.actionLogs} />
    </DefaultDialog>
  );
};

export default LogDialog;
