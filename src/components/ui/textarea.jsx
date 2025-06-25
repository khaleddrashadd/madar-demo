import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border outline-none bg-white px-3 py-2 text-base  placeholder:text-neutral-500  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
