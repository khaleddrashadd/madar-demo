import axiosPrivate from '@/lib/axios';
import { cleanQueryParams } from '@/utils/cleanQueryParams';
const getChartsData = async (qp) => {
  const queryParam = cleanQueryParams(qp);

  const response = await axiosPrivate.get(
    `/dashboard/contracts-charts${queryParam}`
  );
  return response.data.data;
};
export default getChartsData;
