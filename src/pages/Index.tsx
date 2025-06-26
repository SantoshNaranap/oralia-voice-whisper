import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Verticals from "@/components/Verticals";
import Demo from "@/components/Demo";
import Integration from "@/components/Integration";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-dark text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="verticals">
          <Verticals />
        </div>
        <motion.section 
          className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-dark-accent to-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              On a mission to make the web accessible for everyone
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Oralia is your site companion that makes the browsing journey simple and seamless, especially if you're elderly, disabled, non-english speaking, or just feeling overwhelmed with a site.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button className="bg-oralia hover:bg-oralia-dark text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-oralia/20">
                <Link to="/mission">Learn About Our Mission</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
        <div id="tryit">
          <Demo />
        </div>
        <div id="integration">
          <Integration />
        </div>
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
