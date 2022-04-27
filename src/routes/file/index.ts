import Router from '@koa/router';
import { file } from '../../controller';
import { upload } from '../../helpers/fileUpload';

const router = new Router();

// file routes
router.post('/file', upload.single('file'), file.readJsonFile);
export default router;
