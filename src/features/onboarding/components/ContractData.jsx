import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import ContractBasicDataGrid from './ContractBasicDataGrid';
import ContractDetailsPaymentsContent from './ContractDetailsPaymentsContent';
import { useParams } from 'react-router';
import ContractBeneficiaryDataGrid from './ContractBeneficiaryDataGrid';
import ContractFinanceDataGrid from './ContractFinanceDataGrid';
import ContractPropertyDataGrid from './ContractPropertyDataGrid';
import ContractDataGridTitle from './ContractDataGridTitle';
import useQueryContractDetails from '../hooks/useQueryContractDetails';

const tabs = ['basic', 'beneficiary', 'financial', 'property'];

const ContractData = () => {
  const [currentTab, setCurrentTab] = useState('basic');
  const handleNextTab = () => {
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex < tabs.length - 1) {
      setCurrentTab(tabs[currentIndex + 1]);
    }
  };
  const handlePrevTab = () => {
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex > 0) {
      setCurrentTab(tabs[currentIndex - 1]);
    }
  };
  const { id: contractId } = useParams();
  const {
    basicDetails,
    beneficiaryDetails,
    financeDetails,
    isBasicDetailsLoading,
    isBeneficiaryDetailsLoading,
    isFinanceDetailsLoading,
    isPropertyDetailsLoading,
    propertyDetails,
  } = useQueryContractDetails(contractId);

  return (
    <Tabs defaultValue="contract" className="w-full bg-ivory-100" dir="rtl">
      {/* Main Tabs */}
      <TabsList className="w-full bg-white justify-start h-auto mb-2">
        <TabsTrigger
          value="contract"
          className="data-[state=active]:text-primary-500  data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:shadow-none rounded-none text-lg pb-5"
        >
          بيانات العقد
        </TabsTrigger>
        <TabsTrigger
          value="payments"
          className="data-[state=active]:text-primary-500  data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:shadow-none rounded-none text-lg pb-5"
        >
          الدفعات
        </TabsTrigger>
      </TabsList>

      {/* بيانات العقد Tab with Nested Tabs */}
      <TabsContent value="contract" className="bg-white mt-0">
        <Tabs
          defaultValue="basic"
          value={currentTab}
          onValueChange={(tab) => setCurrentTab(tab)}
          className="w-full"
          dir="rtl"
        >
          {/* Sub Tabs */}
          <TabsList className="p-0 bg-white w-full mt-4">
            <div className="w-full rounded-lg overflow-hidden border bg-white border-ivory-200 p-4 flex gap-2 items-center">
              <TabsTrigger
                value="basic"
                className="data-[state=active]:text-white py-2 px-5 data-[state=active]:bg-primary-500 data-[state=active]:shadow-none rounded-lg text-sm  font-semibold border border-ivory-900 data-[state=active]:border-primary-500"
              >
                البيانات الأساسية
              </TabsTrigger>
              <TabsTrigger
                value="beneficiary"
                className="data-[state=active]:text-white py-2 px-5 data-[state=active]:bg-primary-500 data-[state=active]:shadow-none rounded-lg text-sm  font-semibold border border-ivory-900 data-[state=active]:border-primary-500"
              >
                بيانات العميل
              </TabsTrigger>
              <TabsTrigger
                value="financial"
                className="data-[state=active]:text-white py-2 px-5 data-[state=active]:bg-primary-500 data-[state=active]:shadow-none rounded-lg text-sm  font-semibold border border-ivory-900 data-[state=active]:border-primary-500"
              >
                البيانات المالية
              </TabsTrigger>
              <TabsTrigger
                value="property"
                className="data-[state=active]:text-white py-2 px-5 data-[state=active]:bg-primary-500 data-[state=active]:shadow-none rounded-lg text-sm  font-semibold border border-ivory-900 data-[state=active]:border-primary-500"
              >
                العقار
              </TabsTrigger>
            </div>
          </TabsList>

          {/* Example Tab Content */}
          <TabsContent value="basic" className="bg-ivory-100 pt-4 w-full ">
            <ContractDataGridTitle
              currentTab={currentTab}
              handleNextTab={handleNextTab}
              handlePrevTab={handlePrevTab}
              title="البيانات الأساسية"
            >
              <ContractBasicDataGrid
                data={basicDetails}
                isLoading={isBasicDetailsLoading}
              />
            </ContractDataGridTitle>
          </TabsContent>
          <TabsContent value="beneficiary" className="bg-ivory-100 pt-4">
            <ContractDataGridTitle
              title="بيانات العميل"
              currentTab={currentTab}
              handleNextTab={handleNextTab}
              handlePrevTab={handlePrevTab}
            >
              <ContractBeneficiaryDataGrid
                data={beneficiaryDetails}
                isLoading={isBeneficiaryDetailsLoading}
              />
            </ContractDataGridTitle>
          </TabsContent>

          <TabsContent value="financial" className="bg-ivory-100 pt-4">
            <ContractDataGridTitle
              title="البيانات المالية"
              currentTab={currentTab}
              handleNextTab={handleNextTab}
              handlePrevTab={handlePrevTab}
            >
              <ContractFinanceDataGrid
                data={financeDetails}
                isLoading={isFinanceDetailsLoading}
              />
            </ContractDataGridTitle>
          </TabsContent>
          <TabsContent value="property" className="bg-ivory-100 pt-4">
            <ContractDataGridTitle
              title="العقار"
              currentTab={currentTab}
              handleNextTab={handleNextTab}
              handlePrevTab={handlePrevTab}
            >
              <ContractPropertyDataGrid
                data={propertyDetails}
                isLoading={isPropertyDetailsLoading}
              />
            </ContractDataGridTitle>
          </TabsContent>
        </Tabs>
      </TabsContent>
      {/* الدفعات Tab */}
      <TabsContent value="payments" className="bg-white mt-0">
        <ContractDetailsPaymentsContent />
      </TabsContent>
    </Tabs>
  );
};

export default ContractData;
