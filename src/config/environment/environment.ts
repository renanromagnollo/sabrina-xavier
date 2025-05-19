import { AnalyticsEnv } from "./analytics-env";
import { AppEnv } from "./app-env";
import { HygraphEnv } from "./hygraph-env";

export type Environment = {
  app: AppEnv
  googleAnalytics: AnalyticsEnv
  hygraph: HygraphEnv
}