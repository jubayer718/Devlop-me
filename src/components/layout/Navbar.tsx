import { GoArrowRight } from "react-icons/go"

import Button from "../common/Button";
import Link from "next/link";
import Container from "./Container";


const Navbar = () => {
  const NavLinks = (
    <div className="flex justify-between items-center text-lg gap-6 font-semibold font-sporting">
      <Link className="hover:underline hover:text-green-600"  href="/">Home</Link>
      <Link className="hover:underline hover:text-green-600" href="/about">About</Link>
      <Link className="hover:underline hover:text-green-600" href="/portfolio">Portfolio</Link>
      <Link className="hover:underline hover:text-green-600" href="/blog">Blog</Link>
    </div>
  );
  return (
 
    <nav className=" sticky top-0  rounded-b-4xl z-50 bg-whit  bg-transparent">
      <Container>
      <div className="flex justify-between items-center max-w-[1920px] w-full mx-auto">
        <h1 className="font-bold text-4xl">DEVLOP.ME</h1>
        <div className="flex items-center gap-4">
        <ul >
            { NavLinks}
          </ul>
          
         <Button className="flex items-center gap-2 font-semibold font-sporting" type="button" label="Start Project" outlined icon={GoArrowRight}/>
       </div>
      </div>
        </Container>
    </nav>
    
  );
};

export default Navbar;