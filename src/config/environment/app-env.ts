import { ValueOf } from "next/dist/shared/lib/constants";

export enum AppEnvType {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production'
}

export type Env = ValueOf<typeof AppEnvType>

export type AppEnv = {
  env: Env
}