import axiosInvoices from '@/lib/axiosInvoices';

const checkIsAllowedToUpload = async (legalOwner) => {
  const response = await axiosInvoices.get(
    `/onboarding-upload/is-allowed/${legalOwner}`
  );
  return response.data.data;
};

export default checkIsAllowedToUpload;
