import { Outlet } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'animate.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default App
