import React from "react";
import { ChatBottomBar } from "./chat-bottom-bar";
import { ChatTopBar } from "./chat-top-bar";
import { MessageList } from "./message-list";
import { useSelectedUser } from "../../../store/use-selected-user";

export const MessageContainer = ({}) => {
  const { setSelectedUser } = useSelectedUser();

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedUser(null);
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [setSelectedUser]);

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
