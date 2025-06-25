import DefaultDialog from '@/components/partials/dialogs/DeafultDialog';
import { Label } from '@/components/ui/label';
import { Controller, useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Funnel, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { yupResolver } from '@hookform/resolvers/yup';
import { filterContractDetailsPaymentsSchema } from '../../onboarding/schema/filterContractDetailsPaymentsSchema';
const FilterContractDetailsPaymentsDialog = ({
  isOpen,
  onOpenChange,
  onSubmitFilter,
}) => {
  const {
    control,
    reset,
    formState: { isSubmitting },
    handleSubmit,
    getValues,
  } = useForm({
    resolver: yupResolver(filterContractDetailsPaymentsSchema),
    mode: 'onSubmit',
    defaultValues: {
      portfolioNumber: '',
      installmentStatus: '',
      installmentYear: '',
      installmentMonth: '',
      paymentYear: '',
      paymentMonth: '',
    },
  });
  const isAllEmpty = () => {
    const values = getValues();
    return Object.values(values).every((value) => value === '');
  };
  const onSubmit = (data) => {
    onSubmitFilter(data);
  };

  return (
    <DefaultDialog
      title="تصفية السدادات"
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-semibold text-gray-900">
            حالة القسط
          </Label>
          <Controller
            control={control}
            name="installmentStatus"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
                dir="rtl"
              >
                <SelectTrigger className="w-full border data-[state=open]:border-primary-500 ">
                  <SelectValue placeholder="اختر حالة القسط" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="11">مدفوع</SelectItem>
                  <SelectItem value="21">مدفوع جزئيا</SelectItem>
                  <SelectItem value="31">لم يتم الدفع</SelectItem>
                  <SelectItem value="31">لم يستحق</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-semibold text-gray-900">
            تاريخ القسط
          </Label>
          <div className="flex items-center gap-2">
            <Controller
              control={control}
              name="installmentYear"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  dir="rtl"
                >
                  <SelectTrigger className="w-full border data-[state=open]:border-primary-500 ">
                    <SelectValue placeholder="اختر السنة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="11">2025</SelectItem>
                    <SelectItem value="21">2024</SelectItem>
                    <SelectItem value="31">2023</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <Controller
              control={control}
              name="installmentMonth"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  dir="rtl"
                >
                  <SelectTrigger className="w-full border data-[state=open]:border-primary-500 ">
                    <SelectValue placeholder="اختر الشهر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="11">يناير</SelectItem>
                    <SelectItem value="21">فبراير</SelectItem>
                    <SelectItem value="31">مارس</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-semibold text-gray-900">
            تاريخ الدفع
          </Label>
          <div className="flex items-center gap-2">
            <Controller
              control={control}
              name="paymentYear"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  dir="rtl"
                >
                  <SelectTrigger className="w-full border data-[state=open]:border-primary-500 ">
                    <SelectValue placeholder="اختر السنة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="11">2025</SelectItem>
                    <SelectItem value="21">2024</SelectItem>
                    <SelectItem value="31">2023</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <Controller
              control={control}
              name="paymentMonth"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  dir="rtl"
                >
                  <SelectTrigger className="w-full border data-[state=open]:border-primary-500 ">
                    <SelectValue placeholder="اختر الشهر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="11">يناير</SelectItem>
                    <SelectItem value="21">فبراير</SelectItem>
                    <SelectItem value="31">مارس</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-end border-t border-ivory-200 pt-4">
        <Button
          onClick={() => reset()}
          disabled={isSubmitting || isAllEmpty()}
          type="button"
          variant="outline"
          className="border-primary-500 hover:bg-primary-50/50 text-primary-500"
        >
          <RefreshCcw />
          إعادة تعيين
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="border-primary-500 hover:bg-primary-500/90"
        >
          <Funnel />
          تصفية
        </Button>
      </div>
    </DefaultDialog>
  );
};
export default FilterContractDetailsPaymentsDialog;
