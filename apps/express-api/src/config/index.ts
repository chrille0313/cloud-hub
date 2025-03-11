import dotenvExtended from 'dotenv-extended';
import dotenvParseVariables from 'dotenv-parse-variables';

const env = dotenvExtended.load({
  path: process.env.ENV_FILE,
  schema: './config/.env.schema',
  defaults: './config/.env.defaults',
  includeProcessEnv: true,
  silent: false,
  errorOnMissing: true,
  errorOnExtra: true
});

const parsedEnv = dotenvParseVariables(env);

interface Config {
  port: number;

  openApiSpecPath: string;

  logToConsole: boolean;
  logToFile: boolean;
  logFilePath: string;
}

const config: Config = {
  port: parsedEnv.PORT as number,

  openApiSpecPath: parsedEnv.OPEN_API_SPEC_PATH as string,

  logToConsole: parsedEnv.LOG_TO_CONSOLE as boolean,
  logToFile: parsedEnv.LOG_TO_FILE as boolean,
  logFilePath: parsedEnv.LOG_FILE_PATH as string
};

export default config;
