import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, BookOpen, Video, FileText, Clock } from "lucide-react"

export default function ReactCoursePage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Web Development with React</h1>
        <div className="flex items-center gap-2 mt-2 text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span>Instructor: Jane Doe</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4" />
          <span>10 weeks</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/bMknfKXIFA8"
                  title="Web Development with React - Course Overview"
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
                  This intermediate-level course focuses on building modern web applications using React. You'll learn
                  how to create interactive user interfaces, manage state, work with APIs, and deploy your applications.
                  By the end of this course, you'll be able to build complete React applications from scratch.
                </p>
                <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>React fundamentals and JSX</li>
                  <li>Components and props</li>
                  <li>State management and hooks</li>
                  <li>Handling events and forms</li>
                  <li>Routing with React Router</li>
                  <li>API integration and data fetching</li>
                  <li>Building a complete web application</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Week 1: Introduction to React</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Setting up your development environment</li>
                    <li>Understanding React components</li>
                    <li>JSX syntax and expressions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Week 2: Components and Props</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Functional and class components</li>
                    <li>Component composition</li>
                    <li>Passing data with props</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Week 3: State and Lifecycle</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Managing state in components</li>
                    <li>Component lifecycle methods</li>
                    <li>Handling events in React</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="resources" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Recommended Books</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>React Up and Running by Stoyan Stefanov</li>
                    <li>Learning React by Alex Banks and Eve Porcello</li>
                    <li>Road to React by Robin Wieruch</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Online Resources</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>React Documentation (reactjs.org)</li>
                    <li>React DevTools</li>
                    <li>CodeSandbox for React</li>
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
                  href="/courses/web-development-react/videos/introduction"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Introduction to React</h4>
                    <p className="text-sm text-muted-foreground">18 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/web-development-react/videos/components"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Components and JSX</h4>
                    <p className="text-sm text-muted-foreground">25 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/web-development-react/videos/state"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">State and Props</h4>
                    <p className="text-sm text-muted-foreground">22 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/web-development-react/videos/events"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Handling Events</h4>
                    <p className="text-sm text-muted-foreground">20 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/web-development-react/videos/hooks"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">React Hooks</h4>
                    <p className="text-sm text-muted-foreground">28 minutes</p>
                  </div>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Course Materials</h3>
                <div className="space-y-3">
                  <Link
                    href="/courses/web-development-react/materials/syllabus"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Course Syllabus</span>
                  </Link>
                  <Link
                    href="/courses/web-development-react/materials/setup"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span>React Project Setup Guide</span>
                  </Link>
                  <Link
                    href="/courses/web-development-react/materials/patterns"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Component Design Patterns</span>
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
