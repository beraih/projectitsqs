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
        <h1 className="text-3xl font-bold tracking-tight">Variables and Data Types</h1>
        <p className="text-muted-foreground mt-2">Video Lesson • 22 minutes</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rfscVS0vtbw"
                  title="Variables and Data Types in Python"
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
              This video explores variables and data types in Python. You'll learn how to create variables, assign
              values to them, and work with different data types including integers, floats, strings, and booleans.
              Understanding data types is fundamental to programming in Python and will form the foundation for more
              complex concepts later in the course.
            </p>

            <h3 className="text-lg font-bold mb-2">Key Topics Covered:</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Creating and naming variables</li>
              <li>Variable assignment and reassignment</li>
              <li>Numeric data types (int, float)</li>
              <li>String data type and operations</li>
              <li>Boolean data type</li>
              <li>Type conversion</li>
            </ul>

            <div className="bg-muted/50 p-4 rounded-md mt-6">
              <h3 className="text-lg font-bold mb-2">Code Example</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`# Variable examples
name = "John"  # string
age = 30       # integer
height = 5.9   # float
is_student = True  # boolean

# Type conversion
age_str = str(age)
height_int = int(height)

# String operations
greeting = "Hello, " + name + "!"
print(greeting)  # Output: Hello, John!`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Course Navigation</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/introduction">1. Introduction to Python</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/variables">
                    <span className="font-bold text-primary">2. Variables and Data Types</span>
                  </Link>
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
