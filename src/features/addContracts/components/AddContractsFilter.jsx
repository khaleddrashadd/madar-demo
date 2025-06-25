import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { yupResolver } from '@hookform/resolvers/yup';
import { RefreshCcw, Search } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { filterSchema } from '../schema/uploadedContractSchema';

const defaultValues = {
  NationalId: '',
  BeneficiaryName: '',
  PortfolioOriginator: '',
  PortfolioNumber: '',
  ContractStatus: '',
};

const AddContractsFilter = ({ isContractStatus = true, onFilter }) => {
  const {
    handleSubmit,
    reset,
    control,
    register,
    setValue,

    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(filterSchema),
    defaultValues,
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    const isEmpty = Object.values(data).every((value) => value === '');
    if (isSubmitting || isEmpty) return; // Prevent multiple submissions
    onFilter(data);
    // Handle the form submission logic here
  };

  const handleNationalIdChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setValue('NationalId', value);
  };

  const filterData = {
    originators: [
      { id: '1', name: 'منشئ 1' },
      { id: '2', name: 'منشئ 2' },
    ],
    portfolioNumbers: [
      { id: '1', name: 'محفظة 1' },
      { id: '2', name: 'محفظة 2' },
    ],
    contractStatuses: [
      { id: 'active', name: 'نشط' },
      { id: 'inactive', name: 'غير نشط' },
    ],
    legalOwners: [
      { id: '1', name: 'مالك 1' },
      { id: '2', name: 'مالك 2' },
    ],
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4 rounded-md"
    >
      <div className="flex flex-col gap-2">
        <Label className="text-sm font-semibold text-gray-900" htmlFor="nid">
          رقم الهوية
        </Label>
        <Input
          className="w-full focus-visible:ring-0 focus-visible:border-primary-500"
          placeholder="ادخل رقم الهوية"
          {...register('NationalId')}
          inputMode="numeric"
          onChange={handleNationalIdChange}
          id="nid"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label
          className="text-sm font-semibold text-gray-900"
          htmlFor="beneficiaryName "
        >
          اسم المستفيد
        </Label>
        <Input
          className="w-full focus-visible:ring-0 focus-visible:border-primary-500"
          placeholder="ادخل اسم المستفيد"
          id="beneficiaryName"
          {...register('BeneficiaryName')}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label
          className="text-sm font-semibold text-gray-900"
          htmlFor="PortfolioOriginator"
        >
          مالك المحفظة
        </Label>
        <Controller
          control={control}
          name="PortfolioOriginator"
          render={({ field }) => (
            <Select
              id="PortfolioOriginator"
              value={field.value}
              onValueChange={field.onChange}
              dir="rtl"
            >
              <SelectTrigger className="w-full border data-[state=open]:border-primary-500">
                <SelectValue placeholder="اختر مالك المحفظة" />
              </SelectTrigger>
              <SelectContent>
                {filterData?.legalOwners?.map((legalOwner) => (
                  <SelectItem key={legalOwner.id} value={legalOwner.id}>
                    {legalOwner.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label
          className="text-sm font-semibold text-gray-900"
          htmlFor="PortfolioOriginator"
        >
          منشئ المحفظة
        </Label>
        <Controller
          control={control}
          name="PortfolioOriginator"
          render={({ field }) => (
            <Select
              id="PortfolioOriginator"
              value={field.value}
              onValueChange={field.onChange}
              dir="rtl"
            >
              <SelectTrigger className="w-full border data-[state=open]:border-primary-500">
                <SelectValue placeholder="اختر منشئ المحفظة" />
              </SelectTrigger>
              <SelectContent>
                {filterData?.originators?.map((originator) => (
                  <SelectItem key={originator.id} value={originator.id}>
                    {originator.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label
          className="text-sm font-semibold text-gray-900"
          htmlFor="PortfolioNumber"
        >
          رقم المحفظة
        </Label>
        <Controller
          control={control}
          name="PortfolioNumber"
          render={({ field }) => (
            <Select
              id="PortfolioNumber"
              value={field.value}
              onValueChange={field.onChange}
              dir="rtl"
            >
              <SelectTrigger className="w-full border data-[state=open]:border-primary-500 ">
                <SelectValue placeholder="اختر رقم المحفظة" />
              </SelectTrigger>
              <SelectContent>
                {filterData?.portfolioNumbers?.map((portfolio) => (
                  <SelectItem key={portfolio.id} value={portfolio.id}>
                    {portfolio.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        {isContractStatus && (
          <>
            <Label
              className="text-sm font-semibold text-gray-900"
              htmlFor="ContractStatus"
            >
              حالة العقد
            </Label>
            <Controller
              control={control}
              name="ContractStatus"
              render={({ field }) => (
                <Select
                  id="ContractStatus"
                  value={field.value}
                  onValueChange={field.onChange}
                  dir="rtl"
                >
                  <SelectTrigger className="w-full border data-[state=open]:border-primary-500">
                    <SelectValue placeholder="اختر حالة العقد" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterData?.contractStatuses?.map((status) => (
                      <SelectItem key={status.id} value={status.id}>
                        {status.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </>
        )}
      </div>

      <div className="flex items-end justify-end gap-3 md:col-span-2">
        <Button
          type="button"
          onClick={() => {
            reset();
            setValue('NationalId', '');
            setValue('BeneficiaryName', '');
            onFilter(defaultValues);
          }}
          disabled={isSubmitting}
          variant="outline"
          className="border-primary-500 hover:bg-primary-50/50 text-primary-500"
        >
          <RefreshCcw />
          إعادة تعيين
        </Button>
        <Button
          disabled={isSubmitting}
          className="border-primary-500 hover:bg-primary-500/90"
        >
          <Search />
          بحث
        </Button>
      </div>
    </form>
  );
};
export default AddContractsFilter;
