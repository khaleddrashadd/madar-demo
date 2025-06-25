import { useMutation } from '@tanstack/react-query';
import {
  downloadInvoiceService,
  downloadReportService,
  downloadTaxInvoiceService,
} from '../services/invoiceApprovalServices';
import { getFileName } from '@/utils/getFileName';
import { downloadFile, openFileInNewTab } from '@/lib/utils';
import { toast } from 'react-toastify';

export function useApprovalHandler() {
  const { isPending: isInvoicePending, mutate: getInvoiceFile } = useMutation({
    mutationFn: downloadInvoiceService,
    onSuccess: (data) => {
      const fileName = getFileName(
        data.headers['content-disposition'],
        'invoice'
      );
      downloadFile(data, fileName);
    },
  });
  const { isPending: isReportPending, mutate: getReportFile } = useMutation({
    mutationFn: downloadReportService,
    onSuccess: (data) => {
      const fileName = getFileName(
        data.headers['content-disposition'],
        'report'
      );
      downloadFile(data, fileName);
    },
  });
  const { isPending: isTaxInvoicePending, mutate: getTaxInvoiceFile } =
    useMutation({
      mutationFn: downloadTaxInvoiceService,
      onSuccess: (data) => {
        const fileName = getFileName(
          data.headers['content-disposition'],
          'report'
        );
        openFileInNewTab(data, fileName);
      },
      onError: (error) => {
        console.error('Error downloading tax invoice:', error);
        toast.error('حدث خطأ أثناء تحميل الفاتورة الضريبية');
      },
    });

  return {
    isInvoicePending,
    getInvoiceFile,
    isReportPending,
    getReportFile,
    isTaxInvoicePending,
    getTaxInvoiceFile,
  };
}
