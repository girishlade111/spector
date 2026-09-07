import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import MoreProjects from "@/components/MoreProjects";
import Services from "@/components/Services";
import Recognition from "@/components/Recognition";
import Showreel from "@/components/Showreel";
import Process from "@/components/Process";
import Expertise from "@/components/Expertise";
import Testimonials from "@/components/Testimonials";
import CaseStudy from "@/components/CaseStudy";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SelectedProjects />
      <MoreProjects />
      <Services />
      <Recognition />
      <Showreel />
      <Process />
      <Expertise />
      <Testimonials />
      <CaseStudy />
      <Pricing />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}
