import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Download } from "lucide-react"

export default function ExercisesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses/introduction-to-python">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Course
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Week 1 Exercises</h1>
        <p className="text-muted-foreground mt-2">Introduction to Python</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Python Basics - Week 1 Exercises</h2>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </div>

              <div className="prose max-w-none">
                <p className="mb-4">
                  Complete the following exercises to practice what you've learned in Week 1. Remember to test your code
                  as you go along. If you get stuck, refer to the course materials or ask for help in the discussion
                  forum.
                </p>

                <h3 className="text-xl font-bold mb-4">Exercise 1: Hello, World!</h3>
                <p className="mb-2">Write a Python program that prints "Hello, World!" to the console.</p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>{`# Your code here
print("Hello, World!")`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-bold mb-4">Exercise 2: Basic Arithmetic</h3>
                <p className="mb-2">
                  Write a program that calculates and prints the sum, difference, product, and quotient of two numbers
                  (10 and 5).
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>{`# Your code here
a = 10
b = 5

# Calculate sum
sum_result = a + b
print(f"Sum: {sum_result}")

# Calculate difference
difference = a - b
print(f"Difference: {difference}")

# Calculate product
product = a * b
print(f"Product: {product}")

# Calculate quotient
quotient = a / b
print(f"Quotient: {quotient}")`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-bold mb-4">Exercise 3: Variables and Types</h3>
                <p className="mb-2">
                  Create variables of different types (integer, float, string, boolean) and print their values and
                  types.
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>{`# Your code here
my_int = 42
my_float = 3.14
my_string = "Python is fun!"
my_bool = True

# Print values and types
print(f"my_int: {my_int}, type: {type(my_int)}")
print(f"my_float: {my_float}, type: {type(my_float)}")
print(f"my_string: {my_string}, type: {type(my_string)}")
print(f"my_bool: {my_bool}, type: {type(my_bool)}")`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-bold mb-4">Exercise 4: String Operations</h3>
                <p className="mb-2">
                  Create a program that asks for the user's name and age, then prints a personalized greeting including
                  how old they will be next year.
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>{`# Your code here
name = input("What is your name? ")
age = int(input("How old are you? "))

next_year_age = age + 1

print(f"Hello, {name}! Next year, you will be {next_year_age} years old.")`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-bold mb-4">Exercise 5: Type Conversion</h3>
                <p className="mb-2">
                  Write a program that converts a string representation of a number to an integer and a float, then
                  performs calculations with them.
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>{`# Your code here
num_string = "42"

# Convert to integer
num_int = int(num_string)
print(f"Integer: {num_int}, type: {type(num_int)}")
print(f"{num_int} + 8 = {num_int + 8}")

# Convert to float
num_float = float(num_string)
print(f"Float: {num_float}, type: {type(num_float)}")
print(f"{num_float} / 2 = {num_float / 2}")`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-bold mb-4">Challenge Exercise: Temperature Converter</h3>
                <p className="mb-2">
                  Create a program that converts temperatures between Celsius and Fahrenheit. The program should:
                </p>
                <ol className="list-decimal pl-5 mb-4">
                  <li>
                    Ask the user if they want to convert from Celsius to Fahrenheit (C) or Fahrenheit to Celsius (F)
                  </li>
                  <li>Ask for the temperature value</li>
                  <li>Perform the conversion and display the result</li>
                </ol>
                <p className="mb-2">
                  <strong>Formulas:</strong>
                  <br />
                  Celsius to Fahrenheit: (C × 9/5) + 32 = F
                  <br />
                  Fahrenheit to Celsius: (F - 32) × 5/9 = C
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>{`# Your code here
print("Temperature Converter")
conversion_type = input("Convert from (C)elsius to Fahrenheit or (F)ahrenheit to Celsius? Enter C or F: ").upper()

if conversion_type == "C":
    celsius = float(input("Enter temperature in Celsius: "))
    fahrenheit = (celsius * 9/5) + 32
    print(f"{celsius}°C is equal to {fahrenheit:.1f}°F")
elif conversion_type == "F":
    fahrenheit = float(input("Enter temperature in Fahrenheit: "))
    celsius = (fahrenheit - 32) * 5/9
    print(f"{fahrenheit}°F is equal to {celsius:.1f}°C")
else:
    print("Invalid input. Please enter C or F.")`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-bold mb-4">Submission Guidelines</h3>
                <p className="mb-4">
                  Save your solutions in a Python file named <code>week1_exercises.py</code>. Submit your file through
                  the course portal by the deadline.
                </p>

                <div className="bg-muted/50 p-4 rounded-md mt-6">
                  <h3 className="text-lg font-bold mb-2">Tips for Success</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Test your code with different inputs to ensure it works correctly</li>
                    <li>Use meaningful variable names that describe what they represent</li>
                    <li>Add comments to explain your code where necessary</li>
                    <li>
                      If you encounter errors, read the error message carefully—it often tells you exactly what's wrong
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Other Course Materials</h3>
              <div className="space-y-3">
                <Link
                  href="/courses/introduction-to-python/materials/syllabus"
                  className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <span>Course Syllabus</span>
                </Link>
                <Link
                  href="/courses/introduction-to-python/materials/exercises"
                  className="flex items-center gap-3 bg-muted/50 p-2 rounded-md"
                >
                  <span className="font-medium text-primary">Week 1 Exercises</span>
                </Link>
                <Link
                  href="/courses/introduction-to-python/materials/installation"
                  className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <span>Python Installation Guide</span>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Course Videos</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/introduction-to-python/videos/introduction">Introduction to Python</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/introduction-to-python/videos/variables">Variables and Data Types</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/introduction-to-python/videos/control-flow">Control Flow Basics</Link>
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
