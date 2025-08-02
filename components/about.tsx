"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Globe, Smartphone, Zap, Users } from 'lucide-react'

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
  color: string
}

const skills: Skill[] = [
  { name: 'Frontend Development', level: 95, icon: <Code size={24} />, color: 'from-blue-500 to-blue-600' },
  { name: 'Backend Development', level: 90, icon: <Database size={24} />, color: 'from-green-500 to-green-600' },
  { name: 'Mobile Development', level: 85, icon: <Smartphone size={24} />, color: 'from-purple-500 to-purple-600' },
  { name: 'DevOps & Cloud', level: 80, icon: <Globe size={24} />, color: 'from-orange-500 to-orange-600' },
  { name: 'UI/UX Design', level: 75, icon: <Users size={24} />, color: 'from-pink-500 to-pink-600' },
  { name: 'AI & Machine Learning', level: 70, icon: <Zap size={24} />, color: 'from-red-500 to-red-600' },
]

const timeline = [
  {
    year: '2023',
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp',
    description: 'Led development of enterprise applications using React, Node.js, and cloud technologies.',
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    description: 'Built scalable web applications and mobile apps for early-stage startups.',
  },
  {
    year: '2021',
    title: 'Frontend Developer',
    company: 'DigitalAgency',
    description: 'Created responsive user interfaces and interactive web experiences.',
  },
  {
    year: '2020',
    title: 'Computer Science Graduate',
    company: 'University of Technology',
    description: 'Completed degree with focus on software engineering and web development.',
  },
]

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-50 to-blue-50 dark:from-dark-800 dark:to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            Passionate about creating innovative digital solutions that make a difference. 
            I combine technical expertise with creative problem-solving to build exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Crafting Digital Experiences
            </h3>
            <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
              With over 4 years of experience in full-stack development, I specialize in building 
              scalable web applications, mobile apps, and innovative digital solutions. My passion 
              lies in creating user-centric experiences that solve real-world problems.
            </p>
            <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
              I believe in the power of clean code, intuitive design, and continuous learning. 
              Every project is an opportunity to push boundaries and explore new technologies 
              that can enhance user experiences and drive business value.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-dark-600 dark:text-dark-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-sm text-dark-600 dark:text-dark-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-dark-600 dark:text-dark-400">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
              Skills & Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium text-dark-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-dark-600 dark:text-dark-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-dark-900 dark:text-white text-center mb-12">
            Professional Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="glass p-6 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold gradient-text">{item.year}</span>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                          {item.company}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-dark-600 dark:text-dark-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 