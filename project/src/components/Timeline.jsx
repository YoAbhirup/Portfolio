import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: "Sept. 2022",
    title: "Joined VIT",
    company: "Tech Innovation Labs",
    description: "Started my higher studies at VIT Vellore"
  },
  {
    year: "Mar. 2023",
    title: "Started Learning Web Development",
    company: "Creative Studio",
    description: "Ventured into the world of Web Development, starting with HTML/CSS"
  },
  {
    year: "Jun. 2024",
    title: "Intern at Siemens Energy, Vadodara",
    company: "Digital Agency",
    description: "Built interactive websites and web applications"
  },
  {
    year: "Feb. 2025",
    title: "Building the official website for International Test Conference India 2025 ",
    company: "Startup Inc",
    description: "Started career in web design and development"
  }
];

export const Timeline = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 text-center text-black"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 rounded-full" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } mb-16 md:mb-24`}
              style={{fontFamily:'"Poppins", arial'}}
            >
              {/* Year Bubble */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-16 md:text-right' : 'md:ml-16'
              } flex-1`}>
                <span className="inline-block text-sm font-semibold text-gray-500 mb-2">
                  {event.year}
                </span>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">{event.title}</h3>
                
                <p className="text-blue-500">{event.description}</p>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};