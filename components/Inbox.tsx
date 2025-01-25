import { sendMessage } from "@/app/actions";
import Message from "./Message";
import { createClient } from "@/utils/supabase/server";
import Messages from "./Messages";
// import { Send } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Inbox = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: messages } = await supabase.from("messages").select();

  const sendMessageWithEmail = sendMessage.bind(null, user?.email as string);

  return (
    <div className="rounded-xl bg-white/2 max-w-96 min-w-96 p-4 bg-gray-100/5">
      <Tabs defaultValue="others">
        <TabsList className="mx-auto w-fit block">
          <TabsTrigger value="AI">Ask the AI</TabsTrigger>
          <TabsTrigger value="others">Chat with others</TabsTrigger>
        </TabsList>
        <TabsContent value="AI">Make changes to your account here.</TabsContent>
        <TabsContent value="others">
          {/* messsages */}
          <div>
            <Messages
              initialMessages={messages ?? []}
              loggedInUserEmail={user?.email!}
            />
          </div>

          <div className="pt-2 flex items-center bg-white/5 p-2 rounded-md mt-3 gap-2 m-auto">
            <form
              action={sendMessageWithEmail}
              className="flex justify-between w-full"
            >
              <input
                type="text"
                placeholder="write your message..."
                name="content"
                className="bg-white/5 border-none outline-none text-white rounded-full px-3 py-1 text-md w-full"
              />

              <div className="py-1 px-2 rounded-sm  cursor-pointer bg-white/2">
                {/* <Send size={20} color="#fff" /> */}
                <button type="submit">
                  <p className="font-bold text-purple-600">send</p>
                </button>
              </div>
            </form>
          </div>
        </TabsContent>
      </Tabs>
      {/* 
      <div className="bg-white/4 rounded-md p-2 text-white font-bold flex justify-center gap-3">
        <button className="py-2 px-4 rounded-md cursor-pointer min-w-36">
          Ask the AI
        </button>
        <div className="w-0.5 h-10 bg-white/10"></div>
        <button className="py-2 px-4 bg-black/60 rounded-md cursor-pointer">
          Chat with Others
        </button>
      </div> */}
    </div>
  );
};

export default Inbox;
