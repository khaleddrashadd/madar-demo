import { useQuery } from '@tanstack/react-query';
import { formatNullableForQuery } from '../utils/formatNullableForQuery';
import getContractBasicDetails from '../services/getContractBasicDetails';
import getContractBeneficiaryDetails from '../services/getContractBeneficiaryDetails';
import getContractFinancialDetails from '../services/getContractfinancialDetails';
import getContractPropertyDetails from '../services/getContractPropertyDetails';

const useQueryContractDetails = (contractId) => {
  const { data: basicDetails, isLoading: isBasicDetailsLoading } = useQuery({
    queryKey: ['contract', 'basic-data', contractId],
    queryFn: () => getContractBasicDetails(contractId),
    select: formatNullableForQuery,
  });
  const { data: beneficiaryDetails, isLoading: isBeneficiaryDetailsLoading } =
    useQuery({
      queryKey: ['contract', 'beneficiary-data', contractId],
      queryFn: () => getContractBeneficiaryDetails(contractId),
      select: formatNullableForQuery,
    });
  const { data: financeDetails, isLoading: isFinanceDetailsLoading } = useQuery(
    {
      queryKey: ['contract', 'finance-data', contractId],
      queryFn: () => getContractFinancialDetails(contractId),
      select: formatNullableForQuery,
    }
  );
  const { data: propertyDetails, isLoading: isPropertyDetailsLoading } =
    useQuery({
      queryKey: ['contract', 'property-data', contractId],
      queryFn: () => getContractPropertyDetails(contractId),
      select: formatNullableForQuery,
    });
  return {
    basicDetails,
    isBasicDetailsLoading,
    beneficiaryDetails,
    isBeneficiaryDetailsLoading,
    financeDetails,
    isFinanceDetailsLoading,
    propertyDetails,
    isPropertyDetailsLoading,
  };
};
export default useQueryContractDetails;
