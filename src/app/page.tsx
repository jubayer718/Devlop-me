import Extensive from "@/components/layout/Extensive";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Services from "@/components/services/Services";
import WorkProcess from "@/components/services/WorkProcess/WorkProcess";


export default function Home() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero/>

      {/* My Extensive Section */}
      <Extensive />

      {/* Services Section */}
      <Services />

      {/* Working Process Section */}
      <WorkProcess />
   </div>
  );
}
