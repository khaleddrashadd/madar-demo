import { cn } from '@/lib/utils';

const sizes = {
  xs: {
    width: 11,
    height: 12,
    padding: 'py-[4px] px-[6px]',
    margin: 'mx-[4px]',
  },
  sm: {
    width: 13,
    height: 14,
    padding: 'py-[4.667px] px-[6.667px]',
    margin: 'mx-[4px]',
  },
  base: {
    width: 15,
    height: 16,
    padding: 'py-[5.33px] px-[7.33px]',
    margin: 'mx-[6px]',
  },
  lg: {
    width: 17,
    height: 18,
    padding: 'py-[6px] px-[8px]',
    margin: 'mx-[6px]',
  },
  xl: {
    width: 27,
    height: 30,
    padding: 'py-[10px] px-[16px]',
    margin: 'mx-[8px]',
  },
};
const SaudiRiyal = ({ fill = '#121212', size = 'base', masked, className }) => {
  if (sizes[size] === undefined) {
    size = 'base';
  }

  return (
    <div
      className={cn(
        `${masked ? `rounded-full ${sizes[size].padding}` : ''} ${
          sizes[size].margin
        } grid place-items-center aspect-square`,
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={sizes[size].width}
        height={sizes[size].height}
        viewBox="0 0 27 30"
        fill="none"
      >
        <g clipPath="url(#clip0_2124_74272)">
          <path
            d="M16.8032 26.5766C16.3214 27.6387 16.0029 28.7913 15.8809 30L26.0769 27.8453C26.5587 26.7834 26.8769 25.6306 26.9992 24.4219L16.8032 26.5766Z"
            fill={fill}
          />
          <path
            d="M26.0777 21.3899C26.5595 20.328 26.878 19.1752 27 17.9665L19.0576 19.6458V16.4175L26.0775 14.9345C26.5593 13.8726 26.8777 12.7198 26.9998 11.5111L19.0574 13.189V1.57905C17.8404 2.25838 16.7595 3.16263 15.8809 4.22926V13.8604L12.7045 14.5316V0C11.4875 0.679089 10.4067 1.58358 9.52808 2.65021V15.2026L2.42081 16.704C1.939 17.7659 1.62028 18.9187 1.49803 20.1274L9.52808 18.4309V22.4964L0.922305 24.3144C0.440497 25.3763 0.122013 26.5291 0 27.7378L9.00785 25.8347C9.74113 25.6831 10.3714 25.2521 10.7811 24.659L12.4331 22.2242V22.2237C12.6046 21.9718 12.7045 21.668 12.7045 21.3409V17.7597L15.8809 17.0885V23.5451L26.0775 21.3894L26.0777 21.3899Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_2124_74272">
            <rect width="27" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default SaudiRiyal;
