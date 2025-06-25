import { Check } from 'lucide-react';

export default function LogTimeline({ data }) {
  return (
    <div
      className="flex flex-col items-end w-full mx-auto rounded-lg"
      dir="rtl"
    >
      <div className="w-full">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="flex relative items-center gap-2 before:absolute before:rtl:right-[9px] before:ltr:left-[9px] before:top-[10px] before:w-0.5 before:h-full before:[&:not(:last-child)]:bg-secondary-400 [&:not(:last-child)]:pb-5"
          >
            <div className="relative flex flex-col items-center ">
              <div className="flex items-center justify-center w-5 h-5 bg-secondary-400 rounded-full">
                <Check className="text-ivory-50 w-4 h-4" />
              </div>
              {/* <div className="w-0.5 h-5 bg-secondary-400" /> */}
            </div>
            <div className="flex-grow pt-0.5 last:pb-0 text-right">
              <div className="text-sm font-normal text-ivory-850">
                {item.action}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
