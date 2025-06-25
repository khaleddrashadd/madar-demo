import { Info } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';

const AlertComponent = () => {
  return (
    <Alert className="flex rtl:flex-row-reverse gap-2 rounded-sm shadow-sm p-2 border border-primary-150 bg-primary-250 rtl:text-right">
      <Info
        className=" !static stroke-primary flex-shrink-0"
        width={'22px'}
        height={'22px'}
      />
      <AlertDescription className="text-sm font-medium leading-relaxed h-max pl-0 text-[13px]">
        إضافتك لتعليق واضح حول مشكلتك يساعد فريق إدارة العمليات في حل المشكلة
        أسرع
      </AlertDescription>
    </Alert>
  );
};

export default AlertComponent;
