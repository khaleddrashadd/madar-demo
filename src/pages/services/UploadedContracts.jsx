import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CorrectUploadedContractsTable from '@/features/onboarding/components/CorrectUploadedContractsTable';
import IncorrectUploadedContractsTable from '@/features/onboarding/components/IncorrectUploadedContractsTable';
import UploadedContractsFilter from '@/features/onboarding/components/UploadedContractsFilter';
import getUploadedContracts from '@/features/onboarding/services/getUploadedContracts';
import useMutationExportContracts from '@/features/onboarding/hooks/useMutationExportContracts';
import useQueryContracts from '@/features/onboarding/hooks/useQueryContracts';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import getUploadedInvalidContracts from '@/features/onboarding/services/getUploadedInvalidContracts';
import exportUploadedContracts from '@/features/onboarding/services/exportUploadedContracts';
import exportInvalidContracts from '@/features/onboarding/services/exportInvalidContracts';

const TABS = {
  UPLOADED_CONTRACTS: { tab: 'uploaded-contracts' },
  INCORRECT_CONTRACTS: { tab: 'incorrect-contracts' },
  DEFAULT: { tab: 'uploaded-contracts' },
};

const UploadedContracts = () => {
  const [searchParams, setSearchParams] = useSearchParams(TABS.DEFAULT);
  useEffect(() => {
    if (
      !searchParams.has('tab') ||
      !Object.values(TABS).some((tab) => tab.tab === searchParams.get('tab'))
    ) {
      setSearchParams(TABS.DEFAULT);
    }
  }, [searchParams, setSearchParams]);

  const {
    contracts: UploadedContracts,
    isContractsLoading: isUploadedContractsLoading,
    setFilterData: setUploadedFilterData,
    setPagination: setUploadedContractsPagination,
    filterData: uploadedFilterData,
    pagination: uploadedContractsPagination,
  } = useQueryContracts({
    queryFn: getUploadedContracts,
    queryKey: ['uploaded-contracts'],
  });
  const {
    contracts: uploadedInvalidContracts,
    isContractsLoading: isUploadedInvalidContractsLoading,
    setFilterData: setUploadedInvalidFilterData,
    setPagination: setUploadedInvalidContractsPagination,
    filterData: uploadedInvalidFilterData,
    pagination: uploadedInvalidContractsPagination,
  } = useQueryContracts({
    queryFn: getUploadedInvalidContracts,
    queryKey: ['uploaded-contracts-invalid'],
  });

  const {
    isContractsFileLoading: isExportUploadedContractsFileLoading,
    exportFile: exportUploadedContractsFile,
  } = useMutationExportContracts({
    mutationFn: exportUploadedContracts,
  });
  const {
    isContractsFileLoading: isExportInvalidContractsFileLoading,
    exportFile: exportInvalidContractFile,
  } = useMutationExportContracts({
    mutationFn: exportInvalidContracts,
  });

  return (
    <div className="p-4 mt-2">
      <Tabs
        value={searchParams.get('tab') || TABS.DEFAULT}
        onValueChange={(value) => setSearchParams({ tab: value })}
        defaultValue="uploaded-contracts"
        className="w-full bg-ivory-100"
        dir="rtl"
      >
        {/* Main Tabs */}
        <TabsList className="w-full bg-white justify-start h-auto mb-2">
          <TabsTrigger
            value="uploaded-contracts"
            className="data-[state=active]:text-primary-500  data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:shadow-none rounded-none text-lg pb-5"
          >
            <div className="flex items-center gap-2">
              <span> العقود المرفوعة</span>
              <Badge className="border-none">
                {UploadedContracts?.totalCount}
              </Badge>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="incorrect-contracts"
            className="data-[state=active]:text-primary-500  data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:shadow-none rounded-none text-lg pb-5"
          >
            <div className="flex items-center gap-2">
              <span>العقود الغير صالحة</span>
              <Badge variant="destructive" className="border-none">
                {uploadedInvalidContracts?.totalCount}
              </Badge>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="uploaded-contracts" className="mt-0">
          <UploadedContractsFilter
            onFilter={(data) =>
              setUploadedFilterData((prev) => ({ ...prev, ...data }))
            }
          />
          <div className="mt-4">
            <CorrectUploadedContractsTable
              isFileLoading={isExportUploadedContractsFileLoading}
              handleExportContracts={exportUploadedContractsFile}
              isLoading={isUploadedContractsLoading}
              data={UploadedContracts}
              filterData={uploadedFilterData}
              pagination={uploadedContractsPagination}
              onChangePageNumber={(number) =>
                setUploadedContractsPagination((prev) => ({
                  ...prev,
                  pageNumber: number,
                }))
              }
              onChangePageSize={(size) => (prev) => ({
                ...prev,
                pageSize: size,
              })}
            />
          </div>
        </TabsContent>

        <TabsContent value="incorrect-contracts">
          <UploadedContractsFilter
            isContractStatus={false}
            onFilter={(data) =>
              setUploadedInvalidFilterData((prev) => ({ ...prev, ...data }))
            }
          />
          <div className="mt-4">
            <IncorrectUploadedContractsTable
              isFileLoading={isExportInvalidContractsFileLoading}
              handleExportContracts={exportInvalidContractFile}
              isLoading={isUploadedInvalidContractsLoading}
              data={uploadedInvalidContracts}
              filterData={uploadedInvalidFilterData}
              pagination={uploadedInvalidContractsPagination}
              onChangePageNumber={(number) =>
                setUploadedInvalidContractsPagination((prev) => ({
                  ...prev,
                  pageNumber: number,
                }))
              }
              onChangePageSize={(size) =>
                setUploadedInvalidContractsPagination((prev) => ({
                  ...prev,
                  pageSize: size,
                }))
              }
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UploadedContracts;
