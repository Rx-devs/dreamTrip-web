import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Infobar from "../components/header/Infobar";

export default function RootLayout({ children }) {
  return (
    <>
      <Infobar />
      <Navigation />
      <ParallaxProvider>
        <main>{children}</main>
      </ParallaxProvider>
      <Footer />
    </>
  );
}
