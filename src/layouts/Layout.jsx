import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Layout({ children}) {
    return (
      <div>
            <Navigation />
            <div className="pt-16">
              {children}
            </div>
            <Footer />
        </div>
    )
}
