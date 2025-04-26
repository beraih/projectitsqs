import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export default function VideoPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses/introduction-to-python">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Course
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Working with Lists</h1>
        <p className="text-muted-foreground mt-2">Video Lesson • 25 minutes</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ohCDWZgNIU0"
                  title="Working with Lists in Python"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="prose max-w-none">
            <h2 className="text-xl font-bold mb-4">Video Description</h2>
            <p className="mb-4">
              This video explores lists in Python, one of the most versatile and commonly used data structures. You'll
              learn how to create, access, modify, and manipulate lists. Lists allow you to store multiple items in a
              single variable and are essential for organizing and working with collections of data.
            </p>

            <h3 className="text-lg font-bold mb-2">Key Topics Covered:</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Creating and initializing lists</li>
              <li>Accessing list elements with indexing</li>
              <li>Slicing lists to extract portions</li>
              <li>Adding elements with append(), insert(), and extend()</li>
              <li>Removing elements with remove(), pop(), and del</li>
              <li>List methods like sort(), reverse(), and count()</li>
              <li>List comprehensions for concise list creation</li>
              <li>Nested lists and multidimensional data</li>
            </ul>

            <div className="bg-muted/50 p-4 rounded-md mt-6">
              <h3 className="text-lg font-bold mb-2">Code Example</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# Accessing elements
first_fruit = fruits[0]  # "apple"
last_number = numbers[-1]  # 5

# Slicing
first_two_fruits = fruits[0:2]  # ["apple", "banana"]
last_three_numbers = numbers[2:]  # [3, 4, 5]

# Adding elements
fruits.append("orange")  # ["apple", "banana", "cherry", "orange"]
fruits.insert(1, "mango")  # ["apple", "mango", "banana", "cherry", "orange"]
more_fruits = ["kiwi", "grape"]
fruits.extend(more_fruits)  # ["apple", "mango", "banana", "cherry", "orange", "kiwi", "grape"]

# Removing elements
fruits.remove("banana")  # Removes the first occurrence of "banana"
last_fruit = fruits.pop()  # Removes and returns the last element
del fruits[0]  # Removes the element at index 0

# List methods
numbers.sort()  # Sorts the list in place
numbers.reverse()  # Reverses the list in place
count_of_3 = numbers.count(3)  # Counts occurrences of 3

# List comprehension
squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
even_numbers = [x for x in range(20) if x % 2 == 0]  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Nested lists
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
middle_element = matrix[1][1]  # 5`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Course Navigation</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/introduction">1. Introduction to Python</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/variables">2. Variables and Data Types</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/control-flow">3. Control Flow Basics</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/lists">
                    <span className="font-bold text-primary">4. Working with Lists</span>
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/functions">5. Functions in Python</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
