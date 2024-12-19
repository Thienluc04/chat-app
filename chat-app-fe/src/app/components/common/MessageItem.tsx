'use client';

import chatAvatar from '@/images/chat-avatar.png';
import Image from 'next/image';
import { PinIcon, TwoTickIcon } from '../icons';
import { useCommonStore } from '@/store/common-store';

interface MessageItemProps {}

export function MessageItem(props: MessageItemProps) {
  const { setParams } = useCommonStore();

  return (
    <div
      className="flex items-center justify-between px-5 py-2 cursor-pointer"
      onClick={() =>
        setParams({
          showMessage: true,
        })
      }
    >
      <div className="flex gap-3 items-center">
        <Image
          src={chatAvatar}
          alt="chat-avatar"
          width={36}
          height={36}
        ></Image>
        <div>
          <div className="flex items-center gap-1">
            <PinIcon></PinIcon>
            <h3 className="text-sm text-black text-opacity-85">John Doe</h3>
          </div>
          <p className="text-sm text-black text-opacity-40">
            How are you doing?
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="text-xs text-black text-opacity-65">16:45</h2>
        <TwoTickIcon className="text-primary"></TwoTickIcon>
      </div>
    </div>
  );
}
