import CosmicBackground from "./components/CosmicBackground";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PortfolioApiAgent from "./components/PortfolioApiAgent";
import Contact from "./sections/Contact";
import EngineeringPipeline from "./sections/EngineeringPipeline";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import PortfolioTopology from "./sections/PortfolioTopology";
import ServiceRegistry from "./sections/ServiceRegistry";
import TechnicalStack from "./sections/TechnicalStack";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CosmicBackground />
      <Navbar />
      <main>
        <Hero />
        <EngineeringPipeline />
        <PortfolioTopology />
        <ServiceRegistry />
        <Experience />
        <TechnicalStack />
        <Contact />
      </main>
      <Footer />
      <PortfolioApiAgent />
    </div>
  );
}
