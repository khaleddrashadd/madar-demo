import axiosInvoices from '@/lib/axiosInvoices';

export const downloadMessageFile = async (params) => {
  const res = await axiosInvoices.get(
    `/invoice-requests/returned-chat/files/${params.fileId}/download`,
    { responseType: 'blob' }
  );
  return res;
};
