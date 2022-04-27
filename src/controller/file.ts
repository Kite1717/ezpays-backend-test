import { Context } from 'koa';
import { validate, ValidationError } from 'class-validator';
import { FileContent } from 'file';

export default class FileController {
  public static async readJsonFile(ctx: Context): Promise<void> {
    try {
      const fileContent: Array<FileContent> = JSON.parse(ctx.file.buffer.toString());
      console.log();
    } catch (err: any) {
      console.log(`error ${err.message}`);
    }
  }
}
