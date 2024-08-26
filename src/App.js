import About from "./components/about";
import Contact from "./components/contact";
import NavBar from "./components/NavBar";
import Projects from "./components/projects";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
return(
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div> 
);
}
export default App;