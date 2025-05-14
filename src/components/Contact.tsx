import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-white">Let's discuss your next project</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black bg-opacity-60 rounded-xl p-8"
          >
            <form action="https://formspree.io/f/xblopwdd" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-gray-900 bg-opacity-60 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-900 bg-opacity-60 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900 bg-opacity-60 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black bg-opacity-60 rounded-xl p-8 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/kyprexs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/alexander-west-2a35822a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="text-gray-400">Victoria, BC, Canada</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 