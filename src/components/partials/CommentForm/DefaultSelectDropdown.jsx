import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
const DefaultSelectDropdown = ({
  title,
  options,
  onChange,
  error,
  required,
  isSelected,
  id = 'id',
  label,
  value,
  isPending,
}) => {
  return (
    <div className="space-y-3">
      <Label
        htmlFor="reportType"
        className="text-right block text-sm text-ivory-900"
      >
        {title} {required && <span className="text-red-500">*</span>}
      </Label>
      <Select onValueChange={onChange} dir="rtl" disabled={isPending}>
        <SelectTrigger
          id="reportType"
          className={cn(
            'w-full text-right py-6 px-3 border border-ivory-300 rounded-sm ',
            !!error && 'border-red-500',
            isSelected ? 'text-ivory-900' : 'text-ivory-660'
          )}
        >
          <SelectValue placeholder="اختر التقرير" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectItem
              key={option[id]}
              value={option[value]}
              className="focus:bg-primary-50 hover:bg-primary-50 data-[state=checked]:bg-primary-100"
            >
              {option[label]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default DefaultSelectDropdown;
