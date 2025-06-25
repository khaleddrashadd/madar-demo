import { AlertTriangle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ConfirmationDialogue = ({
  isOpen,
  setIsOpen,
  onConfirm,
  isLoading,
  title = 'هل أنت متأكد أنك تريد الموافقة؟',
  description = 'إذا قمت بالموافقة، سيتم إرسال طلب إلى الإدارة المالية لإنشاء الفاتورة الضريبية النهائية.',
  confirmText = 'نعم، موافقة',
  cancelText = 'إلغاء',
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent
        closeable={false}
        className="sm:max-w-lg bg-white rounded-lg px-6 py-8 shadow-lg border-0"
        dir="rtl"
      >
        {/* Centered Icon */}
        <div className="flex justify-center ">
          <div className="bg-green-50 rounded-full w-32 h-32 p-6 flex items-center justify-center">
            <AlertTriangle className=" text-teal-500 w-28 h-28" />
          </div>
        </div>

        <DialogHeader className="text-center space-y-2">
          <DialogTitle className="text-xl font-semibold text-ivory-950">
            {title}
          </DialogTitle>
          <DialogDescription className="text-ivory-900 text-lg leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-center gap-2 mt-6">
          <Button
            type="button"
            variant="outline"
            className="flex-1 text-[16px] font-semibold border-primary-500 text-primary-500 hover:bg-gray-50 hover:text-primary-600 hover:border-primary-600 rounded-md py-6"
            onClick={() => setIsOpen(false)}
          >
            {cancelText}
          </Button>
          <Button
            type="button"
            className="flex-1 text-[16px] font-semibold bg-primary-500 hover:bg-primary-600 text-white rounded-md py-6"
            onClick={() => {
              onConfirm();
              setIsOpen(false);
            }}
            disabled={isLoading}
          >
            {isLoading ? 'جارٍ التحميل...' : confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialogue;
