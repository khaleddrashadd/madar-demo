import axiosPrivate from '@/lib/axios';
import { cleanQueryParams } from '@/utils/cleanQueryParams';
const getContractsTableData = async (qp) => {
  const queryParam = cleanQueryParams(qp);

  const response = await axiosPrivate.get(`/dashboard/contracts${queryParam}`);
  return response.data.data;
};
export const getContractsFile = async (params) => {
  const queryParam = cleanQueryParams(params);
  return await axiosPrivate.get(`/dashboard/export-contracts${queryParam}`, {
    responseType: 'blob',
    headers: {
      Accept:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
  });
};

export default getContractsTableData;
