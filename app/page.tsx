import Hero from "@/components/Hero";
import Recentproject from "@/components/Recentproject";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/ui/Grid";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
    <div className="max-w-7xl w-full">
     <FloatingNav navItems={navItems}></FloatingNav>
     <Hero></Hero>
     <Grid></Grid>
     <Recentproject></Recentproject>
     <Experience></Experience>
     <Approach></Approach>
     <Footer></Footer>
    </div>
    </main>
  );
}
