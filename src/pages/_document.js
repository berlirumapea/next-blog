import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="text-white bg-black pt-18">
          <Nav />
          <main>
            <Main />
          </main>
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
