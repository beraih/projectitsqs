import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft } from "lucide-react"

export default function DatabaseOptimizationThreadPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/forums">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Forums
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">How to optimize database queries?</h1>
        <p className="text-muted-foreground mt-2">
          Discussion about best practices for optimizing SQL queries for better performance in high-traffic
          applications.
        </p>
      </div>

      {/* Original Post */}
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-start gap-4 pb-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Instructor" />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Dr. James Wilson</div>
            <div className="text-xs text-muted-foreground">Database Instructor • March 10, 2025</div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Hello everyone,</p>
          <p className="mb-4">
            I wanted to start a discussion about database query optimization techniques that can significantly improve
            application performance, especially in high-traffic scenarios.
          </p>
          <p className="mb-4">Here are some key areas we should focus on:</p>
          <ol className="list-decimal pl-5 mb-4 space-y-2">
            <li>Proper indexing strategies - when and where to use indexes</li>
            <li>Query structure optimization - avoiding SELECT * and optimizing JOINs</li>
            <li>Understanding and using query execution plans</li>
            <li>Caching strategies for frequently accessed data</li>
            <li>Partitioning large tables for better performance</li>
          </ol>
          <p>
            What techniques have you found most effective in your projects? I'm particularly interested in hearing about
            real-world examples where query optimization made a significant difference.
          </p>
        </CardContent>
      </Card>

      {/* Post Reply Form */}
      <Card>
        <CardHeader className="pb-2">
          <h3 className="font-semibold">Join the conversation</h3>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Write your reply here..." className="min-h-[120px]" />
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Post Reply</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
