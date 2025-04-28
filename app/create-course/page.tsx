"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function CreateCoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Başlık ve açıklama boş bırakılamaz!");
      return;
    }

    console.log("Yeni Kurs Oluşturuldu:", { title, description });

    router.push("/courses"); // Başarılıysa kurslar listesine dön
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Yeni Kurs Oluştur</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <Label htmlFor="title">Kurs Başlığı</Label>
              <Input
                id="title"
                placeholder="Kurs adını girin"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="description">Açıklama</Label>
              <Input
                id="description"
                placeholder="Kurs açıklamasını girin"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Kursu Kaydet
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
