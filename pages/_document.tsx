import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es" className="w-full h-screen">
      <Head>
        <meta charSet="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/favicoin/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicoin/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/titlle/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/favicoin/site.webmanifest"></link>
        <meta name="author" content="@RepolloEzzz" />
        <meta
          name="description"
          content="Respitorio de materias que se ven en la universidad o simplemente temas que son relevantes en algunos aspectos. Este sitio tiene contenido que en otras páginas no encontraras o en su defecto encontraras más de lo que
        quieres😳"
        />
        <meta
          name="keywords"
          content="Temas de matemáticas, Temas de física, Temas de programación"
        />
      </Head>
      <body data-theme="forest">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
