import InputWrapper from '@/components/InputWrapper';
import { Input } from '@/components/ui/input';
import { useDispatch } from 'react-redux';
import { setFilterData } from '../store/paymentsSlice';

const ContractNumberInput = ({ filterData }) => {
  const dispatch = useDispatch();
  const handleInputChange = (mortgageNumber) => {
    dispatch(
      setFilterData({
        ...filterData,
        mortgageNumber,
      })
    );
  };
  return (
    <InputWrapper title={'رقم العقد'}>
      <Input
        type="text"
        id="contract-number"
        placeholder="رقم العقد"
        className="w-full h-12 border border-solid border-ivory-300"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        value={filterData.mortgageNumber || ''}
      />
    </InputWrapper>
  );
};

export default ContractNumberInput;
