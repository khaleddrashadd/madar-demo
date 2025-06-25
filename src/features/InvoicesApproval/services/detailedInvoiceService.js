import axiosInvoices from '@/lib/axiosInvoices';

export const redfDetailedInvoiceService = async (requestId, params) => {
  const res = await axiosInvoices.get(
    `/invoice-requests/${requestId}/redf-detailed-report`,
    { params }
  );
  return res.data;
};

export const srcDetailedInvoiceService = async (requestId, params) => {
  const res = await axiosInvoices.get(
    `/invoice-requests/${requestId}/src-detailed-report`,
    { params }
  );
  return res.data;
};
