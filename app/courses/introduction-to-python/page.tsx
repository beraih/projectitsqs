import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, BookOpen, Video, FileText, Clock, FileSpreadsheet } from "lucide-react"

export default function PythonCoursePage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Introduction to Python</h1>
        <div className="flex items-center gap-2 mt-2 text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span>Instructor: Dr. John Smith</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4" />
          <span>8 weeks</span>
        </div>
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

          <Tabs defaultValue="overview" className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold mb-4">Course Description</h2>
                <p className="mb-4">
                  This course is designed for beginners with no programming experience. You'll learn Python from the
                  ground up, starting with basic concepts and progressing to more advanced topics. By the end of this
                  course, you'll be able to write Python programs to solve real-world problems.
                </p>
                <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Python syntax and fundamentals</li>
                  <li>Variables, data types, and operators</li>
                  <li>Control flow: conditionals and loops</li>
                  <li>Functions and modules</li>
                  <li>Working with lists, dictionaries, and tuples</li>
                  <li>File handling and error handling</li>
                  <li>Introduction to object-oriented programming</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Week 1: Getting Started with Python</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Installing Python and setting up your development environment</li>
                    <li>Writing your first Python program</li>
                    <li>Understanding variables and data types</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Week 2: Control Flow</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Conditional statements (if, elif, else)</li>
                    <li>Loops (for and while)</li>
                    <li>Control flow exercises</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Week 3: Functions</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Defining and calling functions</li>
                    <li>Parameters and return values</li>
                    <li>Scope and lifetime of variables</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="resources" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Recommended Books</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Python Crash Course by Eric Matthes</li>
                    <li>Automate the Boring Stuff with Python by Al Sweigart</li>
                    <li>Learning Python by Mark Lutz</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Online Resources</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Python Documentation (python.org)</li>
                    <li>Real Python Tutorials</li>
                    <li>Stack Overflow Python Community</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Course Videos</h3>
              <div className="space-y-4">
                <Link
                  href="/courses/introduction-to-python/videos/introduction"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Introduction to Python</h4>
                    <p className="text-sm text-muted-foreground">15 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/introduction-to-python/videos/variables"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Variables and Data Types</h4>
                    <p className="text-sm text-muted-foreground">22 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/introduction-to-python/videos/control-flow"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Control Flow Basics</h4>
                    <p className="text-sm text-muted-foreground">18 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/introduction-to-python/videos/lists"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Working with Lists</h4>
                    <p className="text-sm text-muted-foreground">25 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/introduction-to-python/videos/functions"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Functions in Python</h4>
                    <p className="text-sm text-muted-foreground">20 minutes</p>
                  </div>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Course Materials</h3>
                <div className="space-y-3">
                  <Link
                    href="/courses/introduction-to-python/materials/syllabus"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Course Syllabus</span>
                  </Link>
                  <Link
                    href="/courses/introduction-to-python/materials/exercises"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Week 1 Exercises</span>
                  </Link>
                  <Link
                    href="/courses/introduction-to-python/materials/installation"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Python Installation Guide</span>
                  </Link>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Assignments</h3>
                <div className="space-y-3">
                  <Link
                    href="/courses/introduction-to-python/assignments"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileSpreadsheet className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Week 1 Assignment</div>
                      <div className="text-xs text-muted-foreground">Due: April 10, 2025</div>
                    </div>
                  </Link>
                  <Link
                    href="/courses/introduction-to-python/assignments/week2"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileSpreadsheet className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Week 2 Assignment</div>
                      <div className="text-xs text-muted-foreground">Due: April 17, 2025</div>
                    </div>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
