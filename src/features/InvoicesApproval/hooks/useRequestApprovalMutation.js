import { useMutation, useQueryClient } from '@tanstack/react-query';
import { approveRequestService } from '../services/invoiceApprovalServices';
import { toast } from 'react-toastify';

const useRequestApprovalMutation = () => {
  const queryClient = useQueryClient();
  const { isPending: isRequestApprovalPending, mutateAsync: approveRequest } =
    useMutation({
      mutationFn: approveRequestService,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['invoices-requests'],
        });
        toast.success('تم الموافقة على الفواتير بنجاح');
      },
    });
  return {
    isRequestApprovalPending,
    approveRequest,
  };
};

export default useRequestApprovalMutation;
