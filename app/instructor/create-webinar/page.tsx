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
import { ChevronLeft, Upload } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { useUser } from "@/components/user-context"

export default function CreateWebinarPage() {
  const router = useRouter()
  const { role, isAuthenticated } = useUser()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Redirect if not authenticated or not an instructor
  if (!isAuthenticated || role !== "instructor") {
    if (typeof window !== "undefined") {
      router.push("/log-in")
    }
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Webinar created!",
        description: "Your webinar has been scheduled successfully.",
      })
      router.push("/instructor/my-webinars")
    }, 1500)
  }

  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/webinars">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Webinars
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Schedule New Webinar</h1>
        <p className="text-muted-foreground mt-2">
          Create a live webinar session to engage with students in real-time.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Webinar Details</CardTitle>
                <CardDescription>Basic information about your webinar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Webinar Title</Label>
                  <Input id="title" placeholder="e.g., Advanced Python Techniques" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Webinar Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of your webinar..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" required />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input id="duration" type="number" min="15" step="15" placeholder="e.g., 60" required />
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
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Webinar Media</CardTitle>
                <CardDescription>Upload promotional image for your webinar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="thumbnail">Webinar Thumbnail</Label>
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
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Webinar Setup</CardTitle>
                <CardDescription>Configure your webinar platform and settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="platform">Platform</Label>
                  <Select required>
                    <SelectTrigger id="platform">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google-meet">Google Meet</SelectItem>
                      <SelectItem value="zoom">Zoom</SelectItem>
                      <SelectItem value="microsoft-teams">Microsoft Teams</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meeting-link">Meeting Link (optional)</Label>
                  <Input id="meeting-link" placeholder="e.g., https://meet.google.com/abc-defg-hij" />
                  <p className="text-xs text-muted-foreground">You can add this later if you don't have it yet</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="max-participants">Maximum Participants</Label>
                  <Input id="max-participants" type="number" min="1" placeholder="e.g., 100" required />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>Provide more details about your webinar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="target-audience">Target Audience</Label>
                  <Textarea id="target-audience" placeholder="Who is this webinar for?" className="min-h-[80px]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prerequisites">Prerequisites (optional)</Label>
                  <Textarea
                    id="prerequisites"
                    placeholder="Any knowledge or tools participants should have..."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="speaker-bio">Speaker Bio</Label>
                  <Textarea
                    id="speaker-bio"
                    placeholder="Brief information about yourself as the presenter..."
                    className="min-h-[80px]"
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button type="button" variant="outline" asChild>
            <Link href="/webinars">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Scheduling Webinar..." : "Schedule Webinar"}
          </Button>
        </div>
      </form>
    </div>
  )
}
