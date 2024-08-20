import NavBar from '../components/NavBar'
import JoinUs from '../components/JoinUsModule';
import BestOffers from '../components/BestOffers';
import AboutUsHomePage from '../components/AboutUsHomePage';
import ContactUs from '../components/ContactUs';
import Footer from './Footer';
const HomePage = ()=>{
    return(
        <>
        <NavBar/>
      <JoinUs/>
      <BestOffers/>
      <AboutUsHomePage/>
      <ContactUs/>
      <Footer/>
      </>
    )
}

export default HomePage;