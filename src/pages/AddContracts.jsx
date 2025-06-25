import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AddContractsFilter from '@/features/addContracts/components/AddContractsFilter';
import AutoUploadedContractsTable from '@/features/addContracts/components/AutoUploadedContractsTable';
import InvalidUploadedContractsTable from '@/features/addContracts/components/InvalidUploadedContractsTable';
import ManualUploadedContractsTable from '@/features/addContracts/components/ManualUploadedContractsTable';

const manualData = {
  items: [
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00002',
      beneficiaryName:
        '\u0634\u0627\u062F\u064A \u062C\u0645\u0627\u0644 \u0627\u0644\u0625\u0645\u0627\u0645',
      nationalId: '1023456789',
      maturityDate: '2026-10-14T19:26:52',
      outstandingPrincipal: 63081.12,
      contractStatusId: 'PendingVerification',
      contractStatus: 'لم يتم التحقق',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '#21',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00003',
      beneficiaryName:
        '\u0633\u0627\u0631\u0629 \u0623\u062D\u0645\u062F \u0627\u0644\u0634\u0645\u0631\u064A',
      nationalId: '1023456744',
      maturityDate: '2027-09-09T19:26:52',
      outstandingPrincipal: 64517.05,
      contractStatusId: 'PendingVerification',
      contractStatus: 'لم يتم التحقق',
      legalOwner: 'SRC',
      originator: 'BHF',
      portfolioNumber: '@87',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00004',
      beneficiaryName:
        '\u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0645\u062D\u0645\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A',
      nationalId: '1023456732',
      maturityDate: '2028-02-06T19:26:52',
      outstandingPrincipal: 79736.64,
      contractStatusId: 'Verified',
      contractStatus: 'تم التحقق',
      legalOwner: 'REDF',
      originator: 'SNB',
      portfolioNumber: '12$',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00005',
      beneficiaryName:
        '\u0646\u0648\u0631\u0629 \u0639\u0644\u064A \u0627\u0644\u0639\u0646\u0632\u064A',
      nationalId: '1023456784',
      maturityDate: '2027-05-12T19:26:52',
      outstandingPrincipal: 77788.3,
      contractStatusId: 'PendingVerification',
      contractStatus: 'لم يتم التحقق',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '#21',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00006',
      beneficiaryName:
        '\u0641\u064A\u0635\u0644 \u0633\u0639\u064A\u062F \u0627\u0644\u0632\u0647\u0631\u0627\u0646\u064A',
      nationalId: '1023456735',
      maturityDate: '2027-01-12T19:26:52',
      outstandingPrincipal: 79557.18,
      contractStatusId: 'PendingVerification',
      contractStatus: 'لم يتم التحقق',
      legalOwner: 'SRC',
      originator: 'BHF',
      portfolioNumber: '#212',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00007',
      beneficiaryName:
        '\u0645\u0646\u064A\u0631\u0629 \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u0623\u0646\u0635\u0627\u0631\u064A',
      nationalId: '1023456810',
      maturityDate: '2028-06-05T19:26:52',
      outstandingPrincipal: 136274.76,
      contractStatusId: 'Verified',
      contractStatus: 'تم التحقق',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '12$',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00008',
      beneficiaryName:
        '\u0633\u0644\u0645\u0627\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u062F\u0648\u0633\u0631\u064A',
      nationalId: '1023456855',
      maturityDate: '2027-08-10T19:26:52',
      outstandingPrincipal: 80807.74,
      contractStatusId: 'PendingVerification',
      contractStatus: 'لم يتم التحقق',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '#21',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00009',
      beneficiaryName:
        '\u062C\u0648\u0627\u0647\u0631 \u0639\u0628\u062F\u0627\u0644\u0639\u0632\u064A\u0632 \u0627\u0644\u0634\u0645\u0631\u0627\u0646\u064A',
      nationalId: '1023456890',
      maturityDate: '2026-08-15T19:26:52',
      outstandingPrincipal: 31982.72,
      contractStatusId: 'PendingVerification',
      contractStatus: 'لم يتم التحقق',
      legalOwner: 'REDF',
      originator: 'SNB',
      portfolioNumber: '@87',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00010',
      beneficiaryName:
        '\u062A\u0631\u0643\u064A \u0641\u0647\u062F \u0627\u0644\u062D\u0631\u0628\u064A',
      nationalId: '1023456854',
      maturityDate: '2027-06-11T19:26:52',
      outstandingPrincipal: 119248.32,
      contractStatusId: 'Verified',
      contractStatus: 'تم التحقق',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '#21',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00011',
      beneficiaryName:
        '\u0634\u0627\u062F\u064A \u062C\u0645\u0627\u0644 \u0627\u0644\u0625\u0645\u0627\u0645',
      nationalId: '1023456789',
      maturityDate: '2028-02-06T19:26:52',
      outstandingPrincipal: 78397.44,
      contractStatusId: 'Verified',
      contractStatus: 'تم التحقق',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '#21',
      by: 'ali.omar@gmail.com',
    },
  ],
  pageNumber: 1,
  pageSize: 10,
  totalCount: 13,
  totalPages: 2,
  hasPreviousPage: false,
  hasNextPage: true,
};
const invalidData = {
  items: [
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00002',
      beneficiaryName:
        '\u0634\u0627\u062F\u064A \u062C\u0645\u0627\u0644 \u0627\u0644\u0625\u0645\u0627\u0645',
      nationalId: '1023456789',
      maturityDate: '2026-10-14T19:26:52',
      outstandingPrincipal: 63081.12,
      contractStatusId: 'ErrorOccurred',
      contractStatus: 'حدث خطأ في البيانات',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '#21',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00003',
      beneficiaryName:
        '\u0633\u0627\u0631\u0629 \u0623\u062D\u0645\u062F \u0627\u0644\u0634\u0645\u0631\u064A',
      nationalId: '1023456744',
      maturityDate: '2027-09-09T19:26:52',
      outstandingPrincipal: 64517.05,
      contractStatusId: 'ErrorOccurred',
      contractStatus: 'حدث خطأ في البيانات',
      legalOwner: 'SRC',
      originator: 'BHF',
      portfolioNumber: '@87',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00004',
      beneficiaryName:
        '\u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0645\u062D\u0645\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A',
      nationalId: '1023456732',
      maturityDate: '2028-02-06T19:26:52',
      outstandingPrincipal: 79736.64,
      contractStatusId: 'ErrorOccurred',
      contractStatus: 'حدث خطأ في البيانات',
      legalOwner: 'REDF',
      originator: 'SNB',
      portfolioNumber: '12$',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00005',
      beneficiaryName:
        '\u0646\u0648\u0631\u0629 \u0639\u0644\u064A \u0627\u0644\u0639\u0646\u0632\u064A',
      nationalId: '1023456784',
      maturityDate: '2027-05-12T19:26:52',
      outstandingPrincipal: 77788.3,
      contractStatusId: 'ErrorOccurred',
      contractStatus: 'حدث خطأ في البيانات',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '#21',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00006',
      beneficiaryName:
        '\u0641\u064A\u0635\u0644 \u0633\u0639\u064A\u062F \u0627\u0644\u0632\u0647\u0631\u0627\u0646\u064A',
      nationalId: '1023456735',
      maturityDate: '2027-01-12T19:26:52',
      outstandingPrincipal: 79557.18,
      contractStatusId: 'ErrorOccurred',
      contractStatus: 'حدث خطأ في البيانات',
      legalOwner: 'SRC',
      originator: 'BHF',
      portfolioNumber: '#212',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00007',
      beneficiaryName:
        '\u0645\u0646\u064A\u0631\u0629 \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u0623\u0646\u0635\u0627\u0631\u064A',
      nationalId: '1023456810',
      maturityDate: '2028-06-05T19:26:52',
      outstandingPrincipal: 136274.76,
      contractStatusId: 'ErrorOccurred',
      contractStatus: 'حدث خطأ في البيانات',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '12$',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00008',
      beneficiaryName:
        '\u0633\u0644\u0645\u0627\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u062F\u0648\u0633\u0631\u064A',
      nationalId: '1023456855',
      maturityDate: '2027-08-10T19:26:52',
      outstandingPrincipal: 80807.74,
      contractStatusId: 'ErrorOccurred',
      contractStatus: 'حدث خطأ في البيانات',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '#21',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00009',
      beneficiaryName:
        '\u062C\u0648\u0627\u0647\u0631 \u0639\u0628\u062F\u0627\u0644\u0639\u0632\u064A\u0632 \u0627\u0644\u0634\u0645\u0631\u0627\u0646\u064A',
      nationalId: '1023456890',
      maturityDate: '2026-08-15T19:26:52',
      outstandingPrincipal: 31982.72,
      contractStatusId: 'ErrorOccurred',
      contractStatus: 'حدث خطأ في البيانات',
      legalOwner: 'REDF',
      originator: 'SNB',
      portfolioNumber: '@87',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00010',
      beneficiaryName:
        '\u062A\u0631\u0643\u064A \u0641\u0647\u062F \u0627\u0644\u062D\u0631\u0628\u064A',
      nationalId: '1023456854',
      maturityDate: '2027-06-11T19:26:52',
      outstandingPrincipal: 119248.32,
      contractStatusId: 'ErrorOccurred',
      contractStatus: 'حدث خطأ في البيانات',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '#21',
      by: 'ali.omar@gmail.com',
    },
    {
      referenceNumber: '98767611',
      contractNumber: 'CN00011',
      beneficiaryName:
        '\u0634\u0627\u062F\u064A \u062C\u0645\u0627\u0644 \u0627\u0644\u0625\u0645\u0627\u0645',
      nationalId: '1023456789',
      maturityDate: '2028-02-06T19:26:52',
      outstandingPrincipal: 78397.44,
      contractStatusId: 'ErrorOccurred',
      contractStatus: 'حدث خطأ في البيانات',
      legalOwner: 'SRC',
      originator: 'DGF',
      portfolioNumber: '#21',
      by: 'ali.omar@gmail.com',
    },
  ],
  pageNumber: 1,
  pageSize: 10,
  totalCount: 13,
  totalPages: 2,
  hasPreviousPage: false,
  hasNextPage: true,
};

