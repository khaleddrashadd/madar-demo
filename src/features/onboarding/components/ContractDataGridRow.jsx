import { cn } from '@/lib/utils';

function ContractDataGridRow({
  label,
  value,
  preIcon,
  postIcon,
  labelClassName,
}) {
  return (
    <div className="flex justify-between">
      <span
        className={cn(
          'text-ivory-950 font-semibold text-sm bg-primary-50 block flex-1 p-4 border-b border-primary-100',
          labelClassName
        )}
      >
        {label}
      </span>
      <div className="flex items-center gap-[6px] flex-1 p-4 border-b border-ivory-200 text-ivory-950 font-semibold text-sm">
        {!!preIcon && <span>{preIcon}</span>}
        <div className="w-full">{value}</div>
        {!!postIcon && <span>{postIcon}</span>}
      </div>
    </div>
  );
}
export default ContractDataGridRow;
