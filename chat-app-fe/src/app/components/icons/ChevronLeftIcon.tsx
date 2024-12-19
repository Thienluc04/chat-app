import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ChevronLeftIconProps extends ComponentProps<'svg'> {}

export function ChevronLeftIcon({ className, ...props }: ChevronLeftIconProps) {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={twMerge('w-6 h-6', className)}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </span>
  );
}
