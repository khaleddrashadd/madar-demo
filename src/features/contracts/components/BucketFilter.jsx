import { useDispatch, useSelector } from 'react-redux';
import {
  getSelectedBuckets,
  resetSelectedBuckets,
  selectBuckets,
} from '../store/contractSlice';
import MultiSelect from './MultiSelect';
import { BUCKETS } from '@/constants/contracts';
import useResetOnUnmount from '@/hooks/useResetOnUnmount';

const BucketFilter = ({ resetPagination }) => {
  const dispatch = useDispatch();
  const selectedBuckets = useSelector(getSelectedBuckets);
  useResetOnUnmount(() => dispatch(resetSelectedBuckets()));

  return (
    <div className="flex items-center gap-4 flex-col md:flex-row">
      <MultiSelect
        className="w-40"
        labelKey="label"
        options={BUCKETS}
        selectAllLabel="All"
        defaultValue={selectedBuckets}
        onChange={(value) => {
          dispatch(selectBuckets(value));
          resetPagination();
        }}
      />
    </div>
  );
};

export default BucketFilter;
