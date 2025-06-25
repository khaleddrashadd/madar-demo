import axiosInvoices from '@/lib/axiosInvoices';

const getTaxInvoicesFile = async (reqId) => {
  const res = await axiosInvoices.get(`invoice-requests/${reqId}/download`, {
    headers: {
      Accept: 'application/pdf',
    },
    responseType: 'blob',
  });
  return res;
};

export default getTaxInvoicesFile;
