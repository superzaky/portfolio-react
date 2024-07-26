import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Layout from "./components/Layout";
import About from "./components/About";
import Footer from "./components/Footer";
import ParticlesComponent from './components/Particles';
import Portfolio from "./components/Portfolio";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <div className="block">
        <ParticlesComponent id="particles" className="particles-canvas" />
        <About />
      </div>
      <Footer />
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
          <Outlet />
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
