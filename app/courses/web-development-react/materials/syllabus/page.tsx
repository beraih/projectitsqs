import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Download } from "lucide-react"

export default function SyllabusPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/courses/web-development-react">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Course
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Course Syllabus</h1>
        <p className="text-muted-foreground mt-2">Web Development with React</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Web Development with React</h2>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Course Overview</h3>
                <p className="mb-4">
                  This 10-week course focuses on building modern web applications using React. Students will learn how
                  to create interactive user interfaces, manage state, work with APIs, and deploy applications. This
                  course is designed for intermediate-level developers who have basic knowledge of HTML, CSS, and
                  JavaScript.
                </p>

                <h3 className="text-xl font-bold mb-4">Course Objectives</h3>
                <p className="mb-2">By the end of this course, students will be able to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Build complete web applications using React</li>
                  <li>Create and manage reusable components</li>
                  <li>Implement state management using hooks and context</li>
                  <li>Handle user events and form submissions</li>
                  <li>Implement client-side routing with React Router</li>
                  <li>Fetch and manage data from APIs</li>
                  <li>Deploy React applications to production</li>
                  <li>Apply best practices for React development</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Basic knowledge of HTML, CSS, and JavaScript</li>
                  <li>Understanding of ES6+ features (arrow functions, destructuring, etc.)</li>
                  <li>Familiarity with npm and basic command line operations</li>
                  <li>A code editor (VS Code recommended)</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Weekly Schedule</h3>

                <h4 className="text-lg font-bold mb-2">Week 1: Introduction to React</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>What is React and why use it?</li>
                  <li>Setting up the development environment</li>
                  <li>Creating a new React application</li>
                  <li>Understanding JSX syntax</li>
                  <li>React Developer Tools</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 2: Components and Props</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Functional and class components</li>
                  <li>Component composition</li>
                  <li>Passing data with props</li>
                  <li>PropTypes and default props</li>
                  <li>Styling React components</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 3: State and Lifecycle</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Understanding component state</li>
                  <li>useState hook</li>
                  <li>Component lifecycle</li>
                  <li>useEffect hook</li>
                  <li>Handling events in React</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 4: Forms and User Input</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Controlled components</li>
                  <li>Form submission</li>
                  <li>Form validation</li>
                  <li>Custom hooks for forms</li>
                  <li>Working with multiple inputs</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 5: Advanced Hooks</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>useContext for global state</li>
                  <li>useReducer for complex state logic</li>
                  <li>useRef for DOM manipulation</li>
                  <li>useMemo and useCallback for optimization</li>
                  <li>Creating custom hooks</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 6: Routing with React Router</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Setting up React Router</li>
                  <li>Route parameters</li>
                  <li>Nested routes</li>
                  <li>Protected routes</li>
                  <li>Navigation and redirects</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 7: API Integration</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Fetching data with fetch and axios</li>
                  <li>Handling loading and error states</li>
                  <li>Working with async/await</li>
                  <li>API authentication</li>
                  <li>Custom hooks for data fetching</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 8: State Management</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Context API for global state</li>
                  <li>Introduction to Redux</li>
                  <li>Redux Toolkit</li>
                  <li>State management patterns</li>
                  <li>When to use global state</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 9: Testing and Optimization</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Unit testing with Jest</li>
                  <li>Component testing with React Testing Library</li>
                  <li>Performance optimization techniques</li>
                  <li>Code splitting</li>
                  <li>Memoization and pure components</li>
                </ul>

                <h4 className="text-lg font-bold mb-2">Week 10: Deployment and Best Practices</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Building for production</li>
                  <li>Deployment options (Vercel, Netlify, GitHub Pages)</li>
                  <li>Environment variables</li>
                  <li>Progressive Web Apps</li>
                  <li>React best practices and patterns</li>
                  <li>Final project presentation</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Assessment</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Weekly coding assignments (40%)</li>
                  <li>Midterm project: Interactive UI component library (25%)</li>
                  <li>Final project: Complete React application (35%)</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Required Materials</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Computer with internet access</li>
                  <li>Node.js and npm installed</li>
                  <li>Code editor (Visual Studio Code recommended)</li>
                  <li>GitHub account</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Recommended Resources</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>
                    React official documentation:{" "}
                    <a href="https://reactjs.org/docs" className="text-primary hover:underline">
                      reactjs.org/docs
                    </a>
                  </li>
                  <li>
                    MDN Web Docs:{" "}
                    <a href="https://developer.mozilla.org" className="text-primary hover:underline">
                      developer.mozilla.org
                    </a>
                  </li>
                  <li>
                    JavaScript.info:{" "}
                    <a href="https://javascript.info" className="text-primary hover:underline">
                      javascript.info
                    </a>
                  </li>
                </ul>
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
                  href="/courses/web-development-react/materials/syllabus"
                  className="flex items-center gap-3 bg-muted/50 p-2 rounded-md"
                >
                  <span className="font-medium text-primary">Course Syllabus</span>
                </Link>
                <Link
                  href="/courses/web-development-react/materials/setup"
                  className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <span>React Project Setup Guide</span>
                </Link>
                <Link
                  href="/courses/web-development-react/materials/patterns"
                  className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <span>Component Design Patterns</span>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Course Videos</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/web-development-react/videos/introduction">Introduction to React</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/web-development-react/videos/components">Components and JSX</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/courses/web-development-react/videos/state">State and Props</Link>
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
