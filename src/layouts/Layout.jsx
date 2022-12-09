import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Layout({ children}) {
    return (
      <div>
            <Navigation />
            <div className="pt-0 md:pt-12 lg:pt-16">
              {children}
            </div>
            <Footer />
        </div>
    )
}
