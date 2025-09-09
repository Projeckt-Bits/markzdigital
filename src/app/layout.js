// src/app/layout.js

import { Poppins, Lora } from 'next/font/google'; // Import both fonts
import "./globals.css";
import Navbar from "../../components/Navbar";

// Configure Poppins for headings
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '900'],
  variable: '--font-poppins', // Create a CSS variable
});

// Configure Lora for body text
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-lora', // Create another CSS variable
});

export const metadata = {
  title: "Markz Digital",
  description: "A modern marketing website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply both font variables to the body */}
      <body className={`${poppins.variable} ${lora.variable}`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}