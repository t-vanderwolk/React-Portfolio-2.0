
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/MainNavbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
     < MainNavbar />
<Homepage />
<About />
<Skills />
  <Projects />
  <Contact />
  





    </div>
  );
}

export default App;
