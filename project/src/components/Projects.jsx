import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "ITC 2025 Official Website",
    description: "React, Tailwind",
    image: "/Screenshot 2025-03-11 172317.png",
    url: "https://itctestweekindia.org"
  },
  
  {
    title: "AlbumTalk",
    description: "React, PostgreSQL, Express, SpotifyAPI",
    image: "/Screenshot 2025-03-11 173649.png",
    url: "www.google.com"
  },
  {
    title: "ElectroHack Portal",
    description: "React, Tailwind",
    image: "/Screenshot 2025-03-11 171909.png",
    url: "https://electrohack25.vercel.app"
  },
  {
    title: "Local Contributions Visualizer",
    description: "Go",
    image: "/Screenshot 2025-03-30 010946.png",
    url: "www.google.com"
  },
];

export const Projects = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    const setupScrollTrigger = () => {
      if (section && container) {
        // Clear any existing ScrollTrigger instances
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Only apply horizontal scroll effect on desktop
        if (window.innerWidth >= 1024) { // 1024px is tailwind's lg breakpoint
          const scrollTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${container.scrollWidth - window.innerWidth}`,
            pin: true,
            anticipatePin: 1,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.set(container, {
                x: -progress * (container.scrollWidth - window.innerWidth),
              });
            },
          });

          return () => {
            scrollTrigger.kill();
          };
        }
      }
    };

    setupScrollTrigger();

    // Re-initialize on window resize
    window.addEventListener('resize', setupScrollTrigger);
    return () => {
      window.removeEventListener('resize', setupScrollTrigger);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen relative overflow-hidden bg-black"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-16 text-center pt-8"
        style={{fontFamily:'"Poppins", arial'}}
      >
        Projects
      </motion.h2>
      
      {/* Desktop Layout */}
      <div 
        ref={containerRef} 
        className="hidden lg:flex gap-8 p-8 absolute left-0 top-1/2 -translate-y-1/2 will-change-transform"
      >
        {projects.map((project, index) => (
          <a
            href={project.url}
            key={index}
            className="project-card w-[600px] h-[400px] relative flex-shrink-0 group cursor-none overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              <p className="text-white/80">{project.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
        {projects.map((project, index) => (
          <motion.a
            href={project.url}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card relative aspect-video cursor-pointer overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl md:text-2xl font-bold">{project.title}</h3>
              <p className="text-white/80 text-sm md:text-base">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};