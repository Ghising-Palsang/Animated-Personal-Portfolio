// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      {/* Title */}
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url(/projects/landingpage.png)" }}
          />
          <h3>Landing Page</h3>
          <p>
            Responsive landing page crafted with HTML, CSS, and JavaScript.
            Features a clean UI, smooth animations, and adaptive design
            optimized for all devices—ideal for showcasing products, services,
            or personal branding.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
          </div>
        </motion.div>
        {/*Project cards 1*/}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url(/projects/restfulapi.png)",
            }}
          />
          <h3>RESTful API</h3>
          <p>
            A RESTful API built with Node.js, Express.js, and MongoDB, designed
            for efficient CRUD operations, robust routing, and scalable data
            handling in modern web applications.
          </p>
          <div className="project-tech">
            <span>Express JS</span>
            <span>Node JS</span>
            <span>MongoDB</span>
          </div>
        </motion.div>
        {/*Project card 2 */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url(/projects/todolist.png)" }}
          />
          <h3>To-Do List</h3>
          <p>
            A sleek and responsive To-Do List built with HTML, CSS, and
            JavaScript. Utilizes Local Storage to save tasks persistently,
            featuring a minimalist UI, intuitive interactions, and real-time
            updates for efficient task management across sessions.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
          </div>
        </motion.div>
        {/*Project card 3 */}
      </motion.div>
    </motion.section>
  );
};
