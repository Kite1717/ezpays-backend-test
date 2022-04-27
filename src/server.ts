import dotenv from "dotenv";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import helmet from "koa-helmet";
import cors from "@koa/cors";
import winston from "winston";
import "reflect-metadata";
import { logger } from "./logger";

import config from "./config";
import fileRoutes from "./routes/file";
import generalRoutes from "./routes/general";

dotenv.config({ path: ".env" });

const app = new Koa();

// Provides important security headers
app.use(helmet());

// Enable cors with default options
app.use(cors());

// Logger middleware -> use winston as logger (logging.ts with config)
app.use(logger(winston));

// Enable bodyParser
app.use(
  bodyParser({
    jsonLimit: "10mb",
    onerror: function (_, ctx) {
      ctx.throw("body parse error", 422);
    },
  }),
);

app.use(fileRoutes.routes()).use(fileRoutes.allowedMethods());
app.use(generalRoutes.routes()).use(generalRoutes.allowedMethods());

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
