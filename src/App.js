import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Layout from "./components/Layout";
import About from "./components/About";
import Footer from "./components/Footer";
import ParticlesComponent from './components/Particles';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <div class="block">
         <ParticlesComponent id="particles"  className="particles-canvas"/>
        <About/>
        
      </div>
      <Footer/>
    </>
  );
}

export default App;
