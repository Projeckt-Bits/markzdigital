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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-8293804271257945" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
