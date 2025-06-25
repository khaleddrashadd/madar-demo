import { Skeleton } from '@/components/ui/skeleton';

const InstallmentFilterSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 grid-rows-[repeat(3,max-content)] row-start-2 md:row-start-1">
      <div className="flex flex-col gap-4">
        {/* Portfolio Filter Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>

        {/* Contract Number Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>

        {/* From Date Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* National Number Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>

        {/* Beneficiary Name Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>

        {/* To Date Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>

      {/* Reset Button Skeleton */}
      <Skeleton className="h-10 w-32 mt-2" />
    </div>
  );
};

export default InstallmentFilterSkeleton;
