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
