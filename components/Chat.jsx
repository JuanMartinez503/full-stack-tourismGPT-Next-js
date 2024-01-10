"use client";

import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong...");
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: "user", content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };
  console.log(messages);
  return (
    <div className=" min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto] ">
      <div>
        {messages.map(({ role, content }, index) => {
          const avatar = role === "user" ? "👤" : "🤖";
          const bcg = role === "user" ? "bg-base-200 " : "bg-base-100";
          return (
            <div
              className={`${bcg} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}
              key={index}
            >
              <span className="mr-4">{avatar}</span>
              <p className="max-w-3xl">{isPending? 
              (
                <span className=" loading"></span>
              ):(
                <p>{content}</p>
              )}</p>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className=" max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            className="input join-item w-full input-bordered"
            required
            placeholder="Ask Question to AI"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-primary join-item"
            disabled={isPending}
            type="submit"
          >
            {isPending ? "Please Wait" : "Ask Question"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
