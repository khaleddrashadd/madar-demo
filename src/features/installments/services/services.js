import axiosPrivate from '@/lib/axios';
import { cleanQueryParams } from '@/utils/cleanQueryParams';

export const getInstallmentService = async (params) => {
  const queryParam = cleanQueryParams(params);
  return await axiosPrivate.get(`/dashboard/installments${queryParam}`);
};

export const getInstallmentStatistics = async (params) => {
  const queryParam = cleanQueryParams(params);
  return await axiosPrivate.get(
    `/dashboard/installments-statistics${queryParam}`
  );
};

export const getLegalOwnerService = async () => {
  const res = await axiosPrivate.get('/Statistics/legal-owners');
  return res.data.data;
};

export const getInstallmentFile = async (params) => {
  const queryParam = cleanQueryParams(params);
  return await axiosPrivate.get(`/dashboard/export-installments${queryParam}`, {
    responseType: 'blob',
    headers: {
      Accept:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
  });
};
