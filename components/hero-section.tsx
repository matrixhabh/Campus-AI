"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToChat = () => {
    const chatElement = document.getElementById("chat-section")
    chatElement?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToFeatures = () => {
    const featuresElement = document.getElementById("features-section")
    featuresElement?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section 
      className="py-16 md:py-20 px-4 text-center padding-x-mobile"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="hero-title font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300 bg-clip-text text-transparent mb-6 text-balance leading-tight">
            AI-Powered Campus Assistant
          </h1>
          <p className="hero-subtitle text-muted-foreground mb-8 text-pretty max-w-4xl mx-auto leading-relaxed">
            Get instant answers, guidance, and support for all your campus needs. From class schedules to dining
            options, I'm here to help 24/7.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={scrollToChat}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg text-base font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(99,102,241,0.8)]"
          >
            <span className="relative z-10 flex items-center">
              Start Chatting
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToFeatures}
            className="btn-primary-mobile px-8 py-3 rounded-full border-2 hover:bg-blue-50 dark:hover:bg-blue-950/20 bg-transparent text-base font-medium hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-muted-foreground">
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
