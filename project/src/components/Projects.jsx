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
    url: "itctestweekindia.org"
  },
  {
    title: "Project Two",
    description: "Brand Identity Design",
    image: "/Screenshot 2025-03-11 171909.png",
    url: "https://electrohack25.vercel.app"
  },
  {
    title: "Project Three",
    description: "Web Development",
    image: "/Screenshot 2025-03-11 173649.png",
    url: "www.google.com"
  },
  {
    title: "Project Four",
    description: "Mobile App Design",
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&q=80&w=800",
    url : "www.google.com"
  },
];

export const Projects = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (section && container) {
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
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="h-screen relative overflow-hidden bg-black"
    >
       <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
          style={{fontFamily:'"Poppins", arial'}}
        >
          Projects
        </motion.h2>
      <div 
        ref={containerRef} 
        className="flex gap-8 p-8 absolute left-0 top-1/2 -translate-y-1/2 will-change-transform"
      >
        {projects.map((project, index) => (
          <a href={project.url}
            key={index}
            className="project-card w-[600px] h-[400px] relative flex-shrink-0 group cursor-pointer overflow-hidden"
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
    </section>
  );
};