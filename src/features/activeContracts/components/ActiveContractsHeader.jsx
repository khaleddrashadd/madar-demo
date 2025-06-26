import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';

const ActiveContractsHeader = () => {
  return (
    <div className="flex items-center justify-between w-full py-6">
      <h2 className="text-2xl font-semibold">العقود النشطة</h2>
      <Button className="text-white">
        <DownloadIcon className="w-6 h-6" />
        تنزيل كل العقود
      </Button>
    </div>
  );
};
export default ActiveContractsHeader;
