import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { CustomCursor } from './components/CustomCursor';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { LoadingScreen } from './components/LoadingScreen';
import { WordRotate } from './components/magicui/word-rotate';
import { BoxReveal } from "./components/magicui/box-reveal";
import { ShimmerButton } from "./components/magicui/shimmer-button";
import Noise from './Noise/Noise'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const menuItems = [
    { name: 'home', id: 'home' },
    { name: 'about', id: 'about' },
    { name: 'skills', id: 'skills' },
    { name: 'projects', id: 'projects' },
    { name: 'journey', id: 'journey' },
    { name: 'contact', id: 'contact' },
  ];

  useEffect(() => {
    // Simulate loading of resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      const sections = menuItems.map(item => ({
        id: item.id,
        name: item.name,
        offset: document.getElementById(item.id)?.offsetTop || 0
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black text-white pb-5"
          >
            
            <CustomCursor />
            
            {/* Navigation */}
            <div className='w-full flex justify-center '>
            <nav className="bg-[#12121a] backdrop-blur-sm bg-opacity-80 fixed w-[50rem] rounded-b-md z-30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center h-20">
                  {/* Desktop Menu */}
                  <div className="hidden sm:flex sm:space-x-12">
                    {menuItems.map((item) => (
                      <motion.div
                        key={item.name}
                        className="relative inline-flex items-center"
                        whileHover={{ y: -2 }}
                      >
                        <motion.a
                          href={`#${item.id}`}
                          className={`inline-flex items-center px-3 py-2 text-md font-medium relative group
                            ${activeSection === item.name ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.name}
                          <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-orange-300 transform transition-transform duration-300
                            ${activeSection === item.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
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
                      href={`#${item.id}`}
                      className={`block px-3 py-2 rounded-md text-base font-medium 
                        ${activeSection === item.name 
                          ? 'text-white bg-[#1a1a24]' 
                          : 'text-gray-300 hover:text-white hover:bg-[#1a1a24]'}`}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </nav>

            </div>

            {/* Hero Section */}
            <section id="home" className="min-h-screen relative flex items-center justify-center p-8">
              <Spline 
                scene="https://prod.spline.design/90USuRFTZqLqKGU0/scene.splinecode" 
                className="absolute inset-0 w-full h-full z-0"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center relative z-10"
              >
                <h1 className="text-8xl md:text-9xl text-orange-200 font-bold mb-6 name-title" style={{fontFamily:'"Poppins",arial'}}>abhirup das</h1>
                <div className='flex flex-row '>
                  <div className='w-[12rem]'>
                    <WordRotate
                      className="text-4xl font-semibold text-orange-300"
                      words={[" engineer", "developer", "designer"]}
                    />
                  </div>
                  <div className='pt-2 text-4xl font-semibold text-white'> and a dreamer.</div>
                </div>
                <div className='w-[13rem] ml-4'>
                <a href="#" ><ShimmerButton className="shadow-2xl mt-5 resumebutton pointer-events-none" shimmerColor="#ed7828" shimmerSize='0.1em'>
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-2xl" style={{fontFamily:'"Poppins", arial'}}>
        My Resume
      </span>
    </ShimmerButton></a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10"
              >
                <ArrowDown size={32} />
              </motion.div>
            </section>

            {/* About Section */}
            <section id="about" >
              <div className="pt-32 pb-32 flex items-center justify-center p-8 bg-white text-black">
              <div className="max-w-4xl"
              >
                <BoxReveal boxColor={"#ed7828"} duration={0.5}><h2 className="text-4xl md:text-6xl font-bold mb-8" style={{fontFamily:'"Poppins",arial'}}>about me.</h2></BoxReveal>
                <BoxReveal boxColor={"#ed7828"} duration={0.6}><p className="text-lg md:text-xl text-gray-600 mb-8" style={{fontFamily:'"Poppins",arial'}}>
                I'm Abhirup, a passionate full-stack developer with a knack for building seamless web experiences. With expertise in React, Node.js, and Python, I love solving problems and exploring new technologies beyond web development.
                </p></BoxReveal>
                <BoxReveal boxColor={"#ed7828"} duration={0.7}><div className="flex gap-6">
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    <Github size={36} />
                  </a>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    <Linkedin size={36} />
                  </a>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    <Mail size={36} />
                  </a>
                </div></BoxReveal>
              </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills">
              <Skills />
            </section>

            {/* Projects Section */}
            <section id="projects">
              <Projects />
            </section>

            {/* Timeline Section */}
            <section id="journey">
              <Timeline />
            </section>

            {/* Contact Section */}
            <section id="contact" className="mt-16 flex items-center justify-center p-10">
              <div
                
                className=" w-full flex flex-col-reverse lg:flex-row" style={{fontFamily:'"Poppins",arial'}}
              ><div className='mt-48 pl-36'>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Connect</h2>
                <p className="text-lg md:text-xl text-gray-400 mb-12">
                  Have a project in mind? Let's create something amazing together.
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Get in Touch
                </a>
                </div>
                <div className='ml-16' style={{rotate:'30deg'}}>
                <DotLottieReact
      src="https://lottie.host/64eef703-eecf-4d39-9a4e-e2314ee5b465/5izIG7sSiX.lottie"
      loop
      autoplay
    />
                </div>
              </div>
              
            </section>
            <section className=''>
              <h4 className='text-gray-500 text-center'>Made by Abhirup | All Rights Reserved.</h4>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;