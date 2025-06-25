import axiosInvoices from '@/lib/axiosInvoices';

export const getReportTypes = async (params) => {
  const res = await axiosInvoices.get('invoice-requests/GetReportTypes', {
    params,
  });
  return res.data;
};
