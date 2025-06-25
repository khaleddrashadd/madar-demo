import { useMutation } from '@tanstack/react-query';
import {
  approveInvoiceService,
  approveReportService,
  downloadInvoiceService,
  downloadReportService,
} from '../services/invoiceApprovalServices';
import { getFileName } from '@/utils/getFileName';
import { downloadFile } from '@/lib/utils';
import { useState } from 'react';

export function useApprovalHandler() {
  const [currentReportId, setCurrentReportId] = useState(null);

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

  const { isPending: isInvoiceApprovalPending, mutateAsync: approveInvoice } =
    useMutation({
      mutationFn: approveInvoiceService,
    });
  const { isPending: isReportApprovalPending, mutateAsync: approveReport } =
    useMutation({
      mutationFn: approveReportService,
      onMutate: (params) => {
        const { reportId } = params;
        setCurrentReportId(reportId);
        return params;
      },
      onSuccess: () => {
        setCurrentReportId(null);
      },
    });

  return {
    isInvoicePending,
    getInvoiceFile,
    isReportPending,
    getReportFile,
    isInvoiceApprovalPending,
    approveInvoice,
    isReportApprovalPending,
    approveReport,
    currentReportId,
  };
}
