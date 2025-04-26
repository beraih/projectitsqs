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
        <h1 className="text-3xl font-bold tracking-tight">Functions in Python</h1>
        <p className="text-muted-foreground mt-2">Video Lesson • 20 minutes</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/NE97ylAnrz4"
                  title="Functions in Python"
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
              This video introduces functions in Python, which are reusable blocks of code designed to perform specific
              tasks. You'll learn how to define, call, and work with functions, as well as how to use parameters and
              return values. Functions are essential for organizing code, promoting reusability, and breaking down
              complex problems into manageable parts.
            </p>

            <h3 className="text-lg font-bold mb-2">Key Topics Covered:</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Defining and calling functions</li>
              <li>Function parameters and arguments</li>
              <li>Default parameter values</li>
              <li>Return values</li>
              <li>Variable scope (local vs. global)</li>
              <li>Lambda functions (anonymous functions)</li>
              <li>Built-in functions</li>
              <li>Docstrings and function documentation</li>
            </ul>

            <div className="bg-muted/50 p-4 rounded-md mt-6">
              <h3 className="text-lg font-bold mb-2">Code Example</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`# Basic function definition
def greet():
    print("Hello, world!")

# Calling the function
greet()  # Output: Hello, world!

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")  # Output: Hello, Alice!

# Function with default parameter
def greet_with_message(name, message="Good morning"):
    print(f"{message}, {name}!")

greet_with_message("Bob")  # Output: Good morning, Bob!
greet_with_message("Charlie", "Good evening")  # Output: Good evening, Charlie!

# Function with return value
def add_numbers(a, b):
    return a + b

sum_result = add_numbers(5, 3)  # sum_result = 8
print(f"The sum is {sum_result}")

# Multiple return values
def get_min_max(numbers):
    return min(numbers), max(numbers)

min_val, max_val = get_min_max([1, 5, 3, 9, 2])
print(f"Min: {min_val}, Max: {max_val}")  # Output: Min: 1, Max: 9

# Variable scope
x = 10  # Global variable

def test_scope():
    y = 5  # Local variable
    print(f"Inside function: x = {x}, y = {y}")

test_scope()
print(f"Outside function: x = {x}")
# print(y)  # This would cause an error because y is not defined outside the function

# Lambda function
square = lambda x: x**2
print(square(4))  # Output: 16

# Function with docstring
def calculate_area(length, width):
    """
    Calculate the area of a rectangle.
    
    Args:
        length (float): The length of the rectangle
        width (float): The width of the rectangle
        
    Returns:
        float: The area of the rectangle
    """
    return length * width

# Accessing the docstring
print(calculate_area.__doc__)`}</code>
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
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/lists">4. Working with Lists</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/courses/introduction-to-python/videos/functions">
                    <span className="font-bold text-primary">5. Functions in Python</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
