import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Team />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
