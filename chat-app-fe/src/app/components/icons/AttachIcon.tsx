import { ComponentProps } from 'react';

interface AttachIconProps extends ComponentProps<'svg'> {}

export function AttachIcon(props: AttachIconProps) {
  return (
    <span>
      <svg
        width={14}
        height={16}
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M0.903255 7.526C0.778742 7.40148 0.708793 7.23259 0.708793 7.0565C0.708793 6.8804 0.778742 6.71152 0.903255 6.587L5.59725 1.896C6.02652 1.45571 6.53893 1.10503 7.10477 0.864307C7.67061 0.623585 8.27862 0.497609 8.89352 0.493686C9.50843 0.489763 10.118 0.607972 10.6869 0.841456C11.2557 1.07494 11.7726 1.41905 12.2074 1.85383C12.6423 2.28861 12.9865 2.8054 13.22 3.37423C13.4536 3.94306 13.5719 4.55261 13.5681 5.16752C13.5642 5.78242 13.4384 6.39045 13.1977 6.95633C12.9571 7.5222 12.6065 8.03467 12.1663 8.464L6.06626 14.564C5.44131 15.1734 4.60142 15.512 3.72857 15.5064C2.85572 15.5008 2.02024 15.1514 1.40316 14.5341C0.786086 13.9168 0.437126 13.0811 0.431902 12.2083C0.426678 11.3354 0.765611 10.4957 1.37525 9.871L6.53625 4.71C6.91118 4.34401 7.41527 4.14057 7.9392 4.14378C8.46314 4.14699 8.96469 4.35659 9.33511 4.72714C9.70553 5.09769 9.91495 5.59932 9.91797 6.12325C9.921 6.64719 9.71737 7.1512 9.35125 7.526L5.59725 11.279C5.47287 11.4034 5.30416 11.4733 5.12825 11.4733C4.95235 11.4733 4.78364 11.4034 4.65926 11.279C4.53487 11.1546 4.46499 10.9859 4.46499 10.81C4.46499 10.6341 4.53487 10.4654 4.65926 10.341L8.41225 6.587C8.47384 6.52541 8.5227 6.45229 8.55603 6.37182C8.58936 6.29135 8.60652 6.2051 8.60652 6.118C8.60652 6.0309 8.58936 5.94465 8.55603 5.86418C8.5227 5.78371 8.47384 5.71059 8.41225 5.649C8.35067 5.58741 8.27755 5.53855 8.19708 5.50522C8.1166 5.47189 8.03036 5.45473 7.94325 5.45473C7.85615 5.45473 7.76991 5.47189 7.68943 5.50522C7.60896 5.53855 7.53584 5.58741 7.47426 5.649L2.31325 10.81C1.93996 11.1833 1.73025 11.6896 1.73025 12.2175C1.73025 12.4789 1.78174 12.7377 1.88177 12.9792C1.9818 13.2207 2.12842 13.4402 2.31325 13.625C2.49809 13.8098 2.71752 13.9565 2.95902 14.0565C3.20052 14.1565 3.45936 14.208 3.72076 14.208C4.24867 14.208 4.75496 13.9983 5.12825 13.625L11.2283 7.525C11.5485 7.2197 11.8044 6.85343 11.981 6.44774C12.1576 6.04206 12.2513 5.60516 12.2565 5.16274C12.2617 4.72032 12.1784 4.28132 12.0115 3.87157C11.8445 3.46183 11.5973 3.08961 11.2844 2.77681C10.9715 2.46402 10.5992 2.21697 10.1893 2.05021C9.77953 1.88344 9.3405 1.80032 8.89808 1.80574C8.45566 1.81116 8.0188 1.90502 7.61319 2.08178C7.20758 2.25854 6.84142 2.51463 6.53625 2.835L1.84425 7.526C1.71977 7.65021 1.5511 7.71996 1.37525 7.71996C1.19941 7.71996 1.03074 7.65021 0.906255 7.526"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
