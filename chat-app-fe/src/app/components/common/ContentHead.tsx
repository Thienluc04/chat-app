import Image from 'next/image';
import chatAvatar from '@/images/chat-avatar.png';
import { ChevronLeftIcon, InfoIcon, VideoIcon } from '../icons';
import { useCommonStore } from '@/store/common-store';

interface ContentHeadProps {}

export function ContentHead(props: ContentHeadProps) {
  const { setParams } = useCommonStore();

  return (
    <div className="flex items-center justify-between p-3 border-b border-b-grayEE">
      <div className="flex items-center gap-3">
        <ChevronLeftIcon
          onClick={() => setParams({ showMessage: false })}
          className="text-primary lg:hidden"
        ></ChevronLeftIcon>
        <Image src={chatAvatar} alt="avatar" width={42} height={42}></Image>
        <div>
          <h3 className="text-black mb-1 font-medium">Travis Barker</h3>
          <p className="text-sm text-primary">Online</p>
        </div>
      </div>
      <div className="flex items-center gap-6 mx-3">
        <VideoIcon className="text-primary cursor-pointer"></VideoIcon>
        <InfoIcon className="text-gray cursor-pointer"></InfoIcon>
      </div>
    </div>
  );
}
