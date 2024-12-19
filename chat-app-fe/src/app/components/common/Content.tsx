'use client';

import { twMerge } from 'tailwind-merge';
import { ContentBottom } from './ContentBottom';
import { ContentCenter } from './ContentCenter';
import { ContentHead } from './ContentHead';
import { useCommonStore } from '@/store/common-store';

interface ContentProps {}

export function Content(props: ContentProps) {
  const { params } = useCommonStore();

  return (
    <div
      className={twMerge(
        'flex-1 min-h-full flex flex-col max-lg:translate-x-full max-lg:overflow-x-hidden transition-all max-lg:z-10 bg-white',
        params.showMessage &&
          'max-lg:translate-x-0 w-screen fixed inset-0 transition-all'
      )}
    >
      <ContentHead></ContentHead>
      <ContentCenter></ContentCenter>
      <ContentBottom></ContentBottom>
    </div>
  );
}
