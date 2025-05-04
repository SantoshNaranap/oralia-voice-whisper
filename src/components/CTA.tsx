
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-oralia-dark to-oralia">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to give your website a voice?
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Join the growing number of websites using Oralia to create more engaging, accessible, and helpful user experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-oralia hover:bg-gray-100 text-lg px-8 py-6">
            Start Free Trial
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
            Schedule Demo
          </Button>
        </div>
        <p className="text-white/70 mt-6">No credit card required. 14-day free trial.</p>
      </div>
    </section>
  );
};

export default CTA;
