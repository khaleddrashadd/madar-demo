import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const downloadFile = (response, name = 'Download') => {
  const blobUrl = URL.createObjectURL(response.data);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = name;
  link.click();
  link.remove();
};

export const openFileInNewTab = (response) => {
  const blobUrl = URL.createObjectURL(response.data);
  window.open(blobUrl, '_blank');
};

export const formatCurrency = (amount) => {
  if (!amount) return;
  return `${amount.toLocaleString('en-SA')}`;
};

export const formatDate = (date, format = 'DD MMMM YYYY') => {
  if (!date || date === '--') return '--';
  return dayjs(date).locale('ar').format(format);
};
