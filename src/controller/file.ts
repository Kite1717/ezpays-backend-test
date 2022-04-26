import { Context } from "koa";
import { validate, ValidationError } from "class-validator";
import { request, summary, path, body, responsesAll, tagsAll } from "koa-swagger-decorator";

@responsesAll({ 200: { description: "success"}, 400: { description: "bad request"}})
@tagsAll(["File"])
export default class FileController {

    @request("post", "/")
    @summary("Read a json file and parse content")
    public static async readJsonFile(ctx: Context): Promise<void> {

        try {
            console.log('ctx.request.file', ctx.file);
           // console.log('ctx.file', ctx.file);
            console.log('ctx.request.body', ctx.request.body);
        } catch(err) {
            console.log(`error ${err.message}`)
            await ctx.render('error', {message: err.message})
        }

    }




}
