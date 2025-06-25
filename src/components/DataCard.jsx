import { cn } from '@/lib/utils';
import SaudiRiyal from './SaudiRiyal';
import TooltipInfo from './TooltipInfo';

const DataCard = ({
  variant = 'default',
  children,
  wrapperClass,
  title,
  subtitle,
  hasTooltip,
  tooltipId,
  tooltipText,
}) => {
  const dataCardVariants = {
    default: {
      bgColor: 'bg-secondary-400/10',
      textColor: 'text-secondary-400',
      borderColor: 'border-secondary-400/60',
      color: '#00A98F',
    },
    warn: {
      bgColor: 'bg-extended-300/10',
      textColor: 'text-extended-300',
      borderColor: 'border-extended-300/60',
      color: '#FFAE4C',
    },
    danger: {
      bgColor: 'bg-danger-200/10',
      textColor: 'text-danger-200',
      borderColor: 'border-danger-200/60',
      color: '#D60000',
    },
  };
  return (
    <div
      className={cn(
        `flex items-center gap-3 py-2 px-3 border ${dataCardVariants[variant].borderColor} rounded-md ${dataCardVariants[variant].bgColor}`,
        wrapperClass
      )}
    >
      {children}
      <div className="flex flex-col">
        <div className="flex items-center">
          <h3
            className={`font-bold text-sm 3xl:text-base ${dataCardVariants[variant].textColor}`}
          >
            {title}
          </h3>
          <SaudiRiyal size="lg" fill={`${dataCardVariants[variant].color}`} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-ivory-900 text-sm 3xl:text-base">
            {subtitle}
          </span>
          {hasTooltip && (
            <div>
              <TooltipInfo id={tooltipId} place="top-middle" delay={300}>
                {tooltipText}
              </TooltipInfo>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataCard;
