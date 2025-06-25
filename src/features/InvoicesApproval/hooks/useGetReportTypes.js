import { getAdminLegalOwner } from '@/layouts/store/prevailageSlice';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { getReportTypes } from '../services/getReportTypes';

const useGetReportTypesQuery = (legalOwner, enabled) => {
  const adminContext = useSelector(getAdminLegalOwner);

  const { data, isPending } = useQuery({
    queryKey: ['reportTypes', adminContext],
    queryFn: () => getReportTypes({ legalOwner }),
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: enabled,
  });
  return {
    reportTypes: data,
    isReportTypesPending: isPending,
  };
};

export default useGetReportTypesQuery;
