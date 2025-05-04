
const testimonials = [
  {
    quote: "Oralia has completely transformed our customer support experience. The voice interaction feels natural and our users love being able to simply ask for what they need.",
    author: "Sarah Johnson",
    role: "Director of Customer Experience",
    company: "TechNova"
  },
  {
    quote: "The technical capabilities are impressive, but what really stands out is how empathetic the responses feel. It's like having a helpful human guide on our site 24/7.",
    author: "Michael Chen",
    role: "CMO",
    company: "Bluefin Solutions"
  },
  {
    quote: "Implementation was incredibly simple, and the impact was immediate. Our support tickets decreased by 35% in the first month alone.",
    author: "Jessica Anderson",
    role: "Head of IT",
    company: "Atlas Group"
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Innovative Companies
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See what our customers have to say about their experience with Oralia.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
          >
            <div className="absolute -top-4 left-8 text-oralia text-5xl">"</div>
            <p className="text-gray-700 mb-6 pt-6">{testimonial.quote}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-oralia/20 rounded-full flex items-center justify-center text-oralia font-semibold">
                {testimonial.author.charAt(0)}
              </div>
              <div className="ml-3">
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
