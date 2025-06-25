import axiosInvoices from '@/lib/axiosInvoices';
import { cleanQueryParams } from '@/utils/cleanQueryParams';

const exportUploadedContracts = async (qp) => {
  const queryParam = cleanQueryParams(qp);
  const response = await axiosInvoices.get(
    `/uploaded-contracts/export${queryParam}`,
    { responseType: 'blob' }
  );
  return response;
};

export default exportUploadedContracts;
