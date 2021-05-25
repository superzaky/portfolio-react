import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Layout from "./components/Layout";
import About from "./components/About";
import Particles from "react-particles-js";

function App() {
  return (
    <>

      <Navbar/>
      <Header/>
      <Particles
      className="particles-canvas"
        params={{
              particles: {
                  number: {
                    value: 30,
                    density: {
                      enable: true,
                      value_area: 900
                    }
                  },
                  size: {
	                  value: 3,
                    color:"#ff7d92"
	                },
                  line_linked: {
                    color: "#ff7d92",
                    size:1,
                    opacity:100
                    // width:1
            			},
          
                  shape: {
                      type: 'circle',
                      stroke: {
                        width: 6,
                        color:"#f9ab00"
                      }
                  }
              },
              interactivity: {
                      events: {
                          onhover: {
                              enable: true,
                              mode: "repulse"
                          }
                      }
              }
          }} 
      />
      <About/>
    </>
  );
}

export default App;
