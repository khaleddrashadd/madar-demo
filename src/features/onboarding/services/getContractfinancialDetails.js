import axiosInvoices from '@/lib/axiosInvoices';

const getContractFinancialDetails = async (mortgageAccountNumber) => {
  const response = await axiosInvoices.get(
    `/OnboardingContractDetails/financial-information/${mortgageAccountNumber}`
  );

  return response.data.data;
};

export default getContractFinancialDetails;
