import axiosInvoices from '@/lib/axiosInvoices';

const getUploadedContractsFilter = async () => {
  const response = await axiosInvoices.get(
    '/uploaded-contracts/filter/dropdowns'
  );
  return response.data.data;
};

export default getUploadedContractsFilter;
