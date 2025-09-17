"use client"

import { Card } from "@/components/ui/card"
import { Brain, Zap, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FeatureSection() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  
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
    <section className="py-16 md:py-20 px-4 padding-x-mobile" id="features-section">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Choose CampusHelper AI?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Experience the future of campus assistance with our intelligent, fast, and reliable AI companion.
          </p>
        </div>

        <div 
          ref={ref}
          className="feature-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`feature-card relative border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white/95 dark:hover:bg-gray-800/95 transition-all duration-500 hover:scale-105 hover:shadow-2xl group rounded-2xl ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Glowing border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-3 md:p-4 mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 ${inView ? 'scale-100' : 'scale-75'}`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
