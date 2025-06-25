import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RefreshCcw } from 'lucide-react';
import { useDispatch } from 'react-redux';
import {
  resetContractReportFilter,
  selectContractReportFilter,
} from '../store/contractSlice';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import ExportExcelButton from '@/components/ExportExcelButton';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { getContractsFile } from '../services/getContractsTableData';
import useResetOnUnmount from '@/hooks/useResetOnUnmount';

const onlyNumbersREGEX = /^\d*$/;

const initialFilter = {
  nid: '',
  name: '',
  contractId: '',
};

const ContractsReportTableFilter = ({ resetPagination, filterValues }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(initialFilter);
  const [debouncedQuery] = useDebounce(filter, 1000);

  const handleSetFormValues = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const validateInputNumber = (cb, event) => {
    const inputValue = event.target.value;
    if (onlyNumbersREGEX.test(inputValue)) {
      cb(event);
    }
  };

  const handleReset = () => {
    dispatch(resetContractReportFilter());
    setFilter(initialFilter);
    resetPagination();
  };

  useResetOnUnmount(() => {
    setFilter(initialFilter);
    dispatch(resetContractReportFilter());
  });

  useEffect(() => {
    resetPagination();
    dispatch(selectContractReportFilter(debouncedQuery));
  }, [debouncedQuery, dispatch, resetPagination]);

  const disabled = Object.values(filter).every((value) => !value);

  const {
    mutate: handleExportExcel,
    isPending,
    isError,
  } = useMutation({
    mutationFn: () => getContractsFile(filterValues),
    onSuccess: (res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      let filename = 'installments.xlsx'; // Default fallback name
      const contentDisposition = res.headers?.get('Content-Disposition');
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(
          /filename=["']?([^"']+)["']?/
        );
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1];
        }
      }
      link.setAttribute('download', filename);
      document.body.appendChild(link);

      link.click();
      link.remove();
    },
  });

  if (isError) {
    toast('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى', {
      type: 'error',
      theme: 'colored',
    });
  }

  return (
    <div>
      <div className="flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="flex flex-col gap-3 w-full">
          <Label className="text-sm" htmlFor="nid">
            رقم الهوية
          </Label>
          <Input
            pattern="[0-9]*"
            inputMode="numeric"
            id="nid"
            className="font-normal text-sm focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-0"
            placeholder="ادخل رقم الهوية"
            value={filter.nid}
            name="nid"
            onChange={(event) =>
              validateInputNumber(handleSetFormValues, event)
            }
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Label className="text-sm" htmlFor="name">
            اسم المستفيد
          </Label>
          <Input
            id="name"
            placeholder="ادخل اسم المستفيد"
            className="font-normal text-sm focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-0"
            value={filter.name}
            name="name"
            onChange={handleSetFormValues}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Label className="text-sm" htmlFor="contractId">
            رقم العقد
          </Label>
          <Input
            pattern="[0-9]*"
            inputMode="numeric"
            id="contractId"
            placeholder="ادخل رقم العقد"
            className="font-normal text-sm focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-0"
            value={filter.contractId}
            name="contractId"
            onChange={(event) =>
              validateInputNumber(handleSetFormValues, event)
            }
          />
        </div>
        <div className="flex justify-end items-end col-span-3 xl:col-span-2">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary border-[1.5px] hover:bg-primary-50/40"
              onClick={handleReset}
              disabled={disabled}
            >
              <div className="flex items-center gap-2 text-primary">
                <RefreshCcw />
                <span>إعادة تعيين</span>
              </div>
            </Button>
            <ExportExcelButton disabled={isPending} onClick={handleExportExcel}>
              إستخراج كملف Excel
            </ExportExcelButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractsReportTableFilter;
