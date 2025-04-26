import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, PlusCircle, BookOpen, Coffee } from "lucide-react"

export default function ForumsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">IT-ISQS Community Forums</h1>
        <p className="text-xl text-muted-foreground">
          Connect with fellow students, share knowledge, and participate in discussions.
        </p>
      </div>

      {/* Create Post Button */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button className="flex gap-2" asChild>
          <Link href="/forums/create-post">
            <PlusCircle className="h-4 w-4" />
            <span>Create New Post</span>
          </Link>
        </Button>
      </div>

      <div className="grid gap-8">
        {/* Social Category */}
        <section>
          <div className="flex items-center mb-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Social Discussions</h2>
            </div>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <Link href="/forums/social/introduction" className="hover:underline">
                    Welcome & Introductions - Say Hello!
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  New to the community? Introduce yourself and connect with fellow IT-ISQS members.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/forums/social/introduction">Join Discussion</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Academic Category */}
        <section className="mt-8">
          <div className="flex items-center mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Academic Discussions</h2>
            </div>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <Link href="/forums/academic/database-optimization" className="hover:underline">
                    How to optimize database queries?
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discussion about best practices for optimizing SQL queries for better performance in high-traffic
                  applications.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/forums/academic/database-optimization">Join Discussion</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
