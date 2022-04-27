import Router from "@koa/router";
import { file } from './controller';
import { upload } from './helpers/fileUpload';

const protectedRouter = new Router();

// USER ROUTES
protectedRouter.post('/', upload.single('file'), file.readJsonFile);
export { protectedRouter };
