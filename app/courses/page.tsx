"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";

interface Course {
  title: string;
  description: string;
  level: string;
  instructor: string;
}

export default function CoursesPage() {
  const [role, setRole] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fetchCourses = () => {
        const storedRole = localStorage.getItem("role");
        setRole(storedRole);

        const storedCourses = JSON.parse(localStorage.getItem("courses") || "[]");
        setCourses(storedCourses);
      };

      fetchCourses();

      // Sayfa odağa geldiğinde localStorage'dan verileri güncelle
      window.addEventListener("focus", fetchCourses);

      return () => {
        window.removeEventListener("focus", fetchCourses);
      };
    }
  }, []);

  if (role === null) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        Rol Yükleniyor...
      </div>
    );
  }

  const handleCreateCourse = () => {
    router.push("/create-course");
  };

  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-center">
          Welcome to IT-ISQS Courses!
        </h1>
        <p className="text-xl text-muted-foreground text-center">
          Expand your knowledge with expert-led courses designed to enhance your skills in IT, cybersecurity, software
          development, and more!
        </p>
      </div>

      {role && role.toLowerCase() === "instructor" && (
        <div className="flex justify-end mb-6">
          <Button onClick={handleCreateCourse}>+ Yeni Kurs</Button>
        </div>
      )}

      {/* Courses Grid */}
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1 max-w-xl mx-auto">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="aspect-video relative mb-2 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt={course.title}
                    width={350}
                    height={200}
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    {course.level}
                  </div>
                </div>
                <CardTitle>{course.title}</CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.instructor}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{course.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#">View Course</Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-center text-muted-foreground">
            Henüz eklenmiş kurs bulunmamaktadır.
          </p>
        )}
      </div>
    </div>
  );
}
