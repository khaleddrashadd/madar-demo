export const CONTRACT_UPLOAD_STEPS = [
  { id: 1, title: 'رفع العقود' },
  { id: 2, title: 'جدول السداد' },
  { id: 3, title: 'جدول عمليات السداد' },
];
export const STEP_CONFIG = {
  1: {
    title: 'رفع عقد التمويل',
    fieldName: 'contractFile',
  },
  2: {
    title: 'رفع جدول السداد',
    fieldName: 'paymentScheduleFile',
  },
  3: {
    title: 'رفع جدول عمليات السداد',
    fieldName: 'paymentTransactionFile',
  },
};
