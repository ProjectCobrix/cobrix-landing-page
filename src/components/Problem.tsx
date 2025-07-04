import { motion } from 'framer-motion';
import { Clock, DollarSign, Users, AlertCircle } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Slow Hiring Process",
      description: "Average time to hire takes 6-8 weeks, losing top talent to competitors",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: DollarSign,
      title: "Expensive & Inefficient",
      description: "Recruiting costs pile up with agencies, job boards, and internal resources",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: Users,
      title: "Bias & Noise",
      description: "Referrals and job boards are oversaturated with unqualified candidates",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: AlertCircle,
      title: "Late Discovery",
      description: "You don't know if someone's a great hire until weeks into the process",
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Recruiting in Big Tech is
            <span className="text-red-600 block">Broken</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The current hiring process is plagued with inefficiencies that cost companies time, money, and top talent.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${problem.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">6-8 weeks</div>
            <div className="text-gray-600">Average time to hire</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">$15,000+</div>
            <div className="text-gray-600">Cost per hire</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">80%</div>
            <div className="text-gray-600">Of resumes are noise</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}