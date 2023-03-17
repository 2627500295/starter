import Document, { Html, Head, Main, NextScript } from "next/document";

class WebsiteDocument extends Document {
  public override render() {
    return (
      <Html
        lang="zh-CN"
        data-app-name={process.env.APP_NAME}
        data-app-version={process.env.APP_VERSION}
        data-app-framework={process.env.APP_FRAMEWORK}
        data-stage={process.env.STAGE}
        data-node-env={process.env.NODE_ENV}
        data-last-modified={process.env.LAST_MODIFIED}
        data-commit-id={process.env.COMMIT}
        className="no-js"
      >
        <Head>
          <meta charSet="utf-8" />

          <script
            dangerouslySetInnerHTML={{
              __html: `const documentElement = document.documentElement; documentElement.classList.remove('no-js'); documentElement.classList.add("js");`,
            }}
          />

          {/* <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, viewport-fit=cover"
          /> */}
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WebsiteDocument;
