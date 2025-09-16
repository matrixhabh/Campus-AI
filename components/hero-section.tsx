"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const scrollToChat = () => {
    const chatElement = document.querySelector("[data-chat-interface]")
    chatElement?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300 bg-clip-text text-transparent mb-6 text-balance">
            AI-Powered Campus Assistant
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Get instant answers, guidance, and support for all your campus needs. From class schedules to dining
            options, I'm here to help 24/7.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={scrollToChat}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Chatting
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-full border-2 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Powered by Groq AI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Real-time Responses</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span>24/7 Available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
