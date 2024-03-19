import Image from "next/image";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

export default function Home() {
  return (
   <div>
      <header>
        <Navbar/>
        <Hero/>
      </header>
   </div>
  );
}
