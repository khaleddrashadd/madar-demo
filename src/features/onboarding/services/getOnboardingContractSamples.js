import axiosInvoices from '@/lib/axiosInvoices';
// the file is excel file
const getOnboardingContractSamples = async (sample) => {
  const response = await axiosInvoices.get(
    `/onboarding-upload/samples/${sample}`,
    { responseType: 'blob' }
  );

  return response;
};

export const onboardingContractSamples = {
  1: 'OnboardingContractSample',
  2: 'PaymentScheduleSample',
  3: 'PaymentTransactionSample',
};
export default getOnboardingContractSamples;
