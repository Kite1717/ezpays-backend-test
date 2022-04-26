import { Context } from "koa";
import { validate, ValidationError } from "class-validator";
import { request, summary, path, body, responsesAll, tagsAll } from "koa-swagger-decorator";

@responsesAll({ 200: { description: "success"}, 400: { description: "bad request"}})
@tagsAll(["File"])
export default class FileController {

    @request("post", "/")
    @summary("Read a json file and parse content")
    public static async readJsonFile(ctx: Context): Promise<void> {

    }




}
