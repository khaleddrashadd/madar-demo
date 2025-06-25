import { Skeleton } from '@/components/ui/skeleton';

const TabsPickerSkeleton = () => {
  return (
    <div
      className="flex gap-2 p-4 border-b border-gray-200 shadow-custom rounded-lg bg-white"
      dir="rtl"
    >
      <Skeleton className="h-9 w-24 rounded-lg" />
      <Skeleton className="h-9 w-24 rounded-lg" />
    </div>
  );
};

export default TabsPickerSkeleton;
