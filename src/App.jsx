import Navbar from "./components/Navbar"
import Home  from "./components/Home"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
  /*import ProjectCard from "./components/Project/ProjectCard"*/
/*import Projects from "./components/Project/Project"*/
import Footer from "./components/Footer/Footer"

function App() {
  
  return (
    
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Footer />
      </div>
    
  )
}

export default App
