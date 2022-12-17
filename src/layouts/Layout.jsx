import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TopInfobar from '../components/TopInfobar';

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
