import { useQuery } from '@tanstack/react-query';

import { useParams } from 'react-router';
import getContractHeaderDetails from '../services/getContractHeaderDetails';
import ContractDetailsAccordion from './ContractDetailsAccordion';
import ContractBriefDetailsDates from './ContractBriefDetailsDates';
import { Skeleton } from '@/components/ui/skeleton';

const ContractBriefDetails = () => {
  const { id: contractId } = useParams();

  const {
    data: contractBriefDetailsData,
    isLoading: isContractBriefDetailsDataLoding,
  } = useQuery({
    queryKey: ['contract', contractId],
    queryFn: () => getContractHeaderDetails(contractId),
  });

  if (isContractBriefDetailsDataLoding) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 w-fit">
          <Skeleton className="w-20 h-8 rounded-lg" />
          <Skeleton className="w-20 h-8 rounded-lg" />
          <Skeleton className="w-20 h-8 rounded-lg" />
        </div>
        <Skeleton className="w-full lg:max-w-[80%] h-20 rounded-lg" />
      </div>
    );
  }

  return (
    <>
      <ContractBriefDetailsDates data={contractBriefDetailsData} />
      <ContractDetailsAccordion data={contractBriefDetailsData} />
    </>
  );
};

export default ContractBriefDetails;
