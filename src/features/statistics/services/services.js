import axios from '@/lib/axios';

export const getStatsService = async (data) => {
  return await axios.get('/dashboard/statistics', {
    params: {
      portfolioNumber: data.portfolioNumber,
      selectedLegalOwner: data.selectedLegalOwner,
    },
  });
};

export const getLegalOwnersService = async () => {
  return await axios.get(`/dashboard/statistics`);
};
