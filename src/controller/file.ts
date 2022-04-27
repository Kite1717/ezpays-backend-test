import { Context } from 'koa';
import { validate, ValidationError } from 'class-validator';
import { contentValidator } from '../helpers/contentValidate';
import { ValidatorResponse } from 'file';

export default class FileController {
  public static async readJsonFile(ctx: Context): Promise<void> {
    try {
      const fileContent: any = JSON.parse(ctx.file.buffer.toString());

      console.log(contentValidator(fileContent));
      console.log();

      const validateResult: ValidatorResponse = contentValidator(fileContent);
      if (!validateResult.isValid) {
        ctx.status = 400;
        ctx.body = {
          error: true,
          message: validateResult.message,
          content: fileContent,
        };
      }
      else{
        ctx.status = 200;
        ctx.body = {
          error: false,
          message: validateResult.message,
          content: fileContent,
        };
      }
    } catch (err: any) {
      console.log(`error ${err.message}`);
    }
  }
}
