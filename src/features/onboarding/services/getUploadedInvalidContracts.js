import axiosInvoices from '@/lib/axiosInvoices';
import { cleanQueryParams } from '@/utils/cleanQueryParams';

const getUploadedInvalidContracts = async (qp) => {
  const queryParam = cleanQueryParams(qp);
  const response = await axiosInvoices.get(`/invalid-contracts${queryParam}`);
  return response.data.data;
};

export default getUploadedInvalidContracts;
