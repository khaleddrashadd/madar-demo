import axiosInvoices from '@/lib/axiosInvoices';

const getContractBasicDetails = async (mortgageAccountNumber) => {
  const response = await axiosInvoices.get(
    `/OnboardingContractDetails/basic-information/${mortgageAccountNumber}`
  );

  return response.data.data;
};

export default getContractBasicDetails;
