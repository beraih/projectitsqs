"use client";

import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function WebinarsPage() {
  const { role } = useUser();
  const router = useRouter();

  const handleCreateWebinar = () => {
    router.push("/create-webinar");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Webinarlar</h1>

      {role === "instructor" && (
        <Button onClick={handleCreateWebinar} className="mb-4">
          + Yeni Webinar
        </Button>
      )}

      {/* Buraya webinar listesi veya kartları gelecek */}
    </div>
  );
}
