import axiosInvoices from '@/lib/axiosInvoices';
import { cleanQueryParams } from '@/utils/cleanQueryParams';

const getPaymentschedules = async (mortgageAccountNumber, qp) => {
  const queryParam = cleanQueryParams(qp);
  const response = await axiosInvoices.get(
    `/contracts/installments/payment-schedules?ContractId=${mortgageAccountNumber}${queryParam}`
  );

  return response.data.data;
};

export default getPaymentschedules;
