import Router from '@koa/router';
import { file } from '../../controller';
import { handleJsonFile } from '../../helpers/handleJsonFile';

const router = new Router();

// file routes
router.post('/file', handleJsonFile, file.readJsonFile);
export default router;
