"use client"

import { cn } from "@/lib/utils"
import { Bot, User, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Message } from "@/components/chat-interface"

interface MessageBubbleProps {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user"
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className={cn("flex gap-3 group", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Bot className="h-4 w-4 text-primary-foreground" />
        </div>
      )}

      <div className="flex flex-col gap-1 max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm leading-relaxed relative",
            isUser
              ? "bg-primary text-primary-foreground rounded-br-md"
              : "bg-muted text-muted-foreground rounded-bl-md",
          )}
        >
          <p className="whitespace-pre-wrap text-pretty">{message.content}</p>

          {!isUser && (
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            </Button>
          )}
        </div>

        <div className={cn("text-xs px-2 text-muted-foreground", isUser ? "text-right" : "text-left")}>
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-secondary-foreground" />
        </div>
      )}
    </div>
  )
}
