import * as yup from 'yup';

export const filterContractDetailsPaymentsSchema = yup.object().shape({
  portfolioNumber: yup.string().trim(),
  installmentYear: yup.string().trim(),
  installmentMonth: yup.string().trim(),
  installmentStatus: yup.string().trim(),
  paymentYear: yup.string().trim(),
  paymentMonth: yup.string().trim(),
});
