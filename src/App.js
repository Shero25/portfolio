import About from "./components/about";
import Contact from "./components/contact";
import NavBar from "./components/NavBar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Details from "./components/details";
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