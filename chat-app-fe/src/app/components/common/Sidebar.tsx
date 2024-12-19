import avatarImg from '@/images/avatar.png';
import Image from 'next/image';
import {
  ChatIcon,
  ExitIcon,
  LogoIcon,
  SearchIcon,
  SettingIcon,
} from '../icons';
import { MessageItem } from './MessageItem';

interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  return (
    <div className="flex pt-7 min-h-screen border-r border-r-grayEE">
      <div className="flex flex-col justify-between content-between px-4 pb-4 max-lg:hidden">
        <div className="flex flex-col justify-center items-center">
          <LogoIcon className="mb-4 cursor-pointer"></LogoIcon>
          <Image
            src={avatarImg}
            alt="avatar"
            width={32}
            height={32}
            className="mb-6 cursor-pointer"
          ></Image>
          <div className="w-10 h-[2px] bg-slate-300 mb-4"></div>
          <div className="h-12 w-12 items-center justify-center flex bg-primary rounded-2xl cursor-pointer">
            <ChatIcon className="text-white"></ChatIcon>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-12 w-12 items-center justify-center flex cursor-pointer">
            <SettingIcon></SettingIcon>
          </div>
          <div className="h-12 w-12 items-center justify-center flex cursor-pointer">
            <ExitIcon></ExitIcon>
          </div>
        </div>
      </div>
      <div className="w-[400px] max-lg:w-screen">
        <div className="px-5 mb-5">
          <h1 className="text-2xl font-bold mb-4">Messages</h1>
          <div className="flex py-2 px-5 rounded-xl bg-grayEE gap-4 items-center ">
            <SearchIcon className="text-gray67"></SearchIcon>
            <input
              type="text"
              className="bg-transparent w-full block text-sm"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex flex-col">
          {new Array(14).fill(0).map((_, index) => (
            <MessageItem key={index}></MessageItem>
          ))}
        </div>
      </div>
    </div>
  );
}
