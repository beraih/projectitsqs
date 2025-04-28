"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Email adresi boş olamaz!");
      return;
    }

    setLoading(true);
    console.log("Şifre sıfırlama linki gönderildi:", email);

    setTimeout(() => {
      setLoading(false);
      setMessage("Şifre sıfırlama linki email adresine gönderildi.");
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    }, 2000); // Simülasyon: 2 saniye loading
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Şifremi Unuttum</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email Adresi</Label>
              <Input
                id="email"
                type="email"
                placeholder="Emailinizi girin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {message && <div className="text-sm text-green-600">{message}</div>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Gönderiliyor..." : "Şifre Sıfırlama Linki Gönder"}
            </Button>
            <div className="text-center mt-2">
              <Button
                variant="link"
                onClick={() => router.push("/login")}
                className="text-blue-500"
              >
                Geri Dön
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
