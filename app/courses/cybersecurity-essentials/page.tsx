import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, BookOpen, Video, FileText, Clock } from "lucide-react"

export default function CybersecurityCoursePage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Cybersecurity Essentials</h1>
        <div className="flex items-center gap-2 mt-2 text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span>Instructor: Alex Brown</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4" />
          <span>6 weeks</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/inWWhr5tnEA"
                  title="Cybersecurity Essentials - Course Overview"
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
                  This beginner-friendly course introduces the fundamental concepts of cybersecurity. You'll learn about
                  common threats, basic security principles, and practical techniques to protect systems and data. By
                  the end of this course, you'll have a solid foundation in cybersecurity practices.
                </p>
                <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Cybersecurity fundamentals and terminology</li>
                  <li>Common cyber threats and attack vectors</li>
                  <li>Security principles and best practices</li>
                  <li>Password security and authentication</li>
                  <li>Network security basics</li>
                  <li>Malware protection strategies</li>
                  <li>Data protection and privacy</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Week 1: Introduction to Cybersecurity</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Understanding the cybersecurity landscape</li>
                    <li>Key terminology and concepts</li>
                    <li>The CIA triad: Confidentiality, Integrity, Availability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Week 2: Common Cyber Threats</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Malware types and infection methods</li>
                    <li>Social engineering attacks</li>
                    <li>Phishing and how to identify it</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Week 3: Security Best Practices</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Strong password creation and management</li>
                    <li>Multi-factor authentication</li>
                    <li>Safe browsing habits</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="resources" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Recommended Books</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Cybersecurity For Dummies by Joseph Steinberg</li>
                    <li>The Art of Invisibility by Kevin Mitnick</li>
                    <li>Practical Malware Analysis by Michael Sikorski</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Online Resources</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>NIST Cybersecurity Framework</li>
                    <li>OWASP Top 10</li>
                    <li>Have I Been Pwned</li>
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
                  href="/courses/cybersecurity-essentials/videos/introduction"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Introduction to Cybersecurity</h4>
                    <p className="text-sm text-muted-foreground">16 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/cybersecurity-essentials/videos/threats"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Understanding Cyber Threats</h4>
                    <p className="text-sm text-muted-foreground">24 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/cybersecurity-essentials/videos/passwords"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Password Security</h4>
                    <p className="text-sm text-muted-foreground">18 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/cybersecurity-essentials/videos/malware"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Malware Protection</h4>
                    <p className="text-sm text-muted-foreground">22 minutes</p>
                  </div>
                </Link>
                <Link
                  href="/courses/cybersecurity-essentials/videos/network"
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Video className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Network Security Basics</h4>
                    <p className="text-sm text-muted-foreground">20 minutes</p>
                  </div>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Course Materials</h3>
                <div className="space-y-3">
                  <Link
                    href="/courses/cybersecurity-essentials/materials/syllabus"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Course Syllabus</span>
                  </Link>
                  <Link
                    href="/courses/cybersecurity-essentials/materials/checklist"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Security Checklist</span>
                  </Link>
                  <Link
                    href="/courses/cybersecurity-essentials/materials/threats"
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Common Threats Guide</span>
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
