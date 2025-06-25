import { cn } from '@/lib/utils';

const variantStyles = {
  success:
    'bg-green-100 text-green-800 border border-green-500 hover:bg-green-200',
  warning:
    'bg-extended-250 text-ivory-950 border border-extended-750 px-4 py-1 rounded-full font-medium hover:bg-extended-250',
  danger: 'bg-red-100 text-red-800 border border-red-500 hover:bg-red-200',
  basic: 'bg-ivory-60 border border-ivory-660 text-ivory-950',
};

export default function CustomBadge({
  variant = 'success',
  title,
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        'px-4 py-1 rounded-full font-medium inline-flex items-center justify-center text-sm cursor-default',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {title}
    </span>
  );
}
