"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Book, Utensils, Clock, Users, GraduationCap, Phone } from "lucide-react"

interface QuickSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void
}

const suggestions = [
  {
    icon: Calendar,
    text: "Today's schedule",
    query: "What classes do I have today and what time do they start?",
  },
  {
    icon: MapPin,
    text: "Campus directions",
    query: "How do I get to the library from the main entrance?",
  },
  {
    icon: Book,
    text: "Library services",
    query: "What are the library hours and how do I check book availability?",
  },
  {
    icon: Utensils,
    text: "Dining options",
    query: "What's on the cafeteria menu today and what are the meal times?",
  },
  {
    icon: Clock,
    text: "Campus events",
    query: "What events and activities are happening on campus this week?",
  },
  {
    icon: Users,
    text: "Faculty contacts",
    query: "How can I contact my professors and find their office hours?",
  },
  {
    icon: GraduationCap,
    text: "Academic help",
    query: "Where can I get tutoring and academic support services?",
  },
  {
    icon: Phone,
    text: "Student services",
    query: "What student services are available and how do I access them?",
  },
]

export function QuickSuggestions({ onSuggestionClick }: QuickSuggestionsProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground font-medium">Popular questions:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {suggestions.map((suggestion, index) => {
          const Icon = suggestion.icon
          return (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => onSuggestionClick(suggestion.query)}
              className="justify-start gap-2 h-auto py-3 px-3 text-left border-border/50 hover:border-primary/50 hover:bg-accent/50 transition-colors"
            >
              <Icon className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm text-pretty">{suggestion.text}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
