import axiosInvoices from '@/lib/axiosInvoices';
const uploadOnboarding = async (data) => {
  const response = await axiosInvoices.post('/onboarding-upload/upload', data);

  return response.data.data;
};

export default uploadOnboarding;
