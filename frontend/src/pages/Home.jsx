import Hero from "../components/hero";
import Features from "../components/features";
import ProductGrid from "../components/products";
import Footer from "../components/footer";
import GetStartedSection from "../components/cta";

export default function Home  (){
    return(
        <>
        <Hero/>
        <ProductGrid/>
        <GetStartedSection/>
        <Features/>
        <Footer/>
        </>
    )
};