import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, FileText, ExternalLink } from "lucide-react"

export default function AssignmentsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses/introduction-to-python">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Course
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
        <p className="text-muted-foreground mt-2">Introduction to Python</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Week 1 Assignment: Python Basics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Complete the following assignment to practice what you've learned about Python basics. Submit your
                  work through the Google Form below.
                </p>

                <h3 className="text-xl font-bold mb-4">Instructions</h3>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Complete all the exercises in the assignment</li>
                  <li>
                    Save your Python file as <code>week1_assignment.py</code>
                  </li>
                  <li>Upload your file through the Google Form</li>
                  <li>Submit before the deadline: April 10, 2025, 11:59 PM</li>
                </ol>

                <div className="bg-muted/50 p-4 rounded-md mt-6 mb-6">
                  <h3 className="text-lg font-bold mb-2">Submission Form</h3>
                  <p className="mb-4">
                    Use the embedded form below to submit your assignment. If you have any issues with the form, you can
                    also access it directly via the link.
                  </p>
                  <Button variant="outline" className="flex items-center gap-2" asChild>
                    <a href="https://forms.gle/exampleFormLink123" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Open Form in New Tab
                    </a>
                  </Button>
                </div>

                {/* Google Form Embed */}
                <div className="w-full mt-6">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdCJRnWkArvh7n_lXOyHMGrNXIinYnwlK8UGIHNJWk9DJXdJw/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Assignment Submission Form"
                  >
                    Loading Google Form...
                  </iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">All Assignments</h3>
              <div className="space-y-3">
                <Link
                  href="/courses/introduction-to-python/assignments"
                  className="flex items-center gap-3 bg-muted/50 p-2 rounded-md"
                >
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Week 1: Python Basics</div>
                    <div className="text-xs text-muted-foreground">Due: April 10, 2025</div>
                  </div>
                </Link>
                <Link
                  href="/courses/introduction-to-python/assignments/week2"
                  className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Week 2: Control Flow</div>
                    <div className="text-xs text-muted-foreground">Due: April 17, 2025</div>
                  </div>
                </Link>
                <Link
                  href="/courses/introduction-to-python/assignments/week3"
                  className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Week 3: Functions</div>
                    <div className="text-xs text-muted-foreground">Due: April 24, 2025</div>
                  </div>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Course Resources</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/introduction-to-python/videos/introduction">Course Videos</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/introduction-to-python/materials/syllabus">Course Materials</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/introduction-to-python">Course Overview</Link>
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
