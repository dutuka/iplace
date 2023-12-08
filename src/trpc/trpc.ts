import { CreateExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<CreateExpressContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
