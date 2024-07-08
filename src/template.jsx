export default function Template({ children, Head, Body, Script }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined|Material+Icons"
        />

        <link rel="icon" type="image/svg+xml" href="/rasengan.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Body>
        {children}

        <Script />
      </Body>
    </html>
  );
}
