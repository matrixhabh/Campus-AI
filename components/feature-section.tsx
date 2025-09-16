"use client"

import { Card } from "@/components/ui/card"
import { Brain, Zap, Clock } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Responses",
      description: "Accurate, helpful answers tailored to campus life with advanced AI understanding.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized with Groq API for real-time responses that keep up with your busy schedule.",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Always here to help with your campus questions, day or night, whenever you need support.",
      gradient: "from-purple-500 to-blue-600",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Choose CampusHelper AI?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Experience the future of campus assistance with our intelligent, fast, and reliable AI companion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative p-8 border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Glowing border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 mx-auto shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 text-center">{feature.title}</h3>

                <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
