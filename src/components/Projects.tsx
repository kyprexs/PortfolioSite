import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    slug: 'roblox-valuator-bot',
    title: 'Roblox Valuator Bot',
    description: 'A Discord bot that estimates the value of any Roblox account by fetching and analyzing public account data. Users can check the value of their Roblox account (in Robux and USD), see the number of limited items, and get other useful account stats—all with a simple !value <username> command in Discord.',
    technologies: ['Python', 'Discord.py', 'Roblox API'],
    demo: '/screenshots/ex1.png',
  },
  {
    slug: 'github-profile-analyzer',
    title: 'GitHub Profile Analyzer',
    description: 'A tool to analyze GitHub profiles and provide insights into repositories, languages, and activity. (Add your own description here!)',
    technologies: ['Python', 'GitHub API', 'Data Analysis'],
    demo: '/screenshots/ex2.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center">
                {project.demo && (
                  <img src={project.demo} alt={project.title + ' demo'} className="w-full h-48 object-cover" />
                )}
              </div>
              <div className="p-6 bg-gray-800 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 