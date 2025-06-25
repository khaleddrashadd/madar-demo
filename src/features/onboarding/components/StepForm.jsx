import { Label } from '@/components/ui/label';
import {
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
  Select,
} from '@/components/ui/select';
import { useState } from 'react';

const StepForm = () => {
  const [field, setField] = useState('');
  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-6">
      <div className="flex flex-col gap-2 w-1/2">
        <Label className="text-sm font-semibold text-gray-900">
          مالك المحفظة
        </Label>
        <Select dir="rtl">
          <SelectTrigger className="w-full border data-[state=open]:border-primary-500 ">
            <SelectValue placeholder="اختر مالك المحفظة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="11">a</SelectItem>
            <SelectItem value="21">b</SelectItem>
            <SelectItem value="31">c</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <Label className="text-sm font-semibold text-gray-900">
          منشئ المحفظة
        </Label>
        <Select value={field} onValueChange={(val) => setField(val)} dir="rtl">
          <SelectTrigger className="w-full border data-[state=open]:border-primary-500 ">
            <SelectValue placeholder="اختر منشئ المحفظة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="11">a</SelectItem>
            <SelectItem value="21">b</SelectItem>
            <SelectItem value="31">c</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <Label className="text-sm font-semibold text-gray-900">
          رقم المحفظة
        </Label>
        <Select value={field} onValueChange={(val) => setField(val)} dir="rtl">
          <SelectTrigger className="w-full border data-[state=open]:border-primary-500 ">
            <SelectValue placeholder="اختر رقم المحفظة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="11">a</SelectItem>
            <SelectItem value="21">b</SelectItem>
            <SelectItem value="31">c</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
export default StepForm;
