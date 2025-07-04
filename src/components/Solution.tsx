import { motion } from 'framer-motion';
import { Brain, Network, Mail, Target, Zap, TrendingUp } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: Network,
      title: "Maps Your Team's LinkedIn Network",
      description: "Analyzes your existing team's connections to find hidden talent clusters and warm introductions",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Brain,
      title: "ML-Powered Candidate Scoring",
      description: "AI evaluates candidates based on skills, experience, education, GitHub activity, and personality traits",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Mail,
      title: "Automated Personalized Outreach",
      description: "Crafts and sends personalized recruiter emails that convert, saving hours of manual work",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Target,
      title: "Surfaces Only the Best Matches",
      description: "Filters out noise and presents only the most promising candidates for your specific role",
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Meet Your AI-Powered
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Headhunting Agent
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Cobrix finds top talent through social proximity and automates the first recruiter touchpoint.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            The Result?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-gray-900">Less Noise</div>
                <div className="text-sm text-gray-600">Higher quality candidates</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-gray-900">More Signals</div>
                <div className="text-sm text-gray-600">Better matching accuracy</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-gray-900">Faster Hires</div>
                <div className="text-sm text-gray-600">Reduced time to hire</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}