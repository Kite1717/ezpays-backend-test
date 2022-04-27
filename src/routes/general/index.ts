import Router from "@koa/router";
import { general } from "../../controller";

const router = new Router();

// general routes
router.get("/", general.home);
router.get("/health", general.healthCheck);

export default router;
