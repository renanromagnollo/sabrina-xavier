import { buildEnvironment, Environment } from "@/config";

export default function Analytics() {
  const env: Environment = buildEnvironment()
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${env.googleAnalytics.gaTracking}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${env.googleAnalytics.gaTracking}');
            `,
        }}
      />
    </>
  );
}
