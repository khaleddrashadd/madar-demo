import AppHeading from '@/components/AppHeading';
import ContractsStatuses from '@/features/contracts/components/ContractsStatuses';
import ContractsStatusesChart from '@/features/contracts/components/ContractsStatusesChart';
import BucketGrowthRate from '@/features/contracts/components/BucketGrowthRate';
import BucketGrowthRateChart from '@/features/contracts/components/BucketGrowthRateChart';
import ContractsReport from '@/features/contracts/components/ContractsReport';
import ContractsReportTable from '@/features/contracts/components/ContractsReportTable';
import ContractsFilter from '@/features/contracts/components/ContractsFilter';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import {
  getSelectedBucketsName,
  getSelectedContractReportFilter,
  getSelectedMonth,
  getSelectedPortfolio,
  getSelectedYear,
} from '@/features/contracts/store/contractSlice';
import ErrorFallback from '@/features/contracts/components/ErrorFallback';
import { useCallback, useState } from 'react';
import getChartsData from '@/features/contracts/services/getContrctsChartsData';
import getContractsTableData from '@/features/contracts/services/getContractsTableData';
import { getAdminLegalOwner } from '@/layouts/store/prevailageSlice';

const initialPagination = {
  pageSize: 10,
  pageNumber: 1,
};

const Contracts = () => {
  const [paginationData, setPaginationData] = useState(initialPagination);
  const selectedYear = useSelector(getSelectedYear);
  const selectedMonth = useSelector(getSelectedMonth);
  const selectedPortfolio = useSelector(getSelectedPortfolio);
  const selectedContractReportFilter = useSelector(
    getSelectedContractReportFilter
  );
  const selectedBuckets = useSelector(getSelectedBucketsName);
  const selectedLegalOwner = useSelector(getAdminLegalOwner);

  const chartsQueryParams = {
    year: selectedYear,
    month: selectedMonth,
    portfolioNumber: selectedPortfolio,
    selectedLegalOwner,
  };

  const { data, isLoading } = useQuery({
    queryKey: [
      'contracts-charts',
      selectedYear,
      selectedMonth,
      selectedPortfolio,
      selectedLegalOwner,
    ],
    queryFn: () => getChartsData(chartsQueryParams),
    placeholderData: keepPreviousData,
  });

  const resetPagination = useCallback(
    () => setPaginationData(initialPagination),
    []
  );

  const excelFileQuery = {
    year: selectedYear,
    month: selectedMonth,
    portfolioNumber: selectedPortfolio,
    nationalId: selectedContractReportFilter.nid,
    beneficiaryName: selectedContractReportFilter.name,
    mortgageNumber: selectedContractReportFilter.contractId,
    filterBuckets: selectedBuckets,
    selectedLegalOwner,
  };
  const tableQueryParams = {
    ...excelFileQuery,
    pageSize: paginationData.pageSize,
    pageNumber: paginationData.pageNumber,
    selectedLegalOwner,
  };

  const { data: tableData, isLoading: isTableDataLoading } = useQuery({
    queryKey: [
      'contracts-table',
      selectedYear,
      selectedMonth,
      selectedPortfolio,
      selectedContractReportFilter,
      paginationData,
      selectedBuckets,
      selectedLegalOwner,
    ],
    queryFn: () => getContractsTableData(tableQueryParams),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-between flex-col gap-y-4 lg:flex-row mb-4">
          <AppHeading title="العقود" />
          <ContractsFilter
            data={data?.portfoliosData}
            minDate={data?.minDate}
            resetPagination={resetPagination}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <ErrorFallback>
              <ContractsStatuses
                total={data?.contractsCount}
                isLoading={isLoading}
                isEmpty={!isLoading && (!data || !data.bucketContracts.length)}
              >
                <ContractsStatusesChart
                  resetPagination={resetPagination}
                  data={data?.bucketContracts}
                />
              </ContractsStatuses>
            </ErrorFallback>
          </div>
          <div>
            <ErrorFallback>
              <BucketGrowthRate
                resetPagination={resetPagination}
                isLoading={isLoading}
                isEmpty={
                  !isLoading &&
                  (!data || !data.bucketStatusIncreasingRates.length)
                }
              >
                <BucketGrowthRateChart
                  data={data?.bucketStatusIncreasingRates}
                />
              </BucketGrowthRate>
            </ErrorFallback>
          </div>
          <div>
            <ErrorFallback>
              <ContractsReport
                resetPagination={resetPagination}
                total={tableData?.totalCount}
                isLoading={isTableDataLoading}
                filterValues={excelFileQuery}
              >
                <ContractsReportTable
                  data={tableData}
                  setPaginationData={setPaginationData}
                />
              </ContractsReport>
            </ErrorFallback>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contracts;
