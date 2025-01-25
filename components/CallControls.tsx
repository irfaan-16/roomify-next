import end from "/end.png";
import mic from "/mic.png";
import capture from "/capture.png";
import Image from "next/image";
const CallControls = () => {
  return (
    <div className="flex w-full justify-evenly max-w-xl m-auto">
      <div className="flex items-center gap-2 font-bold text-lg text-white w-fit bg-white/3 py-1 pl-1 pr-4 rounded-full cursor-pointer">
        <div className="bg-black  rounded-full p-1">
          <Image
            src="/images/mic.png"
            className="size-9"
            alt="mic image"
            height={8}
            width={8}
          />
        </div>
        <p>mic</p>
      </div>
      <div className="flex items-center gap-2 font-bold text-lg text-white w-fit bg-white/3 py-1 pl-1 pr-4 rounded-full cursor-pointer">
        <div className="bg-black  rounded-full p-1">
          <Image
            alt="capture image"
            src="/images/capture.png"
            className="size-9"
            height={8}
            width={8}
          />
        </div>
        <p>capture</p>
      </div>
      <div className="flex items-center gap-2 font-bold text-lg text-white w-fit bg-white/3 py-1 pl-1 pr-4 rounded-full cursor-pointer">
        <div className="bg-black  rounded-full p-1">
          <Image
            alt="call end image"
            src="/images/end.png"
            className="size-9"
            height={8}
            width={8}
          />
        </div>
        <p>end</p>
      </div>
    </div>
  );
};

export default CallControls;
