import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Bolt, CircleAlert, LogOut, Menu, SendHorizontal } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import { SendTry } from "./form";
import { ListAttempts } from "./listAttempts";
import { Tips } from "./tips";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-4">
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

        <LogOut className="cursor-pointer" size={25} />
      </div>

      <SendTry />

      <div className="flex-1 flex flex-col gap-2">
        {/* <Suspense
          fallback={
            <div className="flex-1 flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Tips />
        </Suspense> */}

        <Suspense
          fallback={
            <div className="flex-1 flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <ListAttempts />
        </Suspense>
      </div>
    </div>
  );
}
