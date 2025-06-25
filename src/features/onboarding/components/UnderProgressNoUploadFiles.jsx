import { Card, CardContent } from '@/components/card';
import { Alert } from '@/components/ui/alert';
import { FileText, TriangleAlert } from 'lucide-react';

const UnderProgressNoUploadFiles = () => {
  return (
    <Card>
      {/* Upload Section */}
      <CardContent className="bg-white rounded-lg shadow-sm border border-ivory-200 px-4 py-14">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <div className="mb-6 rounded-full w-28 h-28 bg-secondary-100 flex items-center justify-center">
              <FileText className="h-14 w-14 text-secondary-400 m-auto" />
            </div>
            <h3 className="mb-3 text-ivory-950 text-xl font-semibold text-center">
              جاري معالجة العقود المرفوعة
            </h3>
            <p className="mb-11 text-ivory-900 text-center">
              قد يأخذ هذا الإجراء بعض الوقت لحين إتمام عملية المعالجة، سوف يتم
              إشعارك عبر البريد الإلكتروني الخاص بك.
            </p>
            <Alert variant="warn" className="w-fit">
              <div className="flex items-center gap-2">
                <TriangleAlert className="h-6 w-6" />
                <p className="text-sm">
                  غير متاح إسناد محافظ جديدة لحين الإنتهاء من معالجة العقود
                  المرفوعة
                </p>
              </div>
            </Alert>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default UnderProgressNoUploadFiles;
