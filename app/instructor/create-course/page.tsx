"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Upload, Plus, Trash2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { useUser } from "@/components/user-context"

export default function CreateCoursePage() {
  const router = useRouter()
  const { role, isAuthenticated } = useUser()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modules, setModules] = useState([{ title: "", description: "" }])

  // Redirect if not authenticated or not an instructor
  if (!isAuthenticated || role !== "instructor") {
    if (typeof window !== "undefined") {
      router.push("/log-in")
    }
    return null
  }

  const addModule = () => {
    setModules([...modules, { title: "", description: "" }])
  }

  const removeModule = (index: number) => {
    const newModules = [...modules]
    newModules.splice(index, 1)
    setModules(newModules)
  }

  const updateModule = (index: number, field: string, value: string) => {
    const newModules = [...modules]
    newModules[index] = { ...newModules[index], [field]: value }
    setModules(newModules)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Course created!",
        description: "Your course has been created successfully.",
      })
      router.push("/instructor/my-courses")
    }, 1500)
  }

  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Create New Course</h1>
        <p className="text-muted-foreground mt-2">Create a new course to share your knowledge with students.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
                <CardDescription>Basic information about your course</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Course Title</Label>
                  <Input id="title" placeholder="e.g., Introduction to Python" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Course Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of your course..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="level">Difficulty Level</Label>
                    <Select required>
                      <SelectTrigger id="level">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (weeks)</Label>
                    <Input id="duration" type="number" min="1" placeholder="e.g., 8" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Media</CardTitle>
                <CardDescription>Upload images and videos for your course</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="thumbnail">Course Thumbnail</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Drag and drop an image or click to browse</p>
                    <p className="text-xs text-muted-foreground">Recommended size: 1280x720px</p>
                    <Input id="thumbnail" type="file" accept="image/*" className="hidden" />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => document.getElementById("thumbnail")?.click()}
                    >
                      Upload Thumbnail
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="intro-video">Introduction Video (optional)</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Upload a short introduction video</p>
                    <p className="text-xs text-muted-foreground">Max file size: 100MB</p>
                    <Input id="intro-video" type="file" accept="video/*" className="hidden" />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => document.getElementById("intro-video")?.click()}
                    >
                      Upload Video
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Course Modules</CardTitle>
                  <CardDescription>Add modules and lessons to your course</CardDescription>
                </div>
                <Button type="button" variant="outline" size="sm" onClick={addModule}>
                  <Plus className="h-4 w-4 mr-1" /> Add Module
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {modules.map((module, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Module {index + 1}</h3>
                      {modules.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeModule(index)}
                          className="h-8 w-8 p-0 text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`module-title-${index}`}>Title</Label>
                      <Input
                        id={`module-title-${index}`}
                        value={module.title}
                        onChange={(e) => updateModule(index, "title", e.target.value)}
                        placeholder="e.g., Getting Started with Python"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`module-description-${index}`}>Description</Label>
                      <Textarea
                        id={`module-description-${index}`}
                        value={module.description}
                        onChange={(e) => updateModule(index, "description", e.target.value)}
                        placeholder="Brief description of this module..."
                        className="min-h-[80px]"
                        required
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Settings</CardTitle>
                <CardDescription>Configure additional course settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prerequisites">Prerequisites (optional)</Label>
                  <Textarea
                    id="prerequisites"
                    placeholder="List any prerequisites for taking this course..."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="learning-objectives">Learning Objectives (optional)</Label>
                  <Textarea
                    id="learning-objectives"
                    placeholder="What will students learn from this course?"
                    className="min-h-[80px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button type="button" variant="outline" asChild>
            <Link href="/courses">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating Course..." : "Create Course"}
          </Button>
        </div>
      </form>
    </div>
  )
}
