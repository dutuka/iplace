<<<<<<< HEAD
import { appRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,

    //@ts-expect-error context already pass from express middleware
    createContext: () => ({}),
  });
};

=======
import { appRouter } from '@/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextApiResponse } from 'next';

const handler = async (req: Request, res: NextApiResponse) => {
  try {
    const result = await fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter,
      // @ts-expect-error context already passed from express middleware
      createContext: () => ({}),
    });

        // Returns the response
        res.status(200).json(result);
      } catch (error) {
        // Handle any errors
        console.error('Route handler error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    
>>>>>>> master
export { handler as GET, handler as POST };
