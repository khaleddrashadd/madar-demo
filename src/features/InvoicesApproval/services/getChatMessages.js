import axiosInvoices from '@/lib/axiosInvoices';

export const getChatMessages = async ({ RequestId }) => {
  const res = await axiosInvoices.get(
    'invoice-requests/returned-chat/messages',
    {
      params: {
        RequestId,
        PageNumber: 1,
        PageSize: 1000,
        IsFromLegalOwner: true,
      },
    }
  );
  return res.data;
};
