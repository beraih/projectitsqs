"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Plus, Edit, Trash2, Users, BookOpen } from "lucide-react"
import { useUser } from "@/components/user-context"
import { Badge } from "@/components/ui/badge"

export default function MyCoursesPage() {
  const router = useRouter()
  const { role, isAuthenticated } = useUser()

  // Redirect if not authenticated or not an instructor
  if (!isAuthenticated || role !== "instructor") {
    if (typeof window !== "undefined") {
      router.push("/log-in")
    }
    return null
  }

  // Mock data for instructor's courses
  const courses = [
    {
      id: 1,
      title: "Introduction to Python",
      description: "Learn the fundamentals of Python programming language.",
      students: 42,
      status: "published",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 2,
      title: "Advanced JavaScript Techniques",
      description: "Master advanced concepts in JavaScript programming.",
      students: 28,
      status: "draft",
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
            <p className="text-muted-foreground mt-2">Manage your courses and track student progress</p>
          </div>
          <Button asChild>
            <Link href="/instructor/create-course">
              <Plus className="mr-2 h-4 w-4" /> Create New Course
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <Badge
                className={`absolute top-2 right-2 ${course.status === "published" ? "bg-green-500" : "bg-amber-500"}`}
              >
                {course.status === "published" ? "Published" : "Draft"}
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{course.description}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                <span>{course.students} students enrolled</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/instructor/courses/${course.id}`}>
                  <BookOpen className="mr-2 h-4 w-4" /> View
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
