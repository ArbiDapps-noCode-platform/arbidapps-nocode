import localFont from "next/font/local";
import { officeCodeProRegular } from "./fonts";
import "./globals.css";

// const officeCodeProRegular = localFont({
//   src: "./fonts/OfficeCodePro-Regular.woff2",
// });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata = {
  title: "ArbiDapps - noCode Platform",
  description: "Create your Dapps with noCode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${officeCodeProRegular.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
