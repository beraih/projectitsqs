"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Lock, Save } from "lucide-react"

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=100&width=100")
  const router = useRouter()

  // Simulate checking if user is logged in
  // In a real app, this would check your authentication state
  useEffect(() => {
    // For demo purposes, always redirect to login
    // In a real app, you would check auth state here
    router.push("/log-in")
  }, [router])

  return (
    <div className="container px-4 py-12 md:px-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Manage your account details</h1>
      </div>

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
          <TabsTrigger value="profile">Profile Information</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>Update your profile picture</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="relative">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={profileImage || "/placeholder.svg"} alt="Profile picture" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 rounded-full"
                  onClick={() => document.getElementById("profile-upload")?.click()}
                >
                  <Camera className="h-4 w-4" />
                </Button>
                <input
                  id="profile-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const reader = new FileReader()
                      reader.onload = (event) => {
                        if (event.target?.result) {
                          setProfileImage(event.target.result as string)
                        }
                      }
                      reader.readAsDataURL(e.target.files[0])
                    }
                  }}
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground mb-2">
                  Upload a new profile picture. Recommended size: 400x400px.
                </p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById("profile-upload")?.click()}
                  >
                    Upload New
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setProfileImage("/placeholder.svg?height=100&width=100")}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Your full name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Your username" defaultValue="johndoe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    defaultValue="john.doe@example.com"
                    disabled
                  />
                  <p className="text-xs text-muted-foreground">
                    Email address cannot be changed. Contact support for assistance.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="Student" disabled />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio / About Me</Label>
                  <Textarea
                    id="bio"
                    placeholder="Write a short bio about yourself..."
                    className="min-h-[120px]"
                    defaultValue="I'm a software developer interested in web technologies and machine learning."
                  />
                </div>

                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>

                <Button type="submit">
                  <Lock className="mr-2 h-4 w-4" /> Update Password
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Enable 2FA</h3>
                  <p className="text-sm text-muted-foreground">Protect your account with two-factor authentication</p>
                </div>
                <Button variant="outline">Setup 2FA</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
