"use client";
import React from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../ui/resizable";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";
import { MessageContainer } from "./message-container";
import { User } from "@/db/dummy";

interface ChatLayoutProps {
  defaultLayout: number[] | undefined;
  users: User[];
}

export const ChatLayout: React.FC<ChatLayoutProps> = ({ defaultLayout = [320, 480], users }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='h-full items-stretch bg-background rounded-lg'
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
      }}>
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={8}
        collapsible={true}
        minSize={isMobile ? 0 : 24}
        maxSize={isMobile ? 8 : 30}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizable-panels:collapsed=true;`;
        }}
        onExpand={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=false;`;
        }}
        className={cn(isCollapsed && "min-w-[80px] transition-all duration-300 ease-in-out")}>
        <Sidebar isCollapsed={isCollapsed} users={users} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        {/* <div className='flex justify-center items-center h-full w-full px-10'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <img src='/logo.png' alt='Logo' className='w-full md:w-2/3 lg:w-1/2' />
            <p className='text-muted-foreground text-center'>Click on a chat to view the messages</p>
          </div>
        </div> */}
        <MessageContainer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
