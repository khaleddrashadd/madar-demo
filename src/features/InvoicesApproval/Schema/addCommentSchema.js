import * as yup from 'yup';
import { MAX_CHAR_LENGTH } from '../components/Invoices/constants/invoiceConstants';
export const commentSchema = yup.object({
  reportType: yup.string().required('يرجى اختيار التقرير المعني'),
  comment: yup
    .string()
    .required('يرجى كتابة التعليق')
    .max(MAX_CHAR_LENGTH, `يجب ألا يتجاوز التعليق ${MAX_CHAR_LENGTH} حرف`),
  attachments: yup
    .mixed()
    .nullable()
    .test('fileSize', 'يجب ألا يزيد حجم الملف عن 25 ميجا', (value) => {
      if (!value || !value.length) return true; // No file attached
      return Array.from(value).every((file) => file.size <= 25 * 1024 * 1024); // 25MB
    })
    .test('fileType', 'يجب إضافة ملف بصيغة PDF, JPG, JPEG, PNG', (value) => {
      if (!value || !value.length) return true; // No file attached
      const acceptedTypes = [
        'application/pdf',
        'image/jpeg',
        'image/jpg',
        'image/png',
      ];
      return Array.from(value).every((file) =>
        acceptedTypes.includes(file.type)
      );
    }),
});
