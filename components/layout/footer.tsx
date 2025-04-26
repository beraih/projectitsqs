import Link from "next/link"
import { Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="mb-6">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              IT-ISQS
            </span>
          </Link>
          <div className="flex space-x-4 mb-6">
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Courses
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/forums" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Forums
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/webinars" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Webinars
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>
          <div className="text-center text-sm text-muted-foreground">
            <div className="flex justify-center gap-x-4 mb-2">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms-of-use" className="hover:text-primary transition-colors">
                Terms of Use
              </Link>
            </div>
            <p>&copy; {new Date().getFullYear()} IT-ISQS Knowledge Sharing Platform. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
