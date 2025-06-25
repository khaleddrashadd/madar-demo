import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';
import { useSelector } from 'react-redux';

import { getInvoicesService } from '@/features/InvoicesApproval/services/invoiceApprovalServices';

import {
  getPagination,
  getFilterData,
  getTabStatus,
} from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
// import { useRef } from 'react';

export const useInvoiceRequests = (legalOwner) => {
  const selectedFilterData = useSelector(getFilterData);
  const selectedPagination = useSelector(getPagination);
  const selectedTab = useSelector(getTabStatus);

  const [debouncedFilter] = useDebounce(selectedFilterData, 500);

  return useQuery({
    queryKey: [
      'tax-invoices-requests',
      legalOwner,
      debouncedFilter,
      selectedPagination,
      selectedTab.pending,
    ],
    queryFn: () =>
      getInvoicesService({
        legalOwner,
        ...debouncedFilter,
        ...selectedPagination,
        status: selectedTab.pending
          ? 'UnderProgressWithLegalOwner'
          : 'Approved',
        isLegalOwner: true,
      }),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    cacheTime: 10 * 60 * 1000,
  });
};
