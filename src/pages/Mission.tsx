
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accessibility, MessageCircle, User } from "lucide-react";

const Mission = () => {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Header />
      <main>
        {/* Hero Statement */}
        <section className="py-24 px-6 md:px-10 bg-gradient-to-b from-dark to-dark-accent overflow-hidden relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Oxford Origin Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">OX</span>
              </div>
              <span className="text-sm text-gray-300">Born from University of Oxford startup incubator</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
              <span className="gradient-text">AI-powered platform</span> that transforms website experiences
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Oralia is an intelligent AI platform that makes websites more accessible and user-friendly. From voice interactions to smart navigation, we help every user find what they need.
            </p>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-40 left-10 w-64 h-64 bg-oralia/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-oralia/10 rounded-full blur-3xl"></div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 px-6 md:px-10 bg-dark-accent overflow-hidden relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Website accessibility is a major problem.
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team surveyed users on their web accessibility experiences:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Stat 1 */}
              <div className="bg-dark p-8 rounded-2xl border border-gray-800 text-center">
                <div className="bg-oralia/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Accessibility className="w-10 h-10 text-oralia" />
                </div>
                <h3 className="text-5xl font-bold text-oralia mb-4">33.3%</h3>
                <p className="text-gray-400">
                  of time users abandon a web page because they feel overwhelmed by its content
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-dark p-8 rounded-2xl border border-gray-800 text-center">
                <div className="bg-oralia/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-oralia" />
                </div>
                <h3 className="text-5xl font-bold text-oralia mb-4">4.58min</h3>
                <p className="text-gray-400">
                  before users abandon a web page to look elsewhere
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-dark p-8 rounded-2xl border border-gray-800 text-center">
                <div className="bg-oralia/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <User className="w-10 h-10 text-oralia" />
                </div>
                <h3 className="text-5xl font-bold text-oralia mb-4">2 stars</h3>
                <p className="text-gray-400">
                  rating out of 5 users give to existing chatbot support solutions
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
                This is where AI can make a difference...
              </h3>
              <div className="flex justify-center">
                <Button className="bg-oralia hover:bg-oralia-dark text-white px-8 py-6 text-lg">
                  See Our AI Solution
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-6 md:px-10 bg-dark">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                How Oralia's AI Platform Transforms Accessibility
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                By combining multiple AI capabilities including voice interaction, intelligent navigation, and contextual understanding, Oralia creates a more inclusive web for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-white">AI-Powered Understanding</h3>
                <p className="text-gray-300 mb-6">
                  Our AI platform analyzes website content and user behavior to provide personalized assistance that adapts to individual needs and preferences.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-white">Voice as a Key Feature</h3>
                <p className="text-gray-300 mb-6">
                  Voice interaction is one of our core AI features, enabling natural conversations that break down barriers for users with disabilities, language challenges, or technology difficulties.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-white">Intelligent Assistance</h3>
                <p className="text-gray-300 mb-6">
                  Our AI doesn't just respond to questions—it proactively guides users, predicts their needs, and provides contextual help throughout their journey.
                </p>
              </div>
              
              <div className="order-1 md:order-2 bg-dark-card rounded-2xl p-8 border border-gray-800 relative max-w-md mx-auto animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-oralia/20 to-oralia-dark/20 rounded-2xl blur-xl"></div>
                <div className="relative space-y-4">
                  <div className="bg-dark-accent p-4 rounded-xl max-w-[80%]">
                    <p className="text-sm text-gray-300">I'm having trouble finding pricing information for the enterprise plan.</p>
                  </div>
                  
                  <div className="bg-oralia/20 p-4 rounded-xl ml-auto max-w-[80%]">
                    <p className="text-sm text-gray-300">I'll help you with that right away. The enterprise pricing is located in the 'Solutions' section. Would you like me to guide you through it step by step?</p>
                  </div>
                  
                  <div className="bg-dark-accent p-4 rounded-xl max-w-[80%]">
                    <p className="text-sm text-gray-300">Yes, please. Can you also tell me what customization options are available?</p>
                  </div>
                  
                  <div className="bg-oralia/20 p-4 rounded-xl ml-auto max-w-[80%]">
                    <p className="text-sm text-gray-300">Of course! Enterprise plans include custom branding, API integration, and dedicated support. I can walk you through each feature or connect you with a representative if you prefer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;
