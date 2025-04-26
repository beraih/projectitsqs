import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export default function VideoPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses/introduction-to-python">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Course
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Introduction to Python</h1>
        <p className="text-muted-foreground mt-2">Video Lesson • 15 minutes</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rfscVS0vtbw"
                  title="Introduction to Python - Course Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="prose max-w-none">
            <h2 className="text-xl font-bold mb-4">Video Description</h2>
            <p className="mb-4">
              This introductory video covers the basics of Python programming language. You'll learn about the history
              of Python, its key features, and why it's one of the most popular programming languages today. The
              instructor will also demonstrate how to set up your development environment and write your first Python
              program.
            </p>

            <h3 className="text-lg font-bold mb-2">Key Topics Covered:</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>What is Python and why is it popular?</li>
              <li>Setting up your Python development environment</li>
              <li>Python syntax basics</li>
              <li>Writing your first "Hello, World!" program</li>
              <li>Overview of the course structure</li>
            </ul>

            <div className="bg-muted/50 p-4 rounded-md mt-6">
              <h3 className="text-lg font-bold mb-2">Next Steps</h3>
              <p>
                After watching this video, proceed to the "Variables and Data Types" lesson to learn about how Python
                handles different types of data and how to work with variables.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Course Navigation</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/introduction">
                    <span className="font-bold text-primary">1. Introduction to Python</span>
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/variables">2. Variables and Data Types</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/control-flow">3. Control Flow Basics</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/lists">4. Working with Lists</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/functions">5. Functions in Python</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
