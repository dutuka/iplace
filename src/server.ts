<<<<<<< HEAD
import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";
import { inferAsyncReturnType } from "@trpc/server";

const app = express();
const PORT = Number(process.env.PORT) || 3000;
=======
import express from 'express'
import { getPayloadClient } from './get-payload'
import { nextApp, nextHandler } from './next-utils'
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './trpc'
import { inferAsyncReturnType } from '@trpc/server'
import bodyParser from 'body-parser'
import { IncomingMessage } from 'http'
import { stripeWebhookHandler } from './webhooks'
import nextBuild from 'next/dist/build'
import path from 'path'
import { PayloadRequest } from 'payload/types'
import { parse } from 'url'

const app = express()
const PORT = Number(process.env.PORT) || 3000
>>>>>>> master

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
<<<<<<< HEAD
});

export type CreateExpressContext = inferAsyncReturnType<typeof createContext>;

const start = async () => {
=======
})

export type ExpressContext = inferAsyncReturnType<
  typeof createContext
>

export type WebhookRequest = IncomingMessage & {
  rawBody: Buffer
}

const start = async () => {
  const webhookMiddleware = bodyParser.json({
    verify: (req: WebhookRequest, _, buffer) => {
      req.rawBody = buffer
    },
  })

  app.post(
    '/api/webhooks/stripe',
    webhookMiddleware,
    stripeWebhookHandler
  )

>>>>>>> master
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
<<<<<<< HEAD
        cms.logger.info(`Admin Url ${cms.getAdminURL()}`);
      },
    },
  });

  app.use(
    "/api/trpc",
=======
        cms.logger.info(`Admin URL: ${cms.getAdminURL()}`)
      },
    },
  })

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(
        'Next.js is building for production'
      )

      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))

      process.exit()
    })

    return
  }

  const cartRouter = express.Router()

  cartRouter.use(payload.authenticate)

  cartRouter.get('/', (req, res) => {
    const request = req as PayloadRequest

    if (!request.user)
      return res.redirect('/sign-in?origin=cart')

    const parsedUrl = parse(req.url, true)
    const { query } = parsedUrl

    return nextApp.render(req, res, '/cart', parsedUrl.query)
  })

  app.use('/cart', cartRouter)
  app.use(
    '/api/trpc',
>>>>>>> master
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
<<<<<<< HEAD
  );
  app.use((req, res) => nextHandler(req, res));
  nextApp.prepare().then(() => {
    payload.logger.info(`Next.js started`);
=======
  )

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Next.js started')
>>>>>>> master

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
<<<<<<< HEAD
      );
    });
  });
};

start();
=======
      )
    })
  })
}

start()
>>>>>>> master
