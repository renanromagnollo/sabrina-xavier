import { Env } from '@/config/environments';

export default function Analytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${Env.GA_TRACKING}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${Env.GA_TRACKING}');
            `,
        }}
      />
    </>
  );
}
