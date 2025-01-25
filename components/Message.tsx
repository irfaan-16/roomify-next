import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface PageProps {
  message: string;
  avatar: string;
  isSender: boolean;
}

const Message = ({ message, avatar, isSender }: PageProps) => {
  const bubbleClasses = twMerge(
    "rounded-2xl text-white text-xs flex items-center py-2 px-4",
    isSender
      ? "rounded-tr-none bg-gradient-to-l from-black to-purple-600 ml-auto"
      : "border border-purple-700 rounded-tl-none"
  );
  return (
    <div className="flex items-start gap-2">
      {!isSender && (
        <Image
          src={avatar}
          alt="user avatar"
          className="h-7 rounded-full"
          width={30}
          height={30}
        />
      )}

      <div className={bubbleClasses}>
        <p>{message}</p>
      </div>
      {isSender && (
        <Image
          src={avatar}
          alt="user avatar"
          className="h-7 rounded-full"
          width={30}
          height={30}
        />
      )}
    </div>
  );
};

export default Message;
