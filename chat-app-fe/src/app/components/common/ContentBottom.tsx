import { AttachIcon } from '../icons';

interface ContentBottomProps {}

export function ContentBottom(props: ContentBottomProps) {
  return (
    <div className="flex items-center p-4 gap-8 border-t border-t-grayEE">
      <AttachIcon className="text-gray"></AttachIcon>
      <input
        type="text"
        className="py-2 w-full flex-1"
        placeholder="Type your message here.."
      />
      <button className="text-primary font-medium">Send message</button>
    </div>
  );
}
