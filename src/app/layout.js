import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Ótica Diniz - SB",
  description: "Link Three para ótica Diniz São bento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
