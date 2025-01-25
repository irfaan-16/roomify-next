"use client";
interface Message {
  id: number;
  content: string;
  avatar: string;
  sender_email: string;
  timestamp: string;
}

import { createClient } from "@/utils/supabase/server";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import supabase from "@/utils/supabase";

const Messages = ({
  initialMessages,
  loggedInUserEmail,
}: {
  initialMessages: Message[];
  loggedInUserEmail: string;
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const channel = supabase
      .channel("realtime messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message]);
          console.log({ payload });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);
  // Scroll to bottom whenever messages are updated

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col gap-2 mt-4 max-h-96 overflow-y-scroll pr-4">
      {messages?.map((message) => {
        return (
          <Message
            key={message.id}
            message={message.content}
            avatar={message.avatar}
            isSender={message.sender_email === loggedInUserEmail}
          />
        );
      })}
      {/* A hidden div at the end to scroll into view */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
