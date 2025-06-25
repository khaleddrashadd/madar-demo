import { Card } from '@/components/card';
import { Skeleton } from '@/components/ui/skeleton';

const UploadContractsSkeleton = () => {
  return (
    <>
      <Card className="p-4 bg-white rounded-lg mt-5 shadow-none  h-[110px]">
        <div className="animate-pulse h-full">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
      </Card>
      <Card className="p-4 bg-white rounded-lg mt-5 shadow-none">
        <div className="animate-pulse h-[442px]">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
      </Card>
    </>
  );
};
export default UploadContractsSkeleton;
