import axiosInvoices from '@/lib/axiosInvoices';

const getContractPropertyDetails = async (mortgageAccountNumber) => {
  const response = await axiosInvoices.get(
    `/OnboardingContractDetails/property-information/${mortgageAccountNumber}`
  );

  return response.data.data;
};

export default getContractPropertyDetails;
