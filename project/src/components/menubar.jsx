import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Skills' },
    { name: 'Projects' },
    { name: 'Journey' },
    { name: 'Contact' },
  ];

  return (

      <nav className="bg-[#12121a] backdrop-blur-sm bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:space-x-12">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative inline-flex items-center"
                  whileHover={{ y: -2 }}
                >
                  <motion.a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white relative group"
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="sm:hidden overflow-hidden bg-[#12121a]"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1a1a24]"
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>

  );
}

export default App;