import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TopInfobar from "../components/TopInfobar";

export default function RootLayout({ children }) {
  return (
    <>
      <TopInfobar />
      <Navigation />
      <ParallaxProvider>
        <main>{children}</main>
      </ParallaxProvider>
      <Footer />
    </>
  );
}
