import { AppEnvType } from "./app-env";
import { Environment } from "./environment";

export function buildEnvironment(): Environment {

  const appEnv = (process.env.APP_ENV || process.env.NEXT_PUBLIC_APP_ENV) as AppEnvType

  return {
    app: {
      env: appEnv
    },
    googleAnalytics: {
      gaTracking: process.env.GOOGLE_ANALYTICS_TRACKING as string
    },
    hygraph: {
      accessToken: process.env.NEXT_PUBLIC_HYGRAPH_ACCESS_TOKEN as string,
      apiUrl: process.env.NEXT_PUBLIC_HYGRAPH_API_URL as string
    }
  }
}