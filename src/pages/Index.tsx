
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Integration from "@/components/Integration";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <section className="py-16 px-6 md:px-10 bg-gradient-to-b from-dark-accent to-dark">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              On a mission to make the web accessible for everyone
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Oralia is your site companion that makes the browsing journey simple and seamless, especially if you're elderly, disabled, non-english speaking, or just feeling overwhelmed with a site.
            </p>
            <Button className="bg-oralia hover:bg-oralia-dark text-white">
              <Link to="/mission">Learn About Our Mission</Link>
            </Button>
          </div>
        </section>
        <Demo />
        <Integration />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
