'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export default function Home() {

  const [message, setMessage] = useState("")

  const handleChange = (e: { target: { value: any; }; }) => {
    setMessage(e.target.value)
  }

  const handleClick = async () => {
    console.log(message)
  }

  return (
    <div className="grid place-items-center">
      <Label className="mt-4">背景と目的</Label>
      <div className="w-1/2 mt-4">
        <Textarea placeholder="Type your message here." onChange={handleChange} />
      </div>
      <div>
        <Button className="mt-4" onClick={handleClick}>
          生成
        </Button>
      </div>
      <div className="w-1/2 mt-4">
        <Textarea defaultValue={message} />
      </div>
    </div>
  );
}
