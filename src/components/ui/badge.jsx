import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300',
  {
    variants: {
      variant: {
        default: 'border-primary-500 bg-primary-50 text-primary-500',
        secondary:
          'border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
        destructive: 'border-[#B92026] bg-[#F8E9E9] text-ivory-950',
        outline: 'text-neutral-950 dark:text-neutral-50',
        wait: 'border border-extended-750 bg-extended-250 text-ivory-950',
        success: 'border border-secondary-400 bg-secondary-100 text-ivory-950',
        neutral: 'border border-[#858793] bg-ivory-60 text-ivory-950',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
