import { trpc } from "@/lib/trpc";
import { serveClient } from "@/server";
import { guessRouter } from "@/trpc/guess";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export const ListAttempts = async () => {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const attempts = await serveClient.getGuesses({ userId: session.user.id });

  if (attempts.length === 0) {
    return <></>;
  }

  return (
    <div className="flex-1 flex flex-col gap-2.5">
      <div className="w-full flex items-center gap-2.5">
        <Separator
          orientation="horizontal"
          className="bg-slate-700 h-[1px] w-6/12"
        />

        <strong className="text-[18px]">Tentativas</strong>

        <Separator
          orientation="horizontal"
          className="bg-slate-700 h-[1px] w-6/12"
        />
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col mt-1.5 no-scrollbar">
        <div className="h-60 flex flex-col gap-2.5">
          {attempts.map(({}, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-1.5 w-full border border-ring h-auto rounded-md"
            >
              <strong className="ml-1">{pokemonName}</strong>

              <Image
                width={50}
                height={50}
                src={pokemonSprite}
                alt="pokemon"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
