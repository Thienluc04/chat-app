import { ComponentProps } from 'react';

interface PinIconProps extends ComponentProps<'svg'> {}

export function PinIcon(props: PinIconProps) {
  return (
    <span>
      <svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M11.157 5.086L10.4495 5.793L10.096 5.4395L7.97499 7.5605L7.62149 9.3285L6.91399 10.0355L4.79299 7.914L2.31799 10.389L1.61099 9.682L4.08599 7.207L1.96449 5.086L2.67149 4.3785L4.43999 4.025L6.56099 1.904L6.20749 1.5505L6.91449 0.843L11.157 5.086Z"
          fill="black"
          fillOpacity="0.45"
        />
      </svg>
    </span>
  );
}
