import { Info } from 'lucide-react';
import { Tooltip } from 'react-tooltip';

const TooltipInfo = ({ children, id, delay, ...props }) => {
  return (
    <div className="flex items-center">
      <Info
        className="cursor-pointer text-ivory-700 focus:outline-none md:w-5 md:h-5 w-4 h-4 z-10"
        size={16}
        strokeWidth={1.5}
        data-tooltip-id={id}
        data-tooltip-delay-show={delay}
      />
      <Tooltip
        id={id}
        className="responsive-tooltip z-10"
        style={{
          backgroundColor: '#3e3e3e',
          fontSize: '14px',
          fontWeight: 400,
          maxWidth: '300px',
          '@media (maxWidth: 1200px)': {
            fontSize: '10px',
            maxWidth: '300px',
          },
        }}
        {...props}
      >
        <div
          className="text-sm sm:text-base"
          style={{
            lineHeight: '1.4',
            maxWidth: '100%',
          }}
        >
          {children}
        </div>
      </Tooltip>
    </div>
  );
};

export default TooltipInfo;
