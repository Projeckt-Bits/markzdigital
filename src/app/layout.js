import "./globals.css";

export const metadata = {
  title: "Markz Digital",
  description: "Your Bridge to the World!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
