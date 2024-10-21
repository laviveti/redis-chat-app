"use client";
import React from "react";
import { SmileIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useTheme } from "next-themes";

interface EmojiPickerProps {
  onChange: (emoki: string) => void;
}

export const EmojiPicker: React.FC<EmojiPickerProps> = ({ onChange }) => {
  const { theme } = useTheme();
  return (
    <Popover>
      <PopoverTrigger>
        <SmileIcon className='size-5 text-muted-foreground hover:text-foreground transition' />
      </PopoverTrigger>
      <PopoverContent className='overflow-auto w-fit'>
        <Picker
          emojiSize={18}
          data={data}
          maxFrequentRows={1}
          theme={theme === "dark" ? "dark" : "light"}
          onEmojiSelect={(emoji: { native: string }) => onChange(emoji.native)}
        />
      </PopoverContent>
    </Popover>
  );
};
