import { axiosInvoices } from '@/lib/axiosInvoices';
export const addComment = async (data) => {
  try {
    await axiosInvoices.post('invoice-requests/AddCommentToRequest', data);
  } catch (error) {
    throw new Error(error);
  }
};
