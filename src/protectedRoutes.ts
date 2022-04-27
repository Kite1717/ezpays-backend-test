import Router from "@koa/router";
import { file } from './controller';
import { upload } from './helpers/fileUpload';

const protectedRouter = new Router();

// USER ROUTES
protectedRouter.post('/', upload.single('file'), file.readJsonFile);

// Swagger endpoint

// mapDir will scan the input dir, and automatically call router.map to all Router Class


export { protectedRouter };
