import Contact from "./sections/Contact";
import CTA from "./sections/CTA";
import Fleet from "./sections/Fleet";
import Hero from "./sections/Hero";
import Operations from "./sections/Operations";
import Services from "./sections/Services";
import Voyage from "./sections/Voyage";

export default function App() {
  return (
    <>
      <Hero />
      <Operations />
      <Fleet />
      <Services />
      <Voyage />
      <CTA />
      <Contact />
    </>
  );
}