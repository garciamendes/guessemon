import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";

export const SendTry = () => {
  const handleSubmit = async (data: FormData) => {
    "use server";
    const title = data.get("title");

    if (!title) return;

    console.log(title);
    // Send try to the server
  };

  return (
    <form action={handleSubmit} className="flex items-center gap-2.5 mt-2.5">
      <Input
        className="h-12 md:text-2xl"
        type="text"
        name="title"
        placeholder="Digite o nome do Pokémon"
      />

      <Button
        variant="outline"
        size="lg"
        type="submit"
        className="cursor-pointer h-12 text-4xl"
      >
        <SendHorizontal size={26} />
      </Button>
    </form>
  );
};
