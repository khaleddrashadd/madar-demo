import axiosInvoices from '@/lib/axiosInvoices';
import { cleanQueryParams } from '@/utils/cleanQueryParams';

const getUploadedContracts = async (qp) => {
  const queryParam = cleanQueryParams(qp);
  const response = await axiosInvoices.get(`/uploaded-contracts${queryParam}`);
  return response.data.data;
};

export default getUploadedContracts;
