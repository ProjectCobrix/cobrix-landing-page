import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Cobrix helped us find 3 amazing engineers in 2 weeks. The quality of candidates was outstanding - all came from our network but we never would have found them ourselves.",
      name: "Sarah Chen",
      role: "Head of Engineering",
      company: "Stealth AI Startup",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The personalized outreach was incredible. Candidates actually responded because the emails felt authentic and relevant. Our response rate went from 10% to 60%.",
      name: "Marcus Rodriguez",
      role: "Talent Acquisition",
      company: "Growth Stage SaaS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "We were spending 20+ hours a week on recruiting. Cobrix reduced that to 2 hours while finding better candidates. It's like having a world-class recruiter on autopilot.",
      name: "Jennifer Park",
      role: "Co-founder & CTO",
      company: "YC W23",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Loved by Hiring Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how top startups are transforming their hiring with Cobrix
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 relative"
            >
              <div className="absolute top-4 left-4">
                <Quote className="w-8 h-8 text-blue-600 opacity-50" />
              </div>
              <div className="pt-4">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-blue-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="text-sm text-gray-500 mb-6">
            TRUSTED BY STARTUPS FROM
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-700">Y COMBINATOR</div>
            <div className="text-2xl font-bold text-gray-700">TECHSTARS</div>
            <div className="text-2xl font-bold text-gray-700">500 STARTUPS</div>
            <div className="text-2xl font-bold text-gray-700">SEQUOIA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}