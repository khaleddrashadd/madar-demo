import * as yup from 'yup';
import {
  ACCEPTED_FILE_TYPES,
  ACCEPTED_FILE_EXTENSIONS,
  MAX_FILE_SIZE,
} from '@/features/onboarding/constants/contractUpload';
const createFileValidation = (fieldName) =>
  yup
    .mixed()
    .required(`${fieldName} مطلوب`)
    .test('fileSize', 'حجم الملف يجب أن يكون أقل من 25 ميجابايت', (value) => {
      if (!value) return false;
      const size = value.size || value.file?.size;
      return size && size <= MAX_FILE_SIZE;
    })
    .test('fileType', 'نوع الملف يجب أن يكون csv أو xlsx', (value) => {
      if (!value) return false;
      const type = value.type || value.file?.type;
      const name = value.name || value.file?.name;

      return (
        ACCEPTED_FILE_TYPES.includes(type) ||
        (name &&
          ACCEPTED_FILE_EXTENSIONS.some((ext) =>
            name.toLowerCase().endsWith(ext)
          ))
      );
    });

export const uploadContractFilesSchema = yup.object().shape({
  contractFile: createFileValidation('العقد'),
  paymentScheduleFile: createFileValidation('جدول السداد'),
  paymentTransactionFile: createFileValidation('جدول عمليات السداد'),
});
