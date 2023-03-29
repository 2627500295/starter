import Document, { Html, Head, Main, NextScript } from "next/document";

import {
  APP_NAME,
  APP_VERSION,
  APP_FRAMEWORK,
  STAGE,
  NODE_ENV,
  LAST_MODIFIED,
  COMMIT,
} from "../constants/env";

class WebsiteDocument extends Document {
  public override render() {
    return (
      <Html
        lang="zh-Hans-CN"
        data-app-name={APP_NAME}
        data-app-version={APP_VERSION}
        data-app-framework={APP_FRAMEWORK}
        data-stage={STAGE}
        data-node-env={NODE_ENV}
        data-last-modified={LAST_MODIFIED}
        data-commit-id={COMMIT}
        className="no-js"
      >
        <Head>
          <meta charSet="utf-8" />

          <script
            dangerouslySetInnerHTML={{
              __html: `const documentElement = document.documentElement; documentElement.classList.remove('no-js'); documentElement.classList.add("js");`,
            }}
          />
        </Head>

        <body className="m-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WebsiteDocument;
