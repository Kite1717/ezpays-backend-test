import { BaseContext } from "koa";
import { healthCheck } from "../helpers/healthChecker";

export default class GeneralController {
  public static async home(ctx: BaseContext): Promise<void> {
    ctx.body = "Hello";
  }

  public static async healthCheck(ctx: BaseContext): Promise<void> {
    healthCheck.setGeneralHealth("UP");
    ctx.body = healthCheck.getHealth();
  }
}
