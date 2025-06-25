import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useResetOnUnmount from '@/hooks/useResetOnUnmount';
const initialPagination = {
  pageSize: 10,
  pageNumber: 1,
};
const initialFilter = {
  NationalId: '',
  BeneficiaryName: '',
  PortfolioOriginator: '',
  PortfolioNumber: '',
  ContractStatus: '',
};
const useQueryContracts = ({ queryKey, queryFn, ...props }) => {
  const [filterData, setFilterData] = useState(initialFilter);
  const [pagination, setPagination] = useState(initialPagination);

  const { data: contracts, isLoading: isContractsLoading } = useQuery({
    queryKey: [...queryKey, pagination, filterData],
    queryFn: () =>
      queryFn({
        ...pagination,
        ...filterData,
      }),
    placeholderData: keepPreviousData,
    props,
  });

  useResetOnUnmount(() => {
    setFilterData(initialFilter);
    setPagination(initialPagination);
  });

  return {
    contracts,
    isContractsLoading,
    setFilterData,
    setPagination,
    filterData,
    pagination,
  };
};
export default useQueryContracts;
