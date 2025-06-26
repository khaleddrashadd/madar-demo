import TooltipInfo from '@/components/TooltipInfo';
import { cn } from '@/lib/utils';
import { FileCheck2, ShieldCheck, TriangleAlert } from 'lucide-react';

const ActiveContractsTabFilter = ({ selectedContractType, onSelectFilter }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        className={cn(
          'rounded-lg duration-300 flex-1 p-2 flex items-center gap-2 cursor-pointer bg-white border border-ivory-200',
          selectedContractType.includes(1) &&
            'bg-secondary-100 border-secondary-400'
        )}
        onClick={() => onSelectFilter(1)}
      >
        <div
          className={cn(
            'bg-secondary-100 p-2 rounded-lg text-secondary-400',
            selectedContractType.includes(1) && 'bg-secondary-400 text-white'
          )}
        >
          <ShieldCheck className="w-7 h-7" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <span className="font-semibold">2370</span>
          <div className="flex items-center gap-2 text-sm">
            <span> العقود المنتظمة</span>
            <TooltipInfo
              id="regular-contracts-tooltip"
              place="top-middle"
              delay={300}
            >
              العقود المنتظمة
            </TooltipInfo>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'flex-1 p-2 flex duration-300 items-center gap-2 cursor-pointer bg-white border border-ivory-200 rounded-lg',
          selectedContractType.includes(2) &&
            'bg-extended-150 border-extended-500'
        )}
        onClick={() => onSelectFilter(2)}
      >
        <div
          className={cn(
            'text-extended-500 bg-extended-150 p-2 rounded-lg',
            selectedContractType.includes(2) && 'bg-extended-500 text-white'
          )}
        >
          <FileCheck2 className=" w-7 h-7" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <span className="font-semibold">2370</span>
          <div className="flex items-center gap-2 text-sm">
            <span>العقود المتأخرة</span>
            <TooltipInfo
              id="regular-contracts-tooltip"
              place="top-middle"
              delay={300}
            >
              العقود المتأخرة
            </TooltipInfo>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'flex-1 p-2 duration-300 flex items-center gap-2 cursor-pointer bg-white border border-ivory-200 rounded-lg',
          selectedContractType.includes(3) && 'bg-danger-100 border-danger-300'
        )}
        onClick={() => onSelectFilter(3)}
      >
        <div
          className={cn(
            'text-danger-300 bg-[#FFEDED] p-2 rounded-lg',
            selectedContractType.includes(3) && 'bg-danger-300 text-white'
          )}
        >
          <TriangleAlert className="w-7 h-7" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <span className="font-semibold">2370</span>
          <div className="flex items-center gap-2 text-sm">
            <span>العقود المتعثرة</span>
            <TooltipInfo
              id="regular-contracts-tooltip"
              place="top-middle"
              delay={300}
            >
              العقود المتعثرة
            </TooltipInfo>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActiveContractsTabFilter;
