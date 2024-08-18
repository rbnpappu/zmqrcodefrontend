import NavBar from '../components/NavBar'
import JoinUs from '../components/JoinUsModule';
import BestOffers from '../components/BestOffers';
import AboutUsHomePage from '../components/AboutUsHomePage';
import ContactUs from '../components/ContactUs';
const HomePage = ()=>{
    return(
        <>
        <NavBar/>
      <JoinUs/>
      <BestOffers/>
      <AboutUsHomePage/>
      <ContactUs/>
      </>
    )
}

export default HomePage;