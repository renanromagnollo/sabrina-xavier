import { AnalyticsEnv } from "./analytics-env";
import { AppEnv } from "./app-env";
import { HygraphEnv } from "./hygraph-env";

// export const Env = {
//   GA_TRACKING: process.env.GA_TRACKING,

//   HYGRAPH_API_URL: process.env.HYGRAPH_API_URL,
//   HYGRAPH_TOKEN: process.env.HYGRAPH_TOKEN,

//   INSTAGRAM_API_MEDIA_URL: process.env.INSTAGRAM_API_MEDIA_URL,
//   INSTAGRAM_TESTER_TOKEN: process.env.INSTAGRAM_TESTER_TOKEN,
// };


export type Environment = {
  app: AppEnv
  googleAnalytics: AnalyticsEnv
  hygraph: HygraphEnv
}