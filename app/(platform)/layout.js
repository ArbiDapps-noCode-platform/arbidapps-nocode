import localFont from "next/font/local";
import { officeCodeProRegular } from "../fonts";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// const officeCodeProRegular = localFont({
//   src: "../fonts/OfficeCodePro-Regular.woff2",
// });

export const metadata = {
  title: "test",
  description: "test",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${officeCodeProRegular.className} antialiased`}
      >
        <div className="h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
