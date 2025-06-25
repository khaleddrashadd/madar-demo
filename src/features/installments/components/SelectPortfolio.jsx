import InputWrapper from '@/components/InputWrapper';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useDispatch } from 'react-redux';
import { setFilterData } from '../store/paymentsSlice';

const SelectPortfolio = ({ filterData, portfoliosData }) => {
  const dispatch = useDispatch();
  const handleInputChange = (portfolioId) => {
    dispatch(
      setFilterData({
        ...filterData,
        portfolioNumber: portfolioId,
      })
    );
  };
  return (
    <InputWrapper title={'المحفظة'}>
      <Select
        onValueChange={(id) => handleInputChange(id)}
        value={filterData.portfolioNumber}
        dir="rtl"
      >
        <SelectTrigger
          className="w-full h-12 bg-white border border-solid border-ivory-300 ring-offset-transparent ring-0"
          dir="rtl"
        >
          <SelectValue placeholder="المحفظة" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value={null}>الكل</SelectItem>
          {portfoliosData?.map((item) => (
            <SelectItem value={item.portfolioNumber} key={item.portfolioNumber}>
              {item.portfolioName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </InputWrapper>
  );
};

export default SelectPortfolio;
