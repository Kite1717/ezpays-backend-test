import { Context } from 'koa';
import { validate, ValidationError } from 'class-validator';
import { contentValidator } from '../helpers/contentValidate';
import { ValidatorResponse } from 'file';
import { HResponse } from '../core/ApiResponse';

export default class FileController {
  public static async readJsonFile(ctx: Context): Promise<void> {
    let fileContent: any;
    try {
      fileContent = JSON.parse(ctx.file.buffer.toString());
    } catch (e: any) {
      new HResponse(422, 'File parse error', { errors: [e.message] }).send(ctx);
    }
    try {
      const validateResult: ValidatorResponse = contentValidator(fileContent);
      if (!validateResult.isValid) {
        new HResponse(400, validateResult.message, {
          error: true,
          content: fileContent,
        }).send(ctx);
      } else {
        new HResponse(200, validateResult.message, {
          error: false,
          content: fileContent,
        }).send(ctx);
      }
    } catch (err: any) {
      new HResponse(500, err?.message, null).send(ctx);
    }
  }
}
