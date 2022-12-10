import TopInfobar from '../components/TopInfobar';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Layout({ children}) {
    return (
      <div>
            <TopInfobar/>
            <Navigation />
            <div>
              {children}
            </div>
            <Footer />
        </div>
    )
}
