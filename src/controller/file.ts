import { Context } from 'koa';
import { contentValidator } from '../helpers/contentValidate';
import { ValidatorResponse } from 'file';
import { HResponse } from '../core/ApiResponse';

export default class FileController {
  public static async readJsonFile(ctx: Context): Promise<void> {
    try {
      let fileContent: any = JSON.parse(ctx.file.buffer.toString());
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
