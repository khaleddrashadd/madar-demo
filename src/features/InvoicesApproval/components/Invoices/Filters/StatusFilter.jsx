import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

import RadioOptions from './RadioOptions';
import DefaultDialog from '@/components/partials/dialogs/DeafultDialog';

import { useDispatch, useSelector } from 'react-redux';
import {
  setFilterData,
  getFilterData,
} from '@/features/InvoicesApproval/store/invoicesApprovalSlice';

const StatusFilter = ({ title }) => {
  const filterOptions = [
    { value: '', label: 'الكل' },
    { value: 1, label: 'قيد الأنتظار' },
    { value: 2, label: 'مرتجع' },
  ];

  // STATE
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  //REDUX STATE
  const dispatch = useDispatch();
  const filterState = useSelector(getFilterData);

  // HANDLE DIALOG ACTIONS

  const onDialogOpen = (state) => {
    setDialogOpen(state);
    // SET THE SELECTED OPTION ON DIALOG OPEN
    setSelectedValue(filterState.filterStatus);
  };

  const handleSubmit = () => {
    dispatch(
      setFilterData({
        ...filterState,
        filterStatus: selectedValue,
      })
    );
    setDialogOpen(false);
  };

  const handleCancel = () => {
    const filterStateBool = !!filterState.filterStatus;
    if (!filterStateBool) setSelectedValue('');
    setDialogOpen(false);
  };

  const isBtnDisabled = () => {
    const filterStateBool = !!filterState.filterStatus;
    const selectedValueBool = !!selectedValue;

    //CAN'T SUBMIT 'ALL' OPTIONS IF THERE'S WAS NO PREVIOUS QUERY || NO SELECTED VALUE
    if (!filterStateBool && !selectedValueBool) return true;
    else if (!selectedValueBool && filterStateBool) return false;
    else if (!selectedValueBool) return true;
  };

  return (
    <div className="grid grid-cols-[1fr,max-content] items-center justify-center gap-4">
      <span>{title}</span>
      <Button
        variant="ghost"
        className="h-8 w-8 p-1 text-ivory-650"
        onClick={() => setDialogOpen(true)}
      >
        <Filter className="h-4 w-4 fill-ivory-650" />
      </Button>

      <DefaultDialog
        title="تصفية الحالة"
        open={dialogOpen}
        onOpenChange={onDialogOpen}
      >
        {/* Content Component */}
        <RadioOptions
          options={filterOptions}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          direction="rtl"
          optionClassName="flex items-center gap-2 py-2"
          labelClassName="text-[14px] font-semibold leading-relaxed"
        />

        {/* Footer Component */}
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="secondary"
            className="py-4 px-9 border-ivory-600 text-ivory-950"
            onClick={handleCancel}
          >
            إلغاء
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="py-4 px-9"
            disabled={isBtnDisabled()}
          >
            <Filter className="h-5 w-5 " />
            تصفية
          </Button>
        </div>
      </DefaultDialog>
    </div>
  );
};

export default StatusFilter;
