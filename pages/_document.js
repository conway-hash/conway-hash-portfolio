import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="favicon/favicon.ico" />
        <link rel="icon" href="favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="favicon/android-chrome-512x512.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

