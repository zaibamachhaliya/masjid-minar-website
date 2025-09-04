import HeroSection from "./HeroSection";
import Introduction from "./Introduction";
import ProductsSection from "./ProductsSection";
import ConnectSection from "./ConnectSection";

function Home(){
    return (
      <main>
         <HeroSection/>
         <Introduction/>
         <ProductsSection/>
         <ConnectSection/>
      </main>
    );
}

export default Home;