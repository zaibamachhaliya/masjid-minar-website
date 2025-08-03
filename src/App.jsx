import Pagecontainer from './Pagecontainer';
import './App.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

     AOS.refresh(); 
  }, []);


  return (
    <>
      <Pagecontainer></Pagecontainer>
    </>
  )
}

export default App;
