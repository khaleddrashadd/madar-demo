import { X } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';

const Sidebar = ({
  open,
  onOpenChange,
  trigger,
  title,
  children,
  side = 'left',
  dir = 'ltr',
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side={side}
        dir={dir}
        className="w-[350px] h-screen] overflow-y-auto p-0"
      >
        <SheetHeader className="text-right py-4 px-6 border-b">
          <div className="flex justify-between items-center rtl:flex-row-reverse">
            <SheetTitle className="text-xl font-semibold">{title}</SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="h-5 w-5">
                <X className="h-5 w-5 text-ivory-650" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* Content Area */}
        <div className="h-[calc(100vh-80px)]">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
