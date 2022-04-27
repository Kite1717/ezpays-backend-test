import { nodeEnvironment, port } from "./envVariables";

export interface Config {
  port: number;
  debugLogging: boolean;
}

const isDevMode = nodeEnvironment == "development";

const config: Config = {
  port,
  debugLogging: isDevMode,
};

export default config;
