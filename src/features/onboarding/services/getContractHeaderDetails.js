import axiosInvoices from '@/lib/axiosInvoices';

const getContractHeaderDetails = async (mortgageAccountNumber) => {
  const response = await axiosInvoices.get(
    `/OnboardingContractDetails/header-data/${mortgageAccountNumber}`
  );

  return response.data.data;
};

export default getContractHeaderDetails;
