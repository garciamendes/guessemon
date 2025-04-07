import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { SendTry } from "./form";
import Header from "./header";
import { ListAttempts } from "./listAttempts";
import { Tips } from "./tips";

export default async function Home() {
  return (
    <div className="h-screen flex flex-col gap-4">
      <Header />

      <SendTry />

      <div className="flex-1 flex flex-col gap-2">
        <Suspense
          fallback={
            <div className="flex-1 flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Tips />
        </Suspense>

        <Suspense
          fallback={Array.from({ length: 20 }).map((_, index) => {
            return (
              <Skeleton
                key={index}
                className="w-full h-[50px] border border-ring rounded-m"
              />
            );
          })}
        >
          <ListAttempts />
        </Suspense>
      </div>
    </div>
  );
}
