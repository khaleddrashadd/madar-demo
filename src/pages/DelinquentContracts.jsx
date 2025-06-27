import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DelinquentContractsFilter from '@/features/delinquentContracts/components/DelinquentContractsFilter';
import DelinquentMainOverView from '@/features/delinquentContracts/components/DelinquentMainOverView';
import { useState } from 'react';
import DelinquentMainCharts from '../features/delinquentContracts/components/DelinquentMainCharts';
import LoanClassificationCharts from '@/features/delinquentContracts/components/LoanClassificationCharts';
import DelinquentCollectionOverView from '@/features/delinquentContracts/components/DelinquentCollectionOverView';
import DelinquentCollectionCharts from '@/features/delinquentContracts/components/DelinquentCollectionCharts';
import DelinquentLoansTable from '@/features/delinquentContracts/components/DelinquentLoansTable';

const DelinquentContracts = () => {
  const [filterData, setFilterData] = useState({});
  console.log(filterData);
  const [selectedPortfolio, setSelectedPortfolio] = useState('');

  return (
    <div className="p-4 mt-2">
      <Tabs defaultValue="main" className="w-full" dir="rtl">
        {/* Main Tabs */}
        <TabsList className="w-full justify-start h-auto bg-transparent mb-2">
          <TabsTrigger
            value="main"
            className="data-[state=active]:text-primary-500  data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none text-lg pb-5"
          >
            <div className="flex items-center gap-2">
              <span> الرئيسية</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="loan-classification"
            className="data-[state=active]:text-primary-500 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:shadow-none rounded-none text-lg pb-5"
          >
            <div className="flex items-center gap-2">
              <span>تصنيف القروض</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="delinquent-collections"
            className="data-[state=active]:text-primary-500 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:shadow-none rounded-none text-lg pb-5"
          >
            <div className="flex items-center gap-2">
              <span>التحصيل العقود المتعثره</span>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="main" className="mt-0">
          <DelinquentContractsFilter
            onFilter={(data) => setFilterData((prev) => ({ ...prev, ...data }))}
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold">نظرة عامة</h2>
            <div className="my-4">
              <DelinquentMainOverView />
            </div>
            <DelinquentMainCharts />
          </div>
        </TabsContent>

        <TabsContent value="loan-classification">
          <DelinquentContractsFilter
            isContractStatus={false}
            onFilter={(data) => setFilterData((prev) => ({ ...prev, ...data }))}
          />
          <div className="mt-4">
            <LoanClassificationCharts />
          </div>
        </TabsContent>
        <TabsContent value="delinquent-collections">
          <DelinquentContractsFilter
            isContractStatus={false}
            onFilter={(data) => setFilterData((prev) => ({ ...prev, ...data }))}
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold">نظرة عامة</h2>
            <div className="my-4">
              <DelinquentCollectionOverView
                selectedPortfolio={selectedPortfolio}
              />
            </div>
            <DelinquentCollectionCharts
              selectedPortfolio={selectedPortfolio}
              setSelectedPortfolio={setSelectedPortfolio}
            />
          </div>
          <div className="mt-4">
            <DelinquentLoansTable />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default DelinquentContracts;
