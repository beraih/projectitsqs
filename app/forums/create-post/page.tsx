"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft } from "lucide-react"

export default function CreatePostPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would integrate with your backend
    // Example:
    // const formData = new FormData(e.target as HTMLFormElement)
    // const title = formData.get('title')
    // const category = formData.get('category')
    // const content = formData.get('content')

    // API call would go here
    // await fetch('/api/posts', {
    //   method: 'POST',
    //   body: JSON.stringify({ title, category, content }),
    //   headers: { 'Content-Type': 'application/json' }
    // })

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect would happen here after successful submission
      // router.push('/forums')
    }, 1000)
  }

  return (
    <div className="container px-4 py-12 md:px-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/forums">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Forums
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Create New Post</h1>
        <p className="text-muted-foreground mt-2">Share your thoughts, questions, or insights with the community.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Post Title</Label>
              <Input id="title" name="title" placeholder="Enter a descriptive title for your post" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select name="category" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social">Social Discussion</SelectItem>
                  <SelectItem value="academic">Academic Discussion</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your post content here..."
                className="min-h-[200px]"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button type="button" variant="outline" asChild>
              <Link href="/forums">Cancel</Link>
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : "Post"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
