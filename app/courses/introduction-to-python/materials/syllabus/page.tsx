import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Download } from "lucide-react"

export default function SyllabusPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses/introduction-to-python">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Course
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Course Syllabus</h1>
        <p className="text-muted-foreground mt-2">Introduction to Python</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Introduction to Python</h2>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Course Overview</h3>
                <p className="mb-4">
                  This 8-week course introduces students to the Python programming language. Python is a versatile,
                  high-level programming language known for its readability and simplicity. This course is designed for
                  beginners with no prior programming experience.
                </p>

                <h3 className="text-xl font-bold mb-4">Course Objectives</h3>
                <p className="mb-2">By the end of this course, students will be able to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Write basic Python programs using proper syntax</li>
                  <li>Understand and use variables, data types, and operators</li>
                  <li>Implement control flow using conditionals and loops</li>
                  <li>Create and use functions to organize code</li>
                  <li>Work with lists, dictionaries, and other data structures</li>
                  <li>Read from and write to files</li>
                  <li>Handle errors and exceptions</li>
                  <li>Understand basic object-oriented programming concepts</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Weekly Schedule</h3>

                <h4 className="text-lg font-bold mb-2">Week 1: Getting Started with Python</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Introduction to Python and its applications</li>
                  <li>Setting up the development environment</li>
                  <li>Python syntax basics</li>
                  <li>Writing your first program</li>
                  <li>Using the Python interpreter</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 2: Variables and Data Types</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Understanding variables</li>
                  <li>Numeric data types (int, float)</li>
                  <li>String data type and operations</li>
                  <li>Boolean data type</li>
                  <li>Type conversion</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 3: Control Flow</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Conditional statements (if, elif, else)</li>
                  <li>Comparison and logical operators</li>
                  <li>For loops</li>
                  <li>While loops</li>
                  <li>Break and continue statements</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 4: Functions</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Defining and calling functions</li>
                  <li>Function parameters and return values</li>
                  <li>Variable scope</li>
                  <li>Lambda functions</li>
                  <li>Built-in functions</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 5: Data Structures</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Lists and list operations</li>
                  <li>Tuples</li>
                  <li>Dictionaries</li>
                  <li>Sets</li>
                  <li>List comprehensions</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 6: File Handling</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Opening and closing files</li>
                  <li>Reading from files</li>
                  <li>Writing to files</li>
                  <li>Working with CSV files</li>
                  <li>File system operations</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 7: Error Handling</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Types of errors</li>
                  <li>Try-except blocks</li>
                  <li>Handling multiple exceptions</li>
                  <li>Finally clause</li>
                  <li>Raising exceptions</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 8: Introduction to Object-Oriented Programming</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Classes and objects</li>
                  <li>Attributes and methods</li>
                  <li>Constructors</li>
                  <li>Inheritance</li>
                  <li>Final project</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Assessment</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Weekly coding assignments (40%)</li>
                  <li>Midterm project (25%)</li>
                  <li>Final project (35%)</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Required Materials</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Computer with internet access</li>
                  <li>Python 3.x installed</li>
                  <li>Text editor or IDE (Visual Studio Code recommended)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Other Course Materials</h3>
              <div className="space-y-3">
                <Link
                  href="/courses/introduction-to-python/materials/syllabus"
                  className="flex items-center gap-3 bg-muted/50 p-2 rounded-md"
                >
                  <span className="font-medium text-primary">Course Syllabus</span>
                </Link>
                <Link
                  href="/courses/introduction-to-python/materials/exercises"
                  className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <span>Week 1 Exercises</span>
                </Link>
                <Link
                  href="/courses/introduction-to-python/materials/installation"
                  className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <span>Python Installation Guide</span>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Course Videos</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/introduction-to-python/videos/introduction">Introduction to Python</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/introduction-to-python/videos/variables">Variables and Data Types</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/introduction-to-python/videos/control-flow">Control Flow Basics</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
