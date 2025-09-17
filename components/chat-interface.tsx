"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Loader2, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MessageBubble } from "@/components/message-bubble"
import { QuickSuggestions } from "@/components/quick-suggestions"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function ChatInterface() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
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

  // Only scroll to bottom after the first message (welcome message) has been displayed
  useEffect(() => {
    // Skip auto-scrolling on initial load (only the welcome message exists)
    if (messages.length > 1) {
      scrollToBottom()
    }
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
        const errorData = await response.json().catch(() => null)
        throw new Error(errorData?.error || `Server error: ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message || "I received your message but couldn't generate a proper response. Please try again.",
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      let errorContent = "Sorry, I'm having trouble connecting right now. Please try again in a moment."
      
      if (error instanceof Error) {
        if (error.message.includes('model')) {
          errorContent = "The AI model is currently unavailable. Please try again later."
        } else if (error.message.includes('API key') || error.message.includes('401')) {
          errorContent = "There's an authentication issue. Please check your API configuration."
        } else if (error.message.includes('rate limit') || error.message.includes('429')) {
          errorContent = "Too many requests. Please wait a moment before trying again."
        }
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: errorContent,
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
    <div 
      ref={ref}
      className="w-full max-w-5xl mx-auto padding-x-mobile"
      data-chat-interface
    >
      {/* Welcome Section */}
      <div className={`text-center mb-6 md:mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">Welcome to CampusHelper AI</h2>
        <p className="text-muted-foreground text-base md:text-lg text-pretty">
          Your intelligent assistant for all campus-related questions
        </p>
      </div>

      <Card className={`chat-interface flex flex-col shadow-2xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-3xl ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Chat Header with Reset Button */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/20 dark:border-gray-700/30 bg-white/40 dark:bg-gray-800/40">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">AI Assistant Online</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetConversation}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-white/20 dark:hover:bg-gray-700/20"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset Chat
          </Button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 chat-scrollbar bg-gradient-to-b from-transparent to-white/10 dark:to-gray-900/10">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${messages.indexOf(message) * 50}ms` }}
            >
              <MessageBubble message={message} />
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted/80 backdrop-blur-sm rounded-2xl px-4 py-3 max-w-xs flex items-center gap-2 shadow-sm">
                <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                <span className="text-sm text-muted-foreground">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        {messages.length === 1 && (
          <div className={`px-4 md:px-6 pb-4 transition-all duration-500 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <QuickSuggestions onSuggestionClick={handleSendMessage} />
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-white/20 dark:border-gray-700/30 p-4 md:p-6 bg-white/40 dark:bg-gray-800/40">
          <div className="flex gap-3 mobile\:flex-col">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about campus life, schedules, events..."
              disabled={isLoading}
              className="flex-1 rounded-2xl border-white/30 dark:border-gray-600/30 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm focus:border-blue-400/50 focus:ring-blue-400/20 h-12 text-base transition-all duration-200 mobile\:w-full"
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 h-12 w-12 disabled:opacity-50 disabled:cursor-not-allowed mobile\:w-full mobile\:mt-2"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
          <div className="text-xs text-muted-foreground mt-3 text-center">
            Press Enter to send • Shift+Enter for new line
          </div>
        </div>
      </Card>
    </div>
  )
}
