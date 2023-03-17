import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="zh-Hans">
      <Head />

      <body className='m-0 text-3.5 dark:bg-black bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;