import { toast } from 'sonner';
import { CheckCircle, XCircle } from 'lucide-react';

export const successToast = (message, options) => {
  return toast.custom(
    () => (
      <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
        <CheckCircle className="h-5 w-5 text-green-500" />
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {message}
        </p>
      </div>
    ),
    {
      ...options,
      duration: options?.duration || 3000,
    }
  );
};

export const failToast = (message, options) => {
  return toast.custom(
    () => (
      <div className="flex items-center gap-3 rounded-md bg-white p-4 shadow-lg dark:bg-gray-800">
        <XCircle className="h-5 w-5 text-red-500" />
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {message}
        </p>
      </div>
    ),
    {
      ...options,
      duration: options?.duration || 4000,
    }
  );
};
