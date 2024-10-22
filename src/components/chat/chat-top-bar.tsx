import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Info, X } from "lucide-react";
import { useSelectedUser } from "../../../store/use-selected-user";

export const ChatTopBar = () => {
  const { selectedUser, setSelectedUser } = useSelectedUser();
  return (
    <div className='w-full h-20 flex p-4 justify-between items-center border-b'>
      <div className='flex items-center gap-2'>
        <Avatar className='flex justify-center items-center'>
          <AvatarImage
            src={selectedUser?.image || "/user-placeholder.png"}
            alt='User image'
            className='w-10 h-10 object-cover rounded-full'
          />
          <AvatarFallback>{selectedUser?.name[0]}</AvatarFallback>
        </Avatar>
        <span className='font-medium'>{selectedUser?.name}</span>
      </div>

      <div className='flex gap-2'>
        <Info className='text-muted-foreground cursor-pointer hover:text-primary' />
        <X
          className='text-muted-foreground cursor-pointer hover:text-primary'
          onClick={() => setSelectedUser(null)}
        />
      </div>
    </div>
  );
};
