import multer from '@koa/multer';
import { Context, Next } from 'koa';
import { HResponse } from '../core/ApiResponse';

//Options to limit file size and file extension
const jsonUpload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter(_, file, cb) {
    if (!file.originalname.match(/\.(json)$/)) {
      return cb(new Error('Invalid file type'), false);
    }
    cb(null, true);
  },
}).single('file');

export const handleJsonFile = async (ctx: Context, next: Next) => {
  try {
    await jsonUpload(ctx, next);
  } catch (e: any) {
    new HResponse(415, e?.message, null).send(ctx);
  }
};
