import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

export const ListAttempts = async () => {
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
          {Array.from({ length: 20 }).map((_, index) => (
            // <Skeleton
            //   key={index}
            //   className="w-full p-y-7 border border-ring rounded-m"
            // />

            <div
              key={index}
              className="flex items-center justify-between px-1.5 w-full border border-ring h-auto rounded-md"
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
  );
};
