import { ComponentProps } from 'react';

interface TwoTickIconProps extends ComponentProps<'svg'> {}

export function TwoTickIcon(props: TwoTickIconProps) {
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
          d="M5.801 6.88L6.507 7.586L10.74 3.353L11.447 4.06L6.507 9L3.325 5.818L4.032 5.111L5.0945 6.1735L5.801 6.8795V6.88ZM5.802 5.466L8.278 2.9895L8.983 3.6945L6.507 6.171L5.802 5.466ZM4.3885 8.2935L3.682 9L0.5 5.818L1.207 5.111L1.9135 5.8175L1.913 5.818L4.3885 8.2935Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}