
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/MainNavbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Skills from './pages/Skills';
function App() {
  return (
    <div className="App">
     < MainNavbar />
<Homepage />
<About />
<Skills />

    </div>
  );
}

export default App;
