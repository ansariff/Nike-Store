import Nav from "../components/Nav"
import Hero from "./Hero"
import PopularProduct from "./PopularProduct"
import SuperQuality from "./SuperQuality"
import SpecialOffer from "./SpecialOffer"
import Services from "./Services"
import CustomerReview from "./CustomerReview";
import Liked from "./Liked"
import Footer from "./Footer"

const App = () => (
  <main className="relative">
  <Nav/>
  <section className="xl:padding-l wide:padding-r padding-b">
    <Hero/>
  </section>

  <section className="padding">
    <PopularProduct/>
  </section>
  <section className="padding">
    <SuperQuality/>
  </section>
  <section className="padding-x py-10">
    <Services/>
  </section>
  <section className="padding">
    <SpecialOffer/>
  </section>
  <section className="bg-pale-blue padding">
    <CustomerReview/>
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
    <Liked/>
  </section>
  <section className="bg-black padding-x padding-x padding-t pb-8">
    <Footer/>
  </section>
  </main>
)

export default App;