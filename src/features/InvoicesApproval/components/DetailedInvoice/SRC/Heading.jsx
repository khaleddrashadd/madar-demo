import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, ChartSpline, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SummaryDialog from './SummaryDialog';
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

const SrcInvoiceHeading = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="grid grid-cols-[auto,1fr] sm:grid-cols-[auto,auto,1fr] gap-x-2">
        <div className="flex items-center gap-2">
          <Link to="/invoices-approval/src">
            <ArrowRight className="w-5 h-5 sm:w-10 sm:h-10 text-[#1C1917]" />
          </Link>
        </div>

        <h1 className="text-sm sm:text-lg text-[#1C1917] font-bold flex gap-3 items-center justify-between sm:justify-start overflow-x-auto overflow-y-hidden text-ellipsis max-w-full">
          تقرير الدفع
          {data.detailedInvoiceData.status === 'Approved' ? (
            <Badge className="bg-secondary-350 hover:bg-secondary-350  border border-secondary-700 px-4 py-1 rounded-full text-ivory-950">
              تمت الموافقة
            </Badge>
          ) : (
            <Badge className="bg-extended-250 hover:bg-extended-250 text-ivory-950 border border-extended-750 px-4 py-1 rounded-full font-medium">
              قيد الإنتظار
            </Badge>
          )}
        </h1>

        <span className="text-sm text-[#44403C] col-start-2 row-start-2 col-span-1"></span>

        <div className="place-self-end row-start-3 col-start-2 md:row-start-1 md:col-start-3 mt-4 sm:mt-3 flex gap-2">
          <Button
            variant="outline"
            className=" border-[1.5px] font-semibold border-primary-500 text-primary-500 flex items-center gap-2 px-4 sm:px-8 py-3 text-xs sm:text-sm"
            onClick={() => setOpen(true)}
          >
            <ChartSpline className="w-2 h-2 sm:w-4 sm:h-4 md:w-[1.375rem] md:h-[1.375rem]" />
            الإجمالي
          </Button>

          <Button
            className="flex items-center gap-2 px-4 sm:px-8 py-3 text-xs sm:text-sm md:text-base"
            onClick={handleDownloadExcelSheet}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}{' '}
            <span>تحميل</span>
          </Button>
        </div>
      </div>
      <SummaryDialog
        open={open}
        onOpenChange={setOpen}
        data={data.detailedInvoiceData}
      />
    </div>
  );
};

export default SrcInvoiceHeading;
