
import { motion } from 'framer-motion';
import { Heart, Shield, Users, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Healthcare = () => {
  const features = [
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Built-in compliance features ensure all patient data handling meets HIPAA requirements."
    },
    {
      icon: Heart,
      title: "Medical Terminology",
      description: "Advanced understanding of medical terms and healthcare procedures for accurate assistance."
    },
    {
      icon: Users,
      title: "Patient Support",
      description: "Compassionate and patient-friendly navigation assistance for healthcare websites."
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-dark text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-5 mb-6 flex items-center justify-center mx-auto">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Oralia for <span className="gradient-text">Healthcare</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Specialized for medical websites with HIPAA compliance, medical terminology understanding, and patient-friendly navigation assistance.
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-3">
              Get Healthcare Version
            </Button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="section bg-dark-accent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Healthcare-Specific Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Purpose-built for healthcare environments with specialized compliance and patient care features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-dark-card p-6 rounded-2xl border border-gray-800"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 p-3 mb-4 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Why Healthcare Providers Choose Oralia
              </h2>
              <div className="space-y-4">
                {[
                  "Reduces patient confusion on medical websites",
                  "Ensures HIPAA compliance in all interactions",
                  "Understands medical terminology and procedures",
                  "Provides compassionate patient support"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="bg-dark-card p-8 rounded-2xl border border-gray-800"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h3>
              <p className="text-gray-400 mb-6">
                Transform your healthcare website with Oralia's specialized healthcare assistant.
              </p>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                Schedule Demo
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Healthcare;
