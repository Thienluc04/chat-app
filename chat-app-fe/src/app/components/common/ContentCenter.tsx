import Image from 'next/image';
import avatar from '@/images/chat-avatar.png';

interface ContentCenterProps {}

export function ContentCenter(props: ContentCenterProps) {
  return (
    <div className="flex-1 px-5 py-3 max-h-[calc(100vh-137px)] overflow-auto flex flex-col gap-4">
      <div className="flex items-center mb-5">
        <div className="flex-1 w-full h-[1px] bg-grayEE"></div>
        <p className="text-sm text-gray mx-6">Today</p>
        <div className="flex-1 w-full h-[1px] bg-grayEE"></div>
      </div>
      {new Array(10).fill(0).map((_, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div>
              <Image src={avatar} alt="avatar" width={30} height={30}></Image>
            </div>
            <div className="py-3 px-4 rounded-xl bg-grayF7">
              <p className="text-black text-sm mb-1">
                Hello! Have you seen my backpack anywhere in office?
              </p>
              <p className="text-xs text-gray font-light">15:42</p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div>
              <Image src={avatar} alt="avatar" width={30} height={30}></Image>
            </div>
            <div className="py-3 px-4 rounded-xl bg-grayF7">
              <p className="text-black text-sm mb-1">
                Hello! Have you seen my backpack anywhere in office?
              </p>
              <p className="text-xs text-gray font-light">15:42</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
