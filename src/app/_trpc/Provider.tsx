"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { trpc } from "./client";
import { httpBatchLink } from "@trpc/client";
import { SessionProvider } from "next-auth/react";


export default function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      {" "}
        <SessionProvider>
              {children}
          </SessionProvider>
      {" "}
    </QueryClientProvider>
</trpc.Provider>
  );
}
