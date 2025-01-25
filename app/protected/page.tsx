import CallControls from "@/components/CallControls";
import ConnectedUsersList from "@/components/ConnectedUsersList";
import Inbox from "@/components/Inbox";
import TasksList from "@/components/TasksList";
import { createClient } from "@/utils/supabase/server";
import Gradient from "/images/gradient.webp";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Editor } from "@/components/DynamicEditor";
import Navbar from "@/components/Navbar";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <section className="py-4 relative px-4">
      <div className="flex justify-between gap-6 mt-6">
        <div className="w-full">
          <div className="bg-white/4  p-2 text-white font-bold flex justify-center gap-3">
            <button className="py-2 px-4 rounded-md cursor-pointer min-w-36">
              whiteboard
            </button>
            <div className="w-0.5 h-10 bg-white/10"></div>
            <button className="py-2 px-4 bg-black/60 rounded-md cursor-pointer">
              text editor
            </button>
          </div>
          <Editor />
        </div>
        <Inbox />
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-full">
          <CallControls />
          <ConnectedUsersList />
        </div>
        <TasksList />
      </div>
    </section>
  );
}
