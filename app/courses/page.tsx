import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to IT-ISQS Courses!</h1>
        <p className="text-xl text-muted-foreground">
          Expand your knowledge with expert-led courses designed to enhance your skills in IT, cybersecurity, software
          development, and more!
        </p>
      </div>

      {/* Courses Grid - Only showing Introduction to Python */}
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1 max-w-xl mx-auto">
        {/* Course 1 */}
        <Card>
          <CardHeader className="pb-3">
            <div className="aspect-video relative mb-2 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Introduction to Python"
                width={350}
                height={200}
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">Beginner</div>
            </div>
            <CardTitle>Introduction to Python</CardTitle>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span>Dr. John Smith</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Learn the fundamentals of Python programming language and start your coding journey with hands-on projects
              and exercises.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/courses/introduction-to-python">View Course</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
