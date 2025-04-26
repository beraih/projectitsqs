import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft } from "lucide-react"

export default function IntroductionThreadPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/forums">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Forums
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Welcome & Introductions - Say Hello!</h1>
        <p className="text-muted-foreground mt-2">
          New to the community? Introduce yourself and connect with fellow IT-ISQS members.
        </p>
      </div>

      {/* Original Post */}
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-start gap-4 pb-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Admin</div>
            <div className="text-xs text-muted-foreground">Forum Moderator • March 15, 2025</div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Welcome to the IT-ISQS Community Forums! 👋</p>
          <p className="mb-4">
            This thread is dedicated to introductions. Feel free to share a bit about yourself, your background, your
            interests in IT and ISQS, and what you hope to gain from this community.
          </p>
          <p>
            I'll start: I'm the forum admin and I've been working in IT education for over 10 years. I'm passionate
            about creating learning opportunities and connecting people with similar interests. Looking forward to
            meeting you all!
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
