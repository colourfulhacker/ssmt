import { motion } from 'framer-motion';
import Image from 'next/image';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface TechCategory {
  category: string;
  gradient: string;
  technologies: Technology[];
}

const techStack: TechCategory[] = [
  {
    category: 'Frontend & Frameworks',
    gradient: 'from-blue-600 to-cyan-600',
    technologies: [
      { name: 'React', icon: 'react', color: '61DAFB' },
      { name: 'Next.js', icon: 'nextdotjs', color: '000000' },
      { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
      { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4' },
      { name: 'Angular', icon: 'angular', color: 'DD0031' },
    ]
  },
  {
    category: 'Backend & Databases',
    gradient: 'from-purple-600 to-pink-600',
    technologies: [
      { name: 'Node.js', icon: 'nodedotjs', color: '339933' },
      { name: 'Python', icon: 'python', color: '3776AB' },
      { name: 'Java', icon: 'openjdk', color: '007396' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1' },
      { name: 'MongoDB', icon: 'mongodb', color: '47A248' },
      { name: 'MySQL', icon: 'mysql', color: '4479A1' },
    ]
  },
  {
    category: 'Cloud Platforms',
    gradient: 'from-indigo-600 to-purple-600',
    technologies: [
      { name: 'AWS', icon: 'amazonaws', color: 'FF9900' },
      { name: 'Microsoft Azure', icon: 'microsoftazure', color: '0078D4' },
      { name: 'Google Cloud', icon: 'googlecloud', color: '4285F4' },
      { name: 'Vercel', icon: 'vercel', color: '000000' },
      { name: 'Supabase', icon: 'supabase', color: '3FCF8E' },
      { name: 'Docker', icon: 'docker', color: '2496ED' },
    ]
  },
  {
    category: 'DevOps & CI/CD',
    gradient: 'from-green-600 to-emerald-600',
    technologies: [
      { name: 'Kubernetes', icon: 'kubernetes', color: '326CE5' },
      { name: 'Jenkins', icon: 'jenkins', color: 'D24939' },
      { name: 'GitHub Actions', icon: 'githubactions', color: '2088FF' },
      { name: 'GitLab', icon: 'gitlab', color: 'FC6D26' },
      { name: 'Terraform', icon: 'terraform', color: '7B42BC' },
      { name: 'Ansible', icon: 'ansible', color: 'EE0000' },
    ]
  },
  {
    category: 'Data Science & AI',
    gradient: 'from-orange-600 to-red-600',
    technologies: [
      { name: 'TensorFlow', icon: 'tensorflow', color: 'FF6F00' },
      { name: 'PyTorch', icon: 'pytorch', color: 'EE4C2C' },
      { name: 'Apache Spark', icon: 'apachespark', color: 'E25A1C' },
      { name: 'Databricks', icon: 'databricks', color: 'FF3621' },
      { name: 'Snowflake', icon: 'snowflake', color: '29B5E8' },
      { name: 'Pandas', icon: 'pandas', color: '150458' },
    ]
  },
  {
    category: 'Cybersecurity Tools',
    gradient: 'from-red-600 to-rose-600',
    technologies: [
      { name: 'Kali Linux', icon: 'kalilinux', color: '557C94' },
      { name: 'Wireshark', icon: 'wireshark', color: '1679A7' },
      { name: 'Metasploit', icon: 'metasploit', color: '2596CD' },
      { name: 'Burp Suite', icon: 'burpsuite', color: 'FF6633' },
      { name: 'OWASP', icon: 'owasp', color: '000000' },
      { name: 'Snyk', icon: 'snyk', color: '4C4A73' },
    ]
  },
];

export default function Technologies() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technologies We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Master</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team has deep expertise across the entire technology stack, from frontend frameworks to cloud infrastructure and cybersecurity tools
          </p>
        </motion.div>

        <div className="space-y-12">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent inline-block`}>
                  {category.category}
                </h3>
                <div className={`h-1 w-24 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center h-full">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center relative">
                        <img
                          src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                          alt={tech.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tech.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Expertise in a Different Technology?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              We continuously expand our technology stack based on industry trends and client needs. Contact us to discuss your specific requirements.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
