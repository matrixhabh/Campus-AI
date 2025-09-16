"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Loader2, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MessageBubble } from "@/components/message-bubble"
import { QuickSuggestions } from "@/components/quick-suggestions"

export interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Hello! I'm your Campus Helper AI. I can help you with class schedules, campus events, faculty contacts, library information, cafeteria menus, directions, and more. What would you like to know?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const resetConversation = () => {
    setMessages([
      {
        id: "welcome",
        content:
          "Hello! I'm your Campus Helper AI. I can help you with class schedules, campus events, faculty contacts, library information, cafeteria menus, directions, and more. What would you like to know?",
        role: "assistant",
        timestamp: new Date(),
      },
    ])
    setInput("")
  }

  const handleSendMessage = async (messageContent?: string) => {
    const content = messageContent || input.trim()
    if (!content || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
          history: messages,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 text-balance">Welcome to CampusHelper AI</h2>
        <p className="text-muted-foreground text-lg text-pretty">
          Your intelligent assistant for all campus-related questions
        </p>
      </div>

      {/* Chat Container */}
      <Card className="h-[600px] flex flex-col shadow-lg border-border/50">
        {/* Chat Header with Reset Button */}
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">AI Assistant Online</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetConversation}
            className="text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset Chat
          </Button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scrollbar">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl px-4 py-3 max-w-xs flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm text-muted-foreground">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <QuickSuggestions onSuggestionClick={handleSendMessage} />
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-border/50 p-4">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about campus life, schedules, events..."
              disabled={isLoading}
              className="flex-1 rounded-full border-border/50 focus:border-primary/50 focus:ring-primary/20"
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="rounded-full bg-primary hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
          <div className="text-xs text-muted-foreground mt-2 text-center">
            Press Enter to send • Shift+Enter for new line
          </div>
        </div>
      </Card>
    </div>
  )
}
