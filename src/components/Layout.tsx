import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-xl font-bold">
                Alexander West
              </Link>
            </motion.div>
            <div className="flex space-x-8">
              {['Home', 'Projects', 'About'].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * ['Home', 'Projects', 'About'].indexOf(item) }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
} 