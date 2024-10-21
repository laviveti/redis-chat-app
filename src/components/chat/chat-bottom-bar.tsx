import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { EmojiPicker } from "./emoji-picker";

export const ChatBottomBar = () => {
  const [message, setMessage] = React.useState("");
  return (
    <div className='p-2 flex justify-between w-full items-center gap-2'>
      {!message.trim() && <ImageIcon size={20} className='cursor-pointer text-muted-foreground' />}
      <AnimatePresence>
        <motion.div
          layout
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.5 },
            layout: { type: "spring", bounce: 0.25 },
          }}
          className='w-full relative'>
          <Textarea
            autoComplete='off'
            placeholder='Aa'
            rows={1}
            className='w-full border rounded-full flex items-center h-9 resize-none overflow-hidden bg-background min-h-0'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className='absolute right-2 bottom-0.5'>
            <EmojiPicker onChange={(emoji) => setMessage(message + emoji)} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
