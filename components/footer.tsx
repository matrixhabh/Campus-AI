import { Github, ExternalLink, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-white/20 dark:border-gray-700/30 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="text-sm text-muted-foreground mb-2">
              Built with <span className="text-blue-600 dark:text-blue-400 font-semibold">Groq API</span> for Hackathon
              2025
            </p>
            <p className="text-xs text-muted-foreground">Powered by AI • Designed for Students • Built with ❤️</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2 mr-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-2xl hover:bg-blue-100 dark:hover:bg-blue-900/20 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-2xl hover:bg-blue-100 dark:hover:bg-blue-900/20 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-2xl hover:bg-blue-100 dark:hover:bg-blue-900/20 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>

            {/* Demo Links */}
            <Button
              variant="outline"
              size="sm"
              className="rounded-2xl border-white/30 dark:border-gray-600/30 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/40 dark:hover:bg-gray-700/40 transition-all duration-300"
            >
              <Github className="h-4 w-4 mr-2" />
              View Code
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-2xl border-white/30 dark:border-gray-600/30 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/40 dark:hover:bg-gray-700/40 transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
