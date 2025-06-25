import * as yup from 'yup';

export const filterSchema = yup.object().shape({
  nid: yup.string().matches(/^[0-9]*$/, 'رقم الهوية يجب أن يكون أرقام فقط'),
  beneficiaryName: yup.string().trim(),
  legalOwner: yup.string().trim(),
  portfolioNumber: yup.string().trim(),
  contractStatus: yup.string().trim(),
});
