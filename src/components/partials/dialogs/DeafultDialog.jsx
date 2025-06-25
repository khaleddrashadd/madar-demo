import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const DefaultDialog = ({
  title,
  open,
  onOpenChange,
  children,
  contentProps = {},
  className = '',
  dir = 'rtl',
  scrollable = false,
  headerless = false,
  closeable = true,
  ...props
}) => {
  // Split children into content and footer if children is an array
  const [contentComponent, footerComponent] = React.Children.toArray(children);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={className}
        dir={dir}
        closeable={closeable}
        {...props}
      >
        <DialogHeader
          className={`text-right border-b border-r-ivory-300 py-4 px-6 ${
            headerless ? 'sr-only' : ''
          }`}
        >
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {/* Content Component */}
        <div
          className={cn(
            'px-4 pb-4',
            scrollable ? 'max-h-[60vh] overflow-y-auto' : ''
          )}
          {...contentProps}
        >
          {contentComponent}
        </div>

        {/* Footer Component */}
        {footerComponent && <div className="py-4 px-6">{footerComponent}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default DefaultDialog;
