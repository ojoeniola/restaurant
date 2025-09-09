import AboutUs from "@/component/AboutUs";
import Hero from "@/component/Hero";
import Menu from "@/component/Menu";
import Navbar from "@/component/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
    </div>
  );
}
