import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import NavBar from "./components/Navbar/NavBar";
import Projects from "./components/Project/projects";
import Skills from "./components/Skills/skills";
import Details from "./components/Details/details";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
return(
    <div className="App">
      <NavBar />
      <About />
      <Details/>
      <Skills />
      <Projects />
      <Contact />
    </div> 
);
}
export default App;