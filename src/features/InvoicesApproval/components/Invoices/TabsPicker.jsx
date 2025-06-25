import { useEffect } from 'react';

import {
  clearFilters,
  getTabStatus,
  setTabStatus,
  resetTabStatus,
} from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { useDispatch, useSelector } from 'react-redux';
const TabsPicker = () => {
  const dispatch = useDispatch();
  const tabStatus = useSelector(getTabStatus);

  useEffect(() => {
    return () => {
      dispatch(resetTabStatus());
    };
  }, [dispatch]);

  const setTab = (selectedTab) => {
    dispatch(setTabStatus(selectedTab.pending));
    dispatch(clearFilters());
  };

  return (
    <div
      className="flex gap-2 p-4 border-b border-gray-200 shadow-custom rounded-lg bg-white "
      dir="rtl"
    >
      <button
        onClick={() => setTab({ pending: true })}
        className={`
            relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 
           ${
             tabStatus.hasPending &&
             ' pl-7 after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-3 after:w-2 after:h-2 after:bg-red-500 after:rounded-full '
           }}
            ${
              tabStatus.pending
                ? 'bg-primary-500 text-white'
                : 'bg-white text-ivory-950 font-semibold hover:bg-gray-200 after:bg-red-500 border border-ivory-950'
            }`}
      >
        قيدالإنتظار
      </button>

      <button
        onClick={() => setTab({ pending: false })}
        className={`
            relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200
            ${
              !tabStatus.pending
                ? 'bg-primary-500 text-white after:bg-red-500'
                : 'bg-white text-ivory-950 font-semibold hover:bg-gray-200 after:bg-red-500 border border-ivory-950'
            }
          `}
      >
        تمت الموافقة
      </button>
    </div>
  );
};

export default TabsPicker;
