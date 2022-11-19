import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

export default function Layout({ children}) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    )
}