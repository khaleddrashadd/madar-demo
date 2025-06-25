import axiosInvoices from '@/lib/axiosInvoices';

export const getInvoiceFilterDataService = async (params) => {
  const res = await axiosInvoices.get('/invoice-requests/filter-data', {
    params,
  });
  return res.data;
};

export const getInvoicesService = async (params) => {
  const res = await axiosInvoices.get('/invoice-requests', { params });
  return res.data;
};

export const downloadInvoiceService = async (params) => {
  const res = await axiosInvoices.get(
    `/invoice-requests/${params.reqId}/invoice/${params.invoiceId}/download`,
    { responseType: 'blob' }
  );
  return res;
};

export const downloadReportService = async (params) => {
  const res = await axiosInvoices.get(
    `/invoice-requests/${params.reqId}/report/${params.reportId}/download`,
    { responseType: 'blob' }
  );
  return res;
};

export const downloadTaxInvoiceService = async (params) => {
  const res = await axiosInvoices.get(
    `/invoice-requests/${params.reqId}/download`,
    { responseType: 'blob' }
  );
  return res;
};

export const approveRequestService = async (reqId) => {
  const res = await axiosInvoices.post(
    `/invoice-requests/${reqId}/legal-owner-bulk-confirm`
  );
  return res.data;
};
