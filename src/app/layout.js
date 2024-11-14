import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Markz Digital",
  description: "Your Messenger to the World!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-adsense-account"
          content="ca-pub-8293804271257945"
        ></meta>
      </Head>
      <body>{children}</body>
    </html>
  );
}
