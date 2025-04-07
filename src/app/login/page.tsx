"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const handleSignIn = async (provider: string) => {
    setIsLoading({ [provider]: true });

    signIn(provider)
      .then(() => router.push("/"))
      .catch((error) => {
        console.error("Error during sign-in:", error);
      })
      .finally(() => setIsLoading({ [provider]: false }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-900 shadow-xl rounded-2xl p-10 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-700">
          Bem-vindo ao Guessemon
        </h1>
        <p className="text-gray-600">Faça login para começar a jogar!</p>

        <div className="space-y-4">
          <Button
            variant="outline"
            loading={isLoading?.github}
            disabled={!!Object.keys(isLoading).length}
            className="cursor-pointer w-full flex items-center gap-2 justify-center py-6"
            onClick={() => handleSignIn("github")}
          >
            Entrar com GitHub
          </Button>

          <Button
            variant="outline"
            loading={isLoading?.google}
            disabled={!!Object.keys(isLoading).length}
            className="cursor-pointer w-full flex items-center gap-2 justify-center py-6"
            onClick={() => handleSignIn("google")}
          >
            Entrar com Google
          </Button>
        </div>
      </div>
    </div>
  );
}
