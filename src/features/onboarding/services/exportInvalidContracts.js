import axiosInvoices from '@/lib/axiosInvoices';
import { cleanQueryParams } from '@/utils/cleanQueryParams';

const exportInvalidContracts = async (qp) => {
  const queryParam = cleanQueryParams(qp);
  const response = await axiosInvoices.get(
    `/invalid-contracts/export${queryParam}`,
    { responseType: 'blob' }
  );
  return response;
};

export default exportInvalidContracts;
