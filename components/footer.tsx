import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            Built with Groq API for Hackathon 2025 • Powered by AI
          </p>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4 mr-2" />
              View Code
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
