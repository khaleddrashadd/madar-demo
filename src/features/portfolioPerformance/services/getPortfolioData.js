import { axiosPrivate } from '@/lib/axios';
import { cleanQueryParams } from '@/utils/cleanQueryParams';

export const getData = async (data) => {
  const queryParams = {
    year: data.selectedYear,
    month: data.selectedMonth,
    portfolioNumber: data.selectedPortfolio,
    selectedLegalOwner: data.selectedLegalOwner,
  };
  const cleanedQueryParams = cleanQueryParams(queryParams);
  try {
    const response = await axiosPrivate.get(
      `/dashboard/home${cleanedQueryParams}`
    );
    return response.data.data;
  } catch (error) {
    Promise.reject(error);
  }
};
