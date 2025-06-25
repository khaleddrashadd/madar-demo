import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';
import { useSelector } from 'react-redux';

import {
  getPagination,
  getFilterData,
  getCurrentTab,
} from '@/features/InvoicesApproval/store/redfDetailedInvoiceSlice';

import {
  getPagination as getSrcPagination,
  getFilterData as getSRCFilterData,
} from '../store/srcDetailedInvoiceSlice';

import {
  srcDetailedInvoiceService,
  redfDetailedInvoiceService,
} from '../services/detailedInvoiceService';
import { useRef } from 'react';

export const useRedfDetailedInvoiceRequest = (requestId) => {
  const selectedFilterData = useSelector(getFilterData);
  const selectedPagination = useSelector(getPagination);
  const selectedTab = useSelector(getCurrentTab);
  const previousTab = useRef(selectedTab);

  const [debouncedFilter] = useDebounce(selectedFilterData, 500);

  return useQuery({
    queryKey: [
      'redf-detailed-invoice-request',
      requestId,
      {
        ...debouncedFilter,
        ...selectedPagination,
        redfDetailedReportTap: selectedTab,
      },
    ],
    queryFn: () =>
      redfDetailedInvoiceService(requestId, {
        ...debouncedFilter,
        ...selectedPagination,
        redfDetailedReportTap: selectedTab,
      }),
    placeholderData: (previousData) => {
      if (previousTab.current === selectedTab) {
        return previousData;
      }
      return undefined;
    },
  });
};

export const useSrcDetailedInvoiceRequest = (requestId) => {
  const selectedPagination = useSelector(getSrcPagination);
  const filterState = useSelector(getSRCFilterData);
  const [debouncedFilter] = useDebounce(filterState, 500);

  return useQuery({
    queryKey: [
      'src-detailed-invoice-request',
      selectedPagination,
      debouncedFilter,
    ],
    queryFn: () =>
      srcDetailedInvoiceService(requestId, {
        ...selectedPagination,
        ...debouncedFilter,
      }),
    placeholderData: keepPreviousData,
  });
};
