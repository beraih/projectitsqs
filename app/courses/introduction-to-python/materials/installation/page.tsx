import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Download } from "lucide-react"
import Image from "next/image"

export default function InstallationGuidePage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses/introduction-to-python">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Course
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Python Installation Guide</h1>
        <p className="text-muted-foreground mt-2">Introduction to Python</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Setting Up Your Python Environment</h2>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </div>

              <div className="prose max-w-none">
                <p className="mb-4">
                  This guide will walk you through the process of installing Python and setting up a development
                  environment on your computer. Follow the instructions for your operating system.
                </p>

                <h3 className="text-xl font-bold mb-4">Step 1: Download Python</h3>
                <p className="mb-4">
                  Visit the official Python website at{" "}
                  <a href="https://www.python.org/downloads/" className="text-primary hover:underline">
                    python.org/downloads
                  </a>{" "}
                  and download the latest version of Python (3.x) for your operating system.
                </p>

                <div className="aspect-video relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Python Download Page"
                    width={600}
                    height={300}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold mb-4">Step 2: Install Python</h3>

                <h4 className="text-lg font-bold mb-2">Windows</h4>
                <ol className="list-decimal pl-5 mb-4">
                  <li>Run the downloaded installer (.exe file)</li>
                  <li>
                    <strong>Important:</strong> Check the box that says "Add Python to PATH" before clicking Install Now
                  </li>
                  <li>Click "Install Now" to begin the installation with default settings</li>
                  <li>Wait for the installation to complete</li>
                </ol>

                <h4 className="text-lg font-bold mb-2">macOS</h4>
                <ol className="list-decimal pl-5 mb-4">
                  <li>Open the downloaded .pkg file</li>
                  <li>Follow the installation wizard instructions</li>
                  <li>Click "Install" when prompted</li>
                  <li>You may need to enter your administrator password</li>
                </ol>

                <h4 className="text-lg font-bold mb-2">Linux</h4>
                <p className="mb-2">
                  Most Linux distributions come with Python pre-installed. To check if Python is installed:
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>python3 --version</code>
                  </pre>
                </div>

                <p className="mb-2">If Python is not installed, you can install it using your package manager:</p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>{`# Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip

# Fedora
sudo dnf install python3 python3-pip

# Arch Linux
sudo pacman -S python python-pip`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-bold mb-4">Step 3: Verify Installation</h3>
                <p className="mb-2">Open a command prompt (Windows) or terminal (macOS/Linux) and type:</p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>python --version</code>
                  </pre>
                </div>
                <p className="mb-2">Or:</p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>python3 --version</code>
                  </pre>
                </div>
                <p className="mb-4">
                  You should see the Python version number. If you get an error, try restarting your computer or
                  checking if Python was added to your PATH.
                </p>

                <h3 className="text-xl font-bold mb-4">Step 4: Install a Code Editor</h3>
                <p className="mb-4">
                  While you can write Python code in any text editor, we recommend using an Integrated Development
                  Environment (IDE) or a code editor with Python support. Here are some popular options:
                </p>

                <h4 className="text-lg font-bold mb-2">Visual Studio Code (Recommended)</h4>
                <ol className="list-decimal pl-5 mb-4">
                  <li>
                    Download and install VS Code from{" "}
                    <a href="https://code.visualstudio.com/" className="text-primary hover:underline">
                      code.visualstudio.com
                    </a>
                  </li>
                  <li>Open VS Code</li>
                  <li>Go to Extensions (or press Ctrl+Shift+X)</li>
                  <li>Search for "Python"</li>
                  <li>Install the Python extension by Microsoft</li>
                </ol>

                <h4 className="text-lg font-bold mb-2">PyCharm</h4>
                <p className="mb-4">
                  PyCharm is a dedicated Python IDE with a free Community Edition. Download from{" "}
                  <a href="https://www.jetbrains.com/pycharm/download/" className="text-primary hover:underline">
                    jetbrains.com/pycharm/download
                  </a>
                </p>

                <h4 className="text-lg font-bold mb-2">Jupyter Notebook</h4>
                <p className="mb-2">
                  Jupyter Notebook is great for data science and interactive Python development. Install it using pip:
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>pip install notebook</code>
                  </pre>
                </div>
                <p className="mb-2">To start Jupyter Notebook:</p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>jupyter notebook</code>
                  </pre>
                </div>

                <h3 className="text-xl font-bold mb-4">Step 5: Create Your First Python Program</h3>
                <ol className="list-decimal pl-5 mb-4">
                  <li>Open your code editor</li>
                  <li>
                    Create a new file and save it as <code>hello.py</code>
                  </li>
                  <li>Type the following code:</li>
                </ol>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>{`print("Hello, World!")
name = input("What is your name? ")
print(f"Nice to meet you, {name}!")`}</code>
                  </pre>
                </div>
                <ol className="list-decimal pl-5 mb-4" start={4}>
                  <li>Save the file</li>
                  <li>
                    Run the program:
                    <ul className="list-disc pl-5 mt-2">
                      <li>In VS Code: Right-click in the editor and select "Run Python File in Terminal"</li>
                      <li>In PyCharm: Right-click in the editor and select "Run 'hello'"</li>
                      <li>
                        In Terminal/Command Prompt: Navigate to the directory containing your file and type{" "}
                        <code>python hello.py</code> or <code>python3 hello.py</code>
                      </li>
                    </ul>
                  </li>
                </ol>

                <h3 className="text-xl font-bold mb-4">Step 6: Install Additional Packages (Optional)</h3>
                <p className="mb-2">
                  Python's package manager, pip, allows you to install additional libraries. For example, to install
                  NumPy (a popular library for numerical computing):
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>pip install numpy</code>
                  </pre>
                </div>
                <p className="mb-2">Or:</p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <pre className="text-sm">
                    <code>pip3 install numpy</code>
                  </pre>
                </div>

                <div className="bg-muted/50 p-4 rounded-md mt-6">
                  <h3 className="text-lg font-bold mb-2">Troubleshooting</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Python not found:</strong> Make sure Python is added to your PATH environment variable
                    </li>
                    <li>
                      <strong>Permission errors:</strong> Try running the command with administrator privileges or use{" "}
                      <code>sudo</code> on macOS/Linux
                    </li>
                    <li>
                      <strong>pip not found:</strong> Try using <code>pip3</code> instead of <code>pip</code>, or
                      reinstall Python with the "Add Python to PATH" option checked
                    </li>
                  </ul>
                </div>

                <p className="mt-6">
                  If you encounter any issues during installation, please post in the course discussion forum for
                  assistance.
                </p>
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
                  className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <span>Week 1 Exercises</span>
                </Link>
                <Link
                  href="/courses/introduction-to-python/materials/installation"
                  className="flex items-center gap-3 bg-muted/50 p-2 rounded-md"
                >
                  <span className="font-medium text-primary">Python Installation Guide</span>
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
