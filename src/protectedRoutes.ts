import { SwaggerRouter } from 'koa-swagger-decorator';
import { file } from './controller';
import { upload } from './helpers/fileUpload';

const protectedRouter = new SwaggerRouter();

// USER ROUTES
protectedRouter.post('/', upload.single('file'), file.readJsonFile);

// Swagger endpoint
protectedRouter.swagger({
  title: 'ezpays-backend-test',
  description: 'EZPays Backend Test',
  version: '0.1.0',
});

// mapDir will scan the input dir, and automatically call router.map to all Router Class
protectedRouter.mapDir(__dirname);

export { protectedRouter };
