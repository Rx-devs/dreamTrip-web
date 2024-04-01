import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/Footer";
import Infobar from "../components/header/Infobar";
import Navbar from "../components/header/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <Infobar />
        <Navbar />
      </header>
      <ParallaxProvider>
        <main>{children}</main>
      </ParallaxProvider>
      <Footer />
    </>
  );
}
