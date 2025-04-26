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
        <h1 className="text-3xl font-bold tracking-tight">Control Flow Basics</h1>
        <p className="text-muted-foreground mt-2">Video Lesson • 18 minutes</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Zp5MuPOtsSY"
                  title="Control Flow Basics in Python"
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
              This video covers the basics of control flow in Python. You'll learn how to use conditional statements
              (if, elif, else) and loops (for, while) to control the execution flow of your programs. These concepts are
              fundamental to programming and will allow you to create more complex and useful applications.
            </p>

            <h3 className="text-lg font-bold mb-2">Key Topics Covered:</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Conditional statements (if, elif, else)</li>
              <li>Comparison operators (==, !=, &gt;, &lt;, &gt;=, &lt;=)</li>
              <li>Logical operators (and, or, not)</li>
              <li>For loops and iteration</li>
              <li>While loops and loop control</li>
              <li>Break and continue statements</li>
              <li>Nested loops and conditionals</li>
            </ul>

            <div className="bg-muted/50 p-4 rounded-md mt-6">
              <h3 className="text-lg font-bold mb-2">Code Example</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`# Conditional statements
age = 18

if age < 13:
    print("Child")
elif age < 18:
    print("Teenager")
else:
    print("Adult")

# For loop
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# While loop
count = 0
while count < 5:
    print(f"Count is {count}")
    count += 1

# Break statement
for i in range(10):
    if i == 5:
        break
    print(i)

# Continue statement
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # Only prints odd numbers`}</code>
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
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/variables">2. Variables and Data Types</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/control-flow">
                    <span className="font-bold text-primary">3. Control Flow Basics</span>
                  </Link>
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
