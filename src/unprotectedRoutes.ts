import Router from "@koa/router";
import { general } from "./controller";

const multer = require('@koa/multer');
const upload = multer();

const unprotectedRouter = new Router();

// Health check route
unprotectedRouter.get("/health", general.helloWorld);

export { unprotectedRouter };