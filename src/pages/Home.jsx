import CollectionPerformanceChart from '../features/portfolioPerformance/components/collectionPerformance/CollectionPerformanceChart';
import AppHeading from '../components/AppHeading';
import PortfolioFilter from '../features/portfolioPerformance/components/PortfolioFilter';
import PaymentAmountChart from '@/features/portfolioPerformance/components/payments/PaymentAmountChart';
import PortfoliosTotalContractsChart from '@/features/portfolioPerformance/components/contracts/PortfoliosTotalContractsChart';
import ContractStatusChart from '@/features/portfolioPerformance/components/contracts/ContractStatusChart';
import PaymentStatusChart from '../features/portfolioPerformance/components/payments/PaymentStatusChart';
import BucketRateChart from '../features/portfolioPerformance/components/Buckets/BucketRateChart';
import CollectionPerformance from '@/features/portfolioPerformance/components/CollectionPerformance';
import TotalValuesItems from '@/features/portfolioPerformance/components/TotalValuesItems';
import TotalValues from '@/features/portfolioPerformance/components/TotalValues';
import PortfoliosTotalContracts from '@/features/portfolioPerformance/components/PortfoliosTotalContracts';
import ContractStatus from '@/features/portfolioPerformance/components/ContractStatus';
import PaymentAmount from '@/features/portfolioPerformance/components/PaymentAmount';
import PaymentStatus from '@/features/portfolioPerformance/components/PaymentStatus';
import BucketRate from '@/features/portfolioPerformance/components/BucketRate';
import BucketsTotalContracts from '@/features/portfolioPerformance/components/BucketsTotalContracts';
import BucketsTotalContractsChart from '@/features/portfolioPerformance/components/Buckets/BucketsTotalContractsChart';
import { useState } from 'react';
import { homeData } from '@/features/portfolioPerformance/data/homeData';
import { homeDataOnSelectedPortfolio } from '@/features/portfolioPerformance/data/homeDataOnSelectedPortfolio';
export default function Home() {
  const [selectedPortfolio, setSelectedPortfolio] = useState('');

  const data = !selectedPortfolio ? homeData : homeDataOnSelectedPortfolio;
  console.log(data);

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between flex-col gap-y-4 md:flex-row">
        <AppHeading
          title="لوحة متابعة آداء المحافظ"
          className=" py-6 px-4 bg-white rounded-md shadow-md"
        />
        <PortfolioFilter minDate={data?.minDate} />
      </div>
      <div>
        <div className="grid grid-cols-10 gap-y-3 lg:gap-y-0 lg:gap-x-3">
          <div className="col-span-10 lg:col-span-6">
            <CollectionPerformance>
              <CollectionPerformanceChart data={data?.collectionPerformance} />
            </CollectionPerformance>
          </div>
          <div className="col-span-10 lg:col-span-4 row-span-2 max-lg:order-2">
            <TotalValues>
              <TotalValuesItems data={data?.totals} />
            </TotalValues>
          </div>
        </div>
        <div className="grid grid-cols-6 mt-4 gap-3">
          <div className="col-span-6 md:col-span-3 2xl:col-span-2">
            <PortfoliosTotalContracts>
              <PortfoliosTotalContractsChart
                data={data?.portfolioContractsData}
                setSelectedPortfolio={setSelectedPortfolio}
                selectedPortfolio={selectedPortfolio}
              />
            </PortfoliosTotalContracts>
          </div>
          <div className="col-span-6 md:col-span-3 2xl:col-span-2">
            <PaymentAmount>
              <PaymentAmountChart data={data?.installmentsData} />
            </PaymentAmount>
          </div>
          <div className="col-span-6 md:col-span-3 2xl:col-span-2">
            <BucketsTotalContracts>
              <BucketsTotalContractsChart data={data?.bucketContracts} />
            </BucketsTotalContracts>
          </div>
          <div className="col-span-6 md:col-span-3 2xl:col-span-2">
            <ContractStatus>
              <ContractStatusChart data={data?.contractStatus} />
            </ContractStatus>
          </div>
          <div className="col-span-6 md:col-span-3 2xl:col-span-2">
            <PaymentStatus>
              <PaymentStatusChart data={data?.installmentsRatios} />
            </PaymentStatus>
          </div>
          <div className="col-span-6 md:col-span-3 2xl:col-span-2">
            <BucketRate>
              <BucketRateChart data={data?.bucketContracts} />
            </BucketRate>
          </div>
        </div>
      </div>
    </div>
  );
}
