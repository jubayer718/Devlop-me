import Extensive from "@/components/layout/Extensive";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero/>

      {/* My Extensive Section */}
      <Extensive />
   </div>
  );
}
