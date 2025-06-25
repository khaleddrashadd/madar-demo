import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import ContractBasicDataGrid from '../../onboarding/components/ContractBasicDataGrid';
import ContractDetailsPaymentsContent from './ContractDetailsPaymentsContent';
import ContractBeneficiaryDataGrid from '../../onboarding/components/ContractBeneficiaryDataGrid';
import ContractFinanceDataGrid from '../../onboarding/components/ContractFinanceDataGrid';
import ContractPropertyDataGrid from '../../onboarding/components/ContractPropertyDataGrid';
import ContractDataGridTitle from '../../onboarding/components/ContractDataGridTitle';
import ContractDocsDataGrid from '@/features/onboarding/components/ContractDocsDataGrid';

const tabs = ['basic', 'beneficiary', 'financial', 'property', 'docs'];

const basicDetails = {
  mortgageAccountNumber: 'CN00002',
  nationalId: '1023456789',
  contractType: '\u0625\u064A\u062C\u0627\u0631\u0647',
  accountType: 'TEST',
  originationDate: '2025-02-24T19:26:52',
  originatorName: '\u0645\u0633\u0627\u0631',
  currentMonthlyInstallment: 3942.57,
  currentLoanAmount: 56773.01,
  simahGeneratedDate: '2025-01-26T01:19:06.353',
  advanceAmount: 771.59,
  nextBillDate: '2025-03-20T01:19:06.353',
  isREDFSubsidized: true,
  beneficiaryName:
    '\u0634\u0627\u062F\u064A \u062C\u0645\u0627\u0644 \u0627\u0644\u0625\u0645\u0627\u0645',
  mobileNumber: '966551234567',
  portfolioOwner: '\u0645\u0633\u0627\u0631',
  portfolioOriginator: 'Test',
  portfolioNumber: 822,
  maturityDate: '2024-06-28T19:26:52',
  dpd: '5',
  firstAppraisalDate: null,
  paymentFrequency: '\u0634\u0647\u0631\u064A',
  installmentDay: 24,
  initialTerm: 'Test',
  downPayment: 6308.11,
  propertyType: '\u062F\u0648\u0628\u0644\u0643\u0633',
  numberofPaidInstallments: 15,
  remainingTerm: 'Test',
  interestTypeOrigination: 3.08,
  isRestructured: false,
  totalPayableAmount: 83081.12,
  isGuarantor: false,
  initialMaturityDate: '2026-10-14T19:26:52',
  redfRefNumber: 'REDF-927805',
};

const beneficiaryDetails = {
  nidExpiryDate: '2030-05-02T00:00:00',
  nid: '1023456789',
  gender: 'M',
  dob: '1997-03-14T00:00:00',
  fullName:
    '\u0634\u0627\u062F\u064A \u062C\u0645\u0627\u0644 \u0627\u0644\u0625\u0645\u0627\u0645',
  mobileNumber: '966551234567',
  buildingNumber: 'C-272',
  fti: '--',
  email: '--',
  sponsorNID: '1058529940',
  sponserName: 'Mohamed Magdy Lokma',
  streetName: '30',
  neighborhood: 'Andules',
  cityName: '\u0627\u0644\u0631\u064A\u0627\u0636',
  postalCode: '12345',
  additionalNumber: '--',
  professionName:
    '\u0645\u0648\u0638\u0641 \u062D\u0643\u0648\u0645\u064A / \u0646\u0635\u0641 \u062D\u0643\u0648\u0645\u064A',
  netMonthlyIncome: 10500.0,
  otherObligations: '--',
  isCoBorrower: false,
  bankName:
    '\u0645\u0635\u0631\u0641 \u0627\u0644\u0631\u0627\u062C\u062D\u064A',
  iban: 'SA0380000000608010167519',
  isDead: false,
  deathDate: '--',
};

const financeDetails = {
  interestTypeOrigination: 3.08,
  originalAPR: 4.08,
  lifeTimeCapRateAdjustment: '2.85',
  resetInterval: '6',
  initialFixedRatePeriod: '6',
  indexUsedForRateReset: 'TEST',
  lifeTimeFloorOnRateAdjustment: '2.85',
  maximumInterestRateIncrease: '-',
  maximumInterestRateDecrease: '--',
  interestIndexRateAtOrigination: '--',
  interestRateMargin: '--',
  initialMonthlyInstallment: 3942.57,
  contractTypeName: '\u0625\u064A\u062C\u0627\u0631\u0647',
  originalLoanAmount: 63081.12,
  loanToValueAtOrigination: 56773.01,
  unpaidPrincipalBalance: 63081.12,
  lastRepricingDate: '2024-06-28T19:26:52',
  currentMonthlyInstallment: 3942.57,
  finalPayment: 3942.57,
  lengthOfLeasePeriod: 16,
  outstandingAmount: 63081.12,
  termCostRate: 2.85,
};

const propertyDetails = {
  propertyTypeName: '\u062F\u0648\u0628\u0644\u0643\u0633',
  buildingNumber: '758',
  streetName:
    '\u0634\u0627\u0631\u0639 \u0627\u0644\u0623\u0645\u064A\u0631 \u0633\u0644\u0637\u0627\u0646',
  neighborhood: '\u0627\u0644\u0631\u0648\u0636\u0629',
  cityName: '\u062C\u062F\u0629',
  postalCode: '64511',
  additionalNumber: '5295',
  occupancyStatus: 'PrimaryResidential',
  firstAppraisalDate: '--',
  firstAppraisalValuation: '--',
  secondAppraisalDate: '--',
  secondAppraisalValuation: '--',
  propertyPurchaseAmount: 819.22,
  interestIndexUsedAtOrigination: '--',
};
const docsDetails = {
  hasFile: true,
  nid: false,
  salaryCertificate: 'salary_certificate.pdf',
  leaseContract: 'lease_contract.pdf',
  installmentSchedule: false,
  promissoryNotes: 'promissory_notes.pdf',
  appraisals: false,
  propertyDeed: 'property_deed.pdf',
  beneficiaryExpensesForm: 'beneficiary_expenses_form.pdf',
  otherFiles: 'other_files.pdf',
};

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
            <div className="w-full overflow-x-auto rounded-lg overflow-hidden border bg-white border-ivory-200 p-4 flex gap-2 items-center">
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
              <TabsTrigger
                value="docs"
                className="data-[state=active]:text-white py-2 px-5 data-[state=active]:bg-primary-500 data-[state=active]:shadow-none rounded-lg text-sm  font-semibold border border-ivory-900 data-[state=active]:border-primary-500"
              >
                المستندات
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
              <ContractBasicDataGrid data={basicDetails} isLoading={false} />
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
                isLoading={false}
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
                isLoading={false}
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
                isLoading={false}
              />
            </ContractDataGridTitle>
          </TabsContent>
          <TabsContent value="docs" className="bg-ivory-100 pt-4">
            <ContractDataGridTitle
              title="المستندات"
              currentTab={currentTab}
              handleNextTab={handleNextTab}
              handlePrevTab={handlePrevTab}
            >
              <ContractDocsDataGrid data={docsDetails} isLoading={false} />
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