const AddContracts = () => {
  return (
    <div className="p-4 mt-2">
      <Tabs
        defaultValue="uploaded-contracts-manual"
        className="w-full bg-ivory-100"
        dir="rtl"
      >
        {/* Main Tabs */}
        <TabsList className="w-full bg-white justify-start h-auto mb-2">
          <TabsTrigger
            value="uploaded-contracts-manual"
            className="data-[state=active]:text-primary-500  data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:shadow-none rounded-none text-lg pb-5"
          >
            <div className="flex items-center gap-2">
              <span>العقود المرفوعة يدويا</span>
              <Badge className="border-none">120</Badge>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="uploaded-contracts-automatic"
            className="data-[state=active]:text-primary-500  data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:shadow-none rounded-none text-lg pb-5"
          >
            <div className="flex items-center gap-2">
              <span>العقود المرفوعة آليا</span>
              <Badge variant="success" className="border-none">
                370
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
                159
              </Badge>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="uploaded-contracts-manual" className="mt-0">
          <AddContractsFilter />
          <div className="mt-4">
            <ManualUploadedContractsTable data={manualData} />
          </div>
        </TabsContent>
        <TabsContent value="uploaded-contracts-automatic" className="mt-0">
          <AddContractsFilter />
          <div className="mt-4">
            <AutoUploadedContractsTable data={manualData} />
          </div>
        </TabsContent>

        <TabsContent value="incorrect-contracts">
          <AddContractsFilter />
          <div className="mt-4">
            <InvalidUploadedContractsTable data={invalidData} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default AddContracts;
