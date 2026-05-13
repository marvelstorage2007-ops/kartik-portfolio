import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function KartikPortfolio() {

  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {

    const mouseMove = (e) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  if (loading) {

    return (

      <div className="h-screen bg-black flex items-center justify-center overflow-hidden">

        <div className="text-center">

          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-[0.3em] mb-6">
            KARTIK
          </h1>

          <div className="w-52 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="h-full bg-blue-500"
            />

          </div>

        </div>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth relative">

      {/* Mouse Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 80%)`,
        }}
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_40%)]" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/30 border-b border-white/10 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-wide">
            Kartik Sharma
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#certifications" className="hover:text-white transition">
              Certifications
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* Left */}
          <div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">

              Hi, I'm{" "}

              <span className="text-blue-400">
                Kartik Sharma
              </span>

            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              B.Tech CSE (IoT) Student | Web Developer
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-xl mb-8 text-lg">

              Passionate about building modern digital experiences,
              IoT systems, AI-powered solutions, and real-world
              software projects.

            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8 flex-wrap">

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  2+
                </h3>

                <p className="text-gray-400">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  10+
                </h3>

                <p className="text-gray-400">
                  Certifications
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  1
                </h3>

                <p className="text-gray-400">
                  Internship
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href="#projects"
                className="px-7 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition font-medium shadow-lg shadow-blue-500/20"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="px-7 py-3 rounded-2xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition font-medium"
              >
                Resume
              </a>

              <a
                href="https://github.com/kartikcodes03"
                target="_blank"
                className="px-7 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition font-medium"
              >
                GitHub
              </a>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              transitionSpeed={2000}
            >

              <div className="relative group">

                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

                <img
                  src="/kartik.jpg"
                  alt="Kartik Sharma"
                  className="relative w-[350px] md:w-[430px] rounded-[2rem] border border-white/10 object-cover shadow-2xl"
                />

              </div>

            </Tilt>

          </div>

        </motion.div>

      </section>

      {/* About */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24 relative z-10"
      >

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-14">

          <h2 className="text-4xl font-bold mb-8">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">

            I am a quick learner and passionate developer with
            interests in Web Development, Artificial Intelligence,
            Cyber Security, and IoT systems. I enjoy building
            practical projects and continuously improving my
            technical skills.

          </p>

        </div>

      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24 relative z-10"
      >

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "PHP",
            "MySQL",
            "Java",
            "IoT",
            "Cyber Security",
            "AI/ML",
            "Data Analytics",
            "DBMS",
          ].map((skill) => (

            <Tilt
              key={skill}
              scale={1.03}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
            >

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 text-center hover:border-blue-500/40 transition duration-300">

                <p className="font-semibold text-lg">
                  {skill}
                </p>

              </div>

            </Tilt>

          ))}

        </div>

      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24 relative z-10"
      >

        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <Tilt scale={1.01}>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-10">

            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              Web Development Intern
            </h3>

            <p className="text-gray-400 mb-6">
              Kistechno Software Pvt. Ltd.
            </p>

            <ul className="space-y-4 text-gray-300">

              <li>
                • Built responsive web pages using HTML, CSS, and JavaScript.
              </li>

              <li>
                • Worked on frontend UI and responsive layouts.
              </li>

              <li>
                • Gained practical industry experience in web development.
              </li>

            </ul>

          </div>

        </Tilt>

      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24 relative z-10"
      >

        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <Tilt scale={1.02}>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-blue-500/40 transition duration-500">

              <h3 className="text-2xl font-bold mb-4">
                Tracemate – Lost & Found Portal
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">

                Developed a centralized lost and found platform
                using HTML, CSS, JavaScript, PHP, and MySQL.

              </p>

            </div>

          </Tilt>

          <Tilt scale={1.02}>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-blue-500/40 transition duration-500">

              <h3 className="text-2xl font-bold mb-4">
                Water Quality Checker – IoT System
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">

                IoT-based monitoring system for checking pH,
                turbidity, and temperature using sensors.

              </p>

            </div>

          </Tilt>

        </div>

      </motion.section>

      {/* Certifications */}
      <motion.section
        id="certifications"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24 relative z-10"
      >

        <h2 className="text-4xl font-bold mb-12">
          Featured Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "AI & ML in Java",
              org: "Oracle Academy",
              file: "ai-ml-java-oracle.pdf",
            },

            {
              title: "PostgreSQL Training",
              org: "IIT Bombay",
              file: "postgresql-training-iitb.pdf",
            },

            {
              title: "Cyber Job Simulation",
              org: "Deloitte Forage",
              file: "deloitte-cyber-job-simulation.pdf",
            },

            {
              title: "Internet of Things 101",
              org: "Infosys Springboard",
              file: "iot-101-infosys.pdf",
            },

            {
              title: "Web Development Internship",
              org: "Kistechno Software",
              file: "web-development-internship-kistechno.jpeg",
            },

            {
              title: "Smart India Hackathon",
              org: "Ministry of Education",
              file: "smart-india-hackathon-2025.jpeg",
            },

          ].map((cert) => (

            <Tilt
              key={cert.title}
              scale={1.03}
            >

              <a
                href={`/certificates/${cert.file}`}
                target="_blank"
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-blue-500/40 hover:-translate-y-2 transition duration-500 block"
              >

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">

                  {cert.title}

                </h3>

                <p className="text-blue-400">
                  {cert.org}
                </p>

              </a>

            </Tilt>

          ))}

        </div>

      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24 relative z-10"
      >

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-14 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Let's Connect
          </h2>

          <p className="text-gray-400 mb-10 text-lg">
            Open to internships, collaborations, and opportunities.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">

            <a
              href="mailto:kartiksharmabtp385@gmail.com"
              className="hover:text-blue-400 transition"
            >
              kartiksharmabtp385@gmail.com
            </a>

            <span className="hidden md:block text-gray-600">
              •
            </span>

            <a
              href="tel:+919602761165"
              className="hover:text-blue-400 transition"
            >
              +91 9602761165
            </a>

            <span className="hidden md:block text-gray-600">
              •
            </span>

            <a
              href="https://linkedin.com/in/kartik-sharma003"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </motion.section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm relative z-10">

        © 2026 Kartik Sharma. All rights reserved.

      </footer>

    </div>

  );
}