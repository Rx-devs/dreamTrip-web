import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Layout({ children}) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    )
}