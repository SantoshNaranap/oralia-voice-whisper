
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
        <Features />
        <motion.section 
          className="py-16 px-6 md:px-10 bg-gradient-to-b from-dark-accent to-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              On a mission to make the web accessible for everyone
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto"
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
              <Button className="bg-oralia hover:bg-oralia-dark text-white transition-all duration-300">
                <Link to="/mission">Learn About Our Mission</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
        <Demo />
        <Integration />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
