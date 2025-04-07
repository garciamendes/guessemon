"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bolt, CircleAlert, LogOut, Menu } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handlerLogout = async () => {
    setIsLoading(true);

    signOut()
      .then(() => router.push("/login"))
      .catch((error) => {
        console.error("Error during sign-out:", error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex items-center justify-between mt-3">
      <Sheet>
        <SheetTrigger>
          <Menu size={30} className="cursor-pointer" />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Detalhes</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-5 mx-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="outline" className="cursor-pointer w-max">
                <span className="text-slate-400">Como Jogar</span>
                <CircleAlert size={25} className="text-slate-400" />
              </Button>

              <Button variant="outline" className="cursor-pointer w-max">
                <span className="text-slate-400">Configurações</span>
                <Bolt size={25} className="text-slate-400" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Button
        variant="ghost"
        loading={isLoading}
        className="cursor-pointer w-max"
        onClick={handlerLogout}
      >
        <LogOut className="cursor-pointer" size={25} />
      </Button>
    </div>
  );
}
