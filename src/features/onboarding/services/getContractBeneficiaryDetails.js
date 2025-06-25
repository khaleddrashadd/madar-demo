import axiosInvoices from '@/lib/axiosInvoices';

const getContractBeneficiaryDetails = async (mortgageAccountNumber) => {
  const response = await axiosInvoices.get(
    `/OnboardingContractDetails/beneficiary-information/${mortgageAccountNumber}`
  );

  return response.data.data;
};

export default getContractBeneficiaryDetails;
