
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <motion.section 
      className="py-20 px-6 md:px-10 bg-gradient-to-r from-oralia-dark to-oralia relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute -bottom-40 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ready to give your website a voice?
        </motion.h2>
        <motion.p 
          className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Join the growing number of websites using Oralia to create more engaging, accessible, and helpful user experiences.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button className="bg-white text-oralia hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
            Start Free Trial
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 transition-all duration-300 hover:scale-105">
            <Link to="/mission">Learn Our Mission</Link>
          </Button>
        </motion.div>
        <motion.p 
          className="text-white/70 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          No credit card required. 14-day free trial.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CTA;
