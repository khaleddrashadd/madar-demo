import InputWrapper from '@/components/InputWrapper';
import { Input } from '@/components/ui/input';
import { setFilterData } from '../store/paymentsSlice';
import { useDispatch } from 'react-redux';

const NationalIdInput = ({ filterData }) => {
  const dispatch = useDispatch();
  const handleInputChange = (value) => {
    dispatch(
      setFilterData({
        ...filterData,
        nationalId: value,
      })
    );
  };
  return (
    <InputWrapper title={'رقم الهوية'}>
      <Input
        type="text"
        id="sadad-number"
        placeholder="رقم الهوية"
        className="w-full h-12 border border-solid border-ivory-300"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        value={filterData.nationalId || ''}
      />
    </InputWrapper>
  );
};

export default NationalIdInput;
