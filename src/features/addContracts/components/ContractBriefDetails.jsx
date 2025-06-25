import ContractDetailsAccordion from '../../onboarding/components/ContractDetailsAccordion';
import ContractBriefDetailsDates from '../../onboarding/components/ContractBriefDetailsDates';

const contractBriefDetailsData = {
  originationDate: '2025-02-24T19:26:52',
  dueDate: '2025-07-13T19:26:52',
  mortgageAccountNumber: 'CN00002',
  contractStatusId: 'PendingVerification',
  contractStatus: 'لم يتم التحقق',
  bucketStatusId: 'Current',
  bucketStatus: 'Current',
  totalPayableAmount: 83081.12,
  originalLoanAmount: 63081.12,
  portfolioOriginator: '\u0645\u0633\u0627\u0631',
  overdueDays: 0,
  dueAmount: 380.74,
  portfolioNumber: 822,
};

const ContractBriefDetails = () => {
  return (
    <>
      <ContractBriefDetailsDates data={contractBriefDetailsData} />
      <ContractDetailsAccordion data={contractBriefDetailsData} />
    </>
  );
};

export default ContractBriefDetails;
