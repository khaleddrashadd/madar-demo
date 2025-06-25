import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getInvoiceFilterDataService } from '@/features/InvoicesApproval/services/invoiceApprovalServices';
import { createYearMonthsObject } from '@/features/InvoicesApproval/helpers/createYearMonthsObject';

export const useInvoiceFilterData = (legalOwner) => {
  const getFilterData = async () => {
    const response = await getInvoiceFilterDataService({ legalOwner });
    return {
      portfolios: response.portfolios,
      minDate: createYearMonthsObject(response.minDate),
    };
  };

  return useQuery({
    queryKey: ['invoice-filter', legalOwner],
    queryFn: getFilterData,
    placeholderData: keepPreviousData,
  });
};
