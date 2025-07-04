import { motion } from 'framer-motion';
import { FileText, Network, Target, Mail, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Create a Job",
      description: "Add your role, requirements, and preferences in minutes",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Network,
      title: "Analyze Trusted Networks",
      description: "Cobrix maps your team's LinkedIn graph to find hidden talent clusters",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Score & Surface Candidates",
      description: "AI ranks the best fits based on relevance, skills, and proximity",
      color: "text-green-600",
      bgColor: "bg-green-100",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Automate Outreach",
      description: "Personalized recruiter emails go out instantly to top candidates",
      color: "text-red-600",
      bgColor: "bg-red-100",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            How Cobrix Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From job creation to candidate outreach - all automated and optimized by AI
          </motion.p>
        </div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-500 mb-2">
                        STEP {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 -right-4 z-10">
                      <ArrowRight className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-gray-500 mb-1">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            From Job Post to Candidate Response
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5 min</div>
              <div className="text-gray-600">Job setup</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24 hrs</div>
              <div className="text-gray-600">Network analysis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">48 hrs</div>
              <div className="text-gray-600">First responses</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}