import React from "react";
import { ChatBottomBar } from "./chat-bottom-bar";
import { ChatTopBar } from "./chat-top-bar";
import { MessageList } from "./message-list";

export const MessageContainer = ({}) => {
  return (
    <div className='flex flex-col justify-between w-full h-full'>
      <ChatTopBar />

      <div className='w-full overflow-y-auto overflow-x-hidden h-full flex flex-col'>
        <MessageList />
        <ChatBottomBar />
      </div>
    </div>
  );
};
