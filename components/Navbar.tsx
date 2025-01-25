import { LogIn, Users, Clock, Link } from "lucide-react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { signOutAction } from "@/app/actions";
import { Button } from "./ui/button";

const Navbar = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex md:gap-14 items-center max-w-64 justify-between m-auto bg-black/20 text-white py-2 px-4 rounded-2xl shadow-2xl shadow-white/3 md:max-w-fit ">
      {user && (
        <div className="flex gap-3">
          <div className="flex bg-black/30 p-2 rounded-md items-center gap-2 font-bold max-h-10">
            <Users size={22} />
            <p>joined</p>

            <span className="bg-black/50 py-1 px-3 rounded-full text-sm">
              5
            </span>
          </div>

          <div className="flex bg-black/30 p-2 rounded-md items-center gap-2 font-bold max-h-10">
            <Clock size={22} />
            <p>01:32:55</p>
          </div>
        </div>
      )}

      <h3 className="font-bold cursor-pointer md:text-xl">roomify</h3>
      {user ? (
        <div className="flex items-center gap-3">
          <div className="flex bg-black/30 p-2 rounded-md items-center gap-2 font-bold max-h-10 cursor-pointer">
            <Link size={22} />
            <p className="whitespace-nowrap">share link</p>
          </div>
          <div className="rounded-full bg-gradient-to-b from-pink to-purple-600 flex items-center py-1 px-2 gap-2 max-h-10 justify-between pl-4">
            <p className="font-bold">{user.email}</p>
            <Image
              src="/images/avatar.jpg"
              className="h-8 rounded-full"
              alt="user avatar"
              height={30}
              width={30}
            />
          </div>
          <form action={signOutAction}>
            <Button type="submit" variant={"outline"}>
              Sign out
            </Button>
          </form>
        </div>
      ) : (
        <button className=" w-24 bg-purple-700 rounded-md p-2 text-white font-bold cursor-pointer px-3 py-[5px]">
          <Link className="flex items-center gap-2" href="/sign-in">
            <LogIn size={20} />
          </Link>
          login
        </button>
      )}
    </div>
  );
};

export default Navbar;
