import { ComponentProps } from 'react';

interface TickIconProps extends ComponentProps<'svg'> {}

export function TickIcon(props: TickIconProps) {
  return (
    <span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M5 7.586L9.596 2.9895L10.3035 3.6965L5 9L1.818 5.818L2.525 5.111L5 7.586Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
