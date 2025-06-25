import TableSkeleton from '@/components/TableSekelton';
import InstallmentFilterSkeleton from '@/features/installments/components/InstallmentFilterSkeleton';
import AppHeading from '@/components/AppHeading';

import InstallmentsTable from '@/features/installments/components/Table';
import InstallmentFilter from '@/features/installments/components/InstallmentFilter';
import Statisitcs from '@/features/installments/components/Statisitcs';

import {
  getInstallmentFile,
  getInstallmentService,
  getInstallmentStatistics,
} from '@/features/installments/services/services';

import { useDebounce } from 'use-debounce';
import { useSelector } from 'react-redux';
import {
  getPagination,
  getFilterData,
} from '@/features/installments/store/paymentsSlice';
import { useQuery, keepPreviousData, useMutation } from '@tanstack/react-query';
import ExportExcelButton from '@/components/ExportExcelButton';
import { toast } from 'react-toastify';
import { getAdminLegalOwner } from '@/layouts/store/prevailageSlice';

const Installments = () => {
  const selectedFilterData = useSelector(getFilterData);
  const selectedPagination = useSelector(getPagination);
  const selectedLegalOwner = useSelector(getAdminLegalOwner);

  const [debouncedPaymentFilter] = useDebounce(selectedFilterData, 500);
  const [debouncedStatsFilter] = useDebounce(selectedFilterData, 500);

  const { data: paymentData, isLoading: paymentDataLoading } = useQuery({
    queryKey: [
      'contracts-payments',
      debouncedPaymentFilter,
      selectedPagination,
      selectedLegalOwner,
    ],
    queryFn: () =>
      getInstallmentService({
        ...debouncedPaymentFilter,
        ...selectedPagination,
        selectedLegalOwner,
      }),
    placeholderData: keepPreviousData,
  });

  const { data: paymentStats, isLoading: paymentStatstLoading } = useQuery({
    queryKey: [
      'contracts-payments-stats',
      debouncedStatsFilter,
      selectedPagination,
      selectedLegalOwner,
    ],
    queryFn: () =>
      getInstallmentStatistics({
        ...debouncedStatsFilter,
        ...selectedPagination,
        selectedLegalOwner,
      }),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    cacheTime: 10 * 60 * 1000,
  });

  const {
    mutate: handleExportExcel,
    isPending,
    isError,
  } = useMutation({
    mutationFn: () =>
      getInstallmentFile({ ...selectedFilterData, selectedLegalOwner }),
    onSuccess: (res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      let filename = 'installments.xlsx'; // Default fallback name
      const contentDisposition = res.headers?.get('Content-Disposition');
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(
          /filename=["']?([^"']+)["']?/
        );
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1];
        }
      }
      link.setAttribute('download', filename);
      document.body.appendChild(link);

      link.click();
      link.remove();
    },
  });

  if (isError) {
    toast('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى', {
      type: 'error',
      theme: 'colored',
    });
  }

  return (
    <div className="px-2 sm:px-6 mt-4 z-20">
      {/*  */}
      <div className="flex flex-col gap-4 items-start mb-4">
        <AppHeading title="الأقساط" />
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {/*  */}
          {paymentDataLoading || paymentStatstLoading ? (
            <InstallmentFilterSkeleton />
          ) : (
            <InstallmentFilter
              portfolioData={{ paymentStats, paymentStatstLoading }}
            />
          )}
          {/*  */}
          <Statisitcs
            data={{ paymentStats, paymentStatstLoading, paymentDataLoading }}
          />
          {/*  */}
          <div className="col-start-1 col-span-full flex flex-col gap-3 p-4 bg-white border border-ivory-200 rounded-lg shadow-custom">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="text-ivory-950 font-semibold text-xl">
                  تقرير الأقساط
                </div>
                <span className="bg-primary-50 text-primary-500 text-lg font-semibold rounded-3xl px-3 py-1">
                  {(paymentData?.data?.data?.totalCount || '--') + ' ' + 'قسط'}
                </span>
              </div>
              <ExportExcelButton
                onClick={handleExportExcel}
                disabled={isPending}
              >
                إستخراج كملف Excel
              </ExportExcelButton>
            </div>
            {paymentDataLoading || paymentStatstLoading ? (
              <TableSkeleton />
            ) : (
              <InstallmentsTable paymentsData={paymentData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installments;
