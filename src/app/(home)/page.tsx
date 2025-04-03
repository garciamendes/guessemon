"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { SendHorizontal } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      {/* Avatar */}

      <div className="flex items-center gap-2.5 mt-2.5">
        <Input
          className="h-12 md:text-2xl"
          type="text"
          placeholder="Digite o nome do Pokémon"
        />

        <Button
          variant="outline"
          size="lg"
          className="cursor-pointer h-12 text-4xl"
        >
          <SendHorizontal size={26} />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="w-full flex items-center gap-2.5">
          <Separator
            orientation="horizontal"
            className="bg-slate-700 h-[1px] w-6/12"
          />

          <strong>Tentativas</strong>

          <Separator
            orientation="horizontal"
            className="bg-slate-700 h-[1px] w-6/12"
          />
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col mt-1.5 no-scrollbar">
          <div className="h-60 flex flex-col gap-2.5">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-1.5 size-5 w-full border border-ring h-auto rounded-md"
              >
                <strong className="ml-1">Nome do pokemon {index}</strong>

                <Image
                  width={50}
                  height={50}
                  src={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
                  }
                  alt="pokemon"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
