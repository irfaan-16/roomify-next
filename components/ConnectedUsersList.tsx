import Image from "next/image";

const ConnectedUsersList = () => {
  return (
    <div className="flex justify-around mt-10 w-full">
      <div className="flex gap-3 items-center justify-between  rounded-2xl bg-white/3 p-3">
        <div className="">
          <Image
            alt="avatar image"
            src="/images/avatar.jpg"
            className="size-10 rounded-full"
            height={10}
            width={10}
          />
        </div>
        <div className="text-white">
          <h1 className="text-lg">John Doe</h1>
          <p className="text-xs">johndoe@gmail.com</p>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-between rounded-2xl bg-white/3 p-3">
        <div className="">
          <Image
            alt="avatar image"
            src="/images/avatar.jpg"
            className="size-10 rounded-full"
            height={10}
            width={10}
          />
        </div>
        <div className="text-white">
          <h1 className="text-lg">John Doe</h1>
          <p className="text-xs">johndoe@gmail.com</p>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-between rounded-2xl bg-white/3 p-3">
        <div className="">
          <Image
            alt="avatar image"
            src="/images/avatar.jpg"
            className="size-10 rounded-full"
            height={10}
            width={10}
          />
        </div>
        <div className="text-white">
          <h1 className="text-lg">John Doe</h1>
          <p className="text-xs">johndoe@gmail.com</p>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-between rounded-2xl bg-white/3 p-3">
        <div className="">
          <Image
            alt="avatar image"
            src="/images/avatar.jpg"
            className="size-10 rounded-full"
            height={10}
            width={10}
          />
        </div>
        <div className="text-white">
          <h1 className="text-lg">John Doe</h1>
          <p className="text-xs">johndoe@gmail.com</p>
        </div>
      </div>

      <div className="flex gap-3  items-center justify-between rounded-2xl bg-white/3 p-3">
        <div className="">
          <Image
            alt="avatar image"
            src="/images/avatar.jpg"
            className="size-10 rounded-full"
            height={10}
            width={10}
          />
        </div>
        <div className="text-white">
          <h1 className="text-lg">John Doe</h1>
          <p className="text-xs">johndoe@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default ConnectedUsersList;
