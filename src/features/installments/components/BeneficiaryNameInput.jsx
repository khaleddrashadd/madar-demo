import InputWrapper from '@/components/InputWrapper';
import { Input } from '@/components/ui/input';
import { setFilterData } from '../store/paymentsSlice';
import { useDispatch } from 'react-redux';

const BeneficiaryNameInput = ({ filterData }) => {
  const dispatch = useDispatch();
  const handleInputChange = (value) => {
    dispatch(
      setFilterData({
        ...filterData,
        beneficiaryName: value,
      })
    );
  };
  return (
    <InputWrapper title={'اسم المستفيد'}>
      <Input
        type="text"
        id="beneficiary-name"
        placeholder="اسم المستفيد"
        className="w-full h-12 border border-solid border-ivory-300"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        value={filterData.beneficiaryName || ''}
      />
    </InputWrapper>
  );
};

export default BeneficiaryNameInput;
