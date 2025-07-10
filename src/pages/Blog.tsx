import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Conversational AI in Healthcare",
    excerpt: "A Large Language Model (LLM) is an artificial intelligence system trained on vast amounts of text data to understand and generate human-like language, enabling natural conversations and complex reasoning tasks.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Healthcare",
    author: "Dr. Sarah Chen",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Making E-commerce More Accessible Through Voice",
    excerpt: "How voice technology is breaking down barriers for users with disabilities in online shopping.",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "E-commerce",
    author: "Mike Johnson",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Building Inclusive AI: Our Commitment to Accessibility",
    excerpt: "The principles and practices behind creating AI that works for everyone, regardless of ability.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Accessibility",
    author: "Alex Rivera",
    image: "/placeholder.svg"
  }
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-dark text-white"
    >
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-10 bg-gradient-to-b from-dark to-dark-accent">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Insights & Updates
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover the latest in conversational AI, accessibility, and how we're making the web more inclusive
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-dark-accent/50 rounded-2xl overflow-hidden hover:bg-dark-accent/70 transition-all duration-300 group"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video bg-gradient-to-br from-oralia/20 to-oralia-dark/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-oralia text-white">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-white group-hover:text-oralia transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">By {post.author}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-oralia hover:text-white hover:bg-oralia group-hover:translate-x-1 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Blog;
