
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Building, ShoppingCart, BrainCircuit, Briefcase } from 'lucide-react';

const verticals = [
  {
    title: "Healthcare",
    description: "Specialized for medical websites with HIPAA compliance, medical terminology understanding, and patient-friendly navigation assistance.",
    icon: Heart,
    color: "from-red-500 to-red-600",
    features: ["HIPAA Compliant", "Medical Terminology", "Patient Support"]
  },
  {
    title: "Insurance",
    description: "Tailored for insurance platforms with policy explanations, claims guidance, and regulatory compliance support.",
    icon: Building,
    color: "from-blue-500 to-blue-600",
    features: ["Policy Guidance", "Claims Support", "Regulatory Compliant"]
  },
  {
    title: "E-commerce",
    description: "Optimized for online stores with product recommendations, shopping assistance, and checkout support.",
    icon: ShoppingCart,
    color: "from-purple-500 to-purple-600",
    features: ["Product Discovery", "Shopping Assistant", "Checkout Help"]
  },
  {
    title: "Neurodivergence",
    description: "Designed with accessibility in mind, featuring sensory-friendly interactions and cognitive load reduction.",
    icon: BrainCircuit,
    color: "from-green-500 to-green-600",
    features: ["Sensory Friendly", "Cognitive Support", "Accessibility First"]
  },
  {
    title: "Enterprise",
    description: "Built for corporate environments with advanced security, custom integrations, and enterprise-grade features.",
    icon: Briefcase,
    color: "from-orange-500 to-orange-600",
    features: ["Enterprise Security", "Custom Integration", "Advanced Analytics"]
  }
];

const Verticals = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="verticals" className="section bg-dark-accent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
        ref={ref}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Customized for Every Industry
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Oralia adapts to your specific industry needs with specialized versions that understand your domain, compliance requirements, and user expectations.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {verticals.map((vertical, index) => {
          const IconComponent = vertical.icon;
          return (
            <motion.div 
              key={index} 
              className="bg-dark-card p-6 rounded-2xl shadow-md border border-gray-800 hover:border-oralia/20 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-oralia/10 relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Gradient background overlay */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${vertical.color} opacity-5`}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vertical.color} p-3 mb-4 flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">{vertical.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{vertical.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {vertical.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-oralia/10 text-oralia text-xs rounded-full border border-oralia/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <p className="text-gray-400 mb-6">
          Don't see your industry? We create custom solutions for any vertical.
        </p>
        <motion.button 
          className="bg-oralia hover:bg-oralia-dark text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-oralia/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request Custom Solution
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Verticals;
