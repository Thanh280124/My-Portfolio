import Nav from "./nav";
import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";
import Tesrimonials from "./Tesrimonials";
const main = () => {
  return (
    <div className="bg-indigo-600 text-white">
      <Nav/>
      <Hero/>
      <Projects/>
      <Tesrimonials/>
      <Footer/>
    </div>
  )
}

export default main
