import { Separator } from "@radix-ui/react-separator";

export const Tips = async () => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="w-full flex items-center gap-2.5">
        <Separator
          orientation="horizontal"
          className="bg-slate-700 h-[1px] flex-1"
        />

        <strong className="text-[18px]">O Pokémon</strong>

        <Separator
          orientation="horizontal"
          className="bg-slate-700 h-[1px] flex-1"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="flex w-full justify-center md:w-max justify-self-center col-span-1 md:justify-self-start items-center gap-3 border border-ring rounded-sm py-1.5 px-4">
          <span className="text-slate-400">Tem Altura: </span>
          <strong className="text-[18px]">10</strong>
        </div>

        <div className="flex w-full justify-center md:w-max justify-self-center col-span-1 md:justify-self-center items-center gap-3 border border-ring rounded-sm py-1.5 px-4">
          <span className="text-slate-400">É do tipo: </span>
          <strong className="text-[18px]">Grama</strong>
        </div>

        <div className="flex w-full justify-center md:w-max justify-self-center col-span-1 sm:col-span-2 md:col-span-1 md:justify-self-end items-center gap-3 border border-ring rounded-sm py-1.5 px-4">
          <span className="text-slate-400">Habilidade principal: </span>
          <strong className="text-[18px]">Choque do trovão</strong>
        </div>
      </div>
    </div>
  );
};
