import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
