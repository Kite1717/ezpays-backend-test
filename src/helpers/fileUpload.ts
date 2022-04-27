import multer from '@koa/multer';

//Options to limit file size and file extension
export const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter(_, file, cb) {
    if (!file.originalname.match(/\.(json)$/)) {
      return cb(new Error('Invalid file type'), false);
    }
    cb(null, true);
  },
});
