"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
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
      ref={ref}
      className="py-16 md:py-20 px-4 text-center padding-x-mobile"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="hero-title font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300 bg-clip-text text-transparent mb-6 text-balance leading-tight">
            AI-Powered Campus Assistant
          </h1>
          <p className="hero-subtitle text-muted-foreground mb-8 text-pretty max-w-4xl mx-auto leading-relaxed">
            Get instant answers, guidance, and support for all your campus needs. From class schedules to dining
            options, I'm here to help 24/7.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            size="lg"
            onClick={scrollToChat}
            className="btn-primary-mobile bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base font-medium btn-gradient-hover"
          >
            Start Chatting
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToFeatures}
            className="btn-primary-mobile px-8 py-3 rounded-full border-2 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 bg-transparent text-base font-medium hover:border-blue-400 dark:hover:border-blue-500"
          >
            <Play className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>

        {/* Trust indicators */}
        <div className={`flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-muted-foreground transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Powered by Groq AI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
            <span>Real-time Responses</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-700"></div>
            <span>24/7 Available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
