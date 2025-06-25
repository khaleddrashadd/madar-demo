import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { downloadFile } from '@/lib/utils';
import { downloadReportService } from '@/features/InvoicesApproval/services/invoiceApprovalServices';

function getFileName(contentDisposition, fallback) {
  const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  const matches = regex.exec(contentDisposition);
  if (matches != null && matches[1]) {
    return matches[1].replace(/['"]/g, '');
  }
  return fallback;
}

const FileDetailsHeader = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadExcelSheet = async () => {
    try {
      setIsLoading(true);
      const res = await downloadReportService({
        reqId: data.requestId,
        reportId: data.reportId,
      });
      const fileName = getFileName(
        res.headers['content-disposition'],
        `تقرير مفصل ${data.reportId}`
      );
      downloadFile(res, fileName);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-2 py-4 sm:p-6 rounded-md shadow-custom bg-white">
      <div className="grid grid-cols-[auto,1fr]  sm:grid-cols-[auto,auto,1fr] gap-x-2">
        <div className="flex items-center gap-2">
          <Link to="/invoices-approval/redf">
            <ArrowRight className="w-5 h-5 sm:w-10 sm:h-10 text-[#1C1917]" />
          </Link>
        </div>

        <h1 className="text-sm sm:text-lg text-[#1C1917] font-bold flex gap-3 items-center justify-between sm:justify-start overflow-x-auto overflow-y-hidden text-ellipsis max-w-full">
          التقرير المفصل
          {data.status === 'Approved' ? (
            <Badge className="bg-secondary-350  border border-secondary-700 px-4 py-1 rounded-full text-ivory-950 hover:bg-extended-250">
              تمت الموافقة
            </Badge>
          ) : (
            <Badge className="bg-extended-250 text-ivory-950 border border-extended-750 px-4 py-1 rounded-full font-medium hover:bg-extended-250">
              قيد الإنتظار
            </Badge>
          )}
        </h1>

        <span className="text-sm text-[#44403C] col-start-2 row-start-2 col-span-1"></span>

        <div className="place-self-end row-start-3 col-start-2 sm:row-start-1 sm:col-start-3 mt-4 sm:mt-3">
          <Button
            className="flex items-center gap-2 px-4 sm:px-8 py-3 text-xs sm:text-sm md:text-base"
            onClick={handleDownloadExcelSheet}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            <span>تحميل</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FileDetailsHeader;
