export default function KartikPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_40%)]" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/5 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-wide">
            Kartik Sharma
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">

        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
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
              I am a B.Tech CSE (IoT) student with hands-on experience in web
              development and IoT-based projects. I have developed solutions
              such as a lost-and-found portal and a water quality monitoring
              system. Passionate about solving real-world problems using
              technology and continuously improving my development skills.
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
                  1
                </h3>
                <p className="text-gray-400">
                  Internship
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  IoT
                </h3>
                <p className="text-gray-400">
                  Enthusiast
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

          {/* Right Side Image */}
          <div className="flex justify-center">

            <div className="relative group">

              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <img
                src="/kartik.jpg"
                alt="Kartik Sharma"
                className="relative w-[350px] md:w-[430px] rounded-[2rem] border border-white/10 object-cover shadow-2xl"
              />

            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-14">

          <h2 className="text-4xl font-bold mb-8">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I am a quick learner, hardworking, and eager to gain practical
            industry experience. My goal is to grow as a software engineer and
            contribute to meaningful projects in web development and IoT.
          </p>

        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-24"
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
            "C",
            "Java",
            "IoT",
            "Sensors",
            "Microcontrollers",
            "Web Development",
          ].map((skill) => (

            <div
              key={skill}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-blue-500/40 transition duration-300"
            >

              <p className="font-semibold text-lg">
                {skill}
              </p>

            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

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
              • Improved UI consistency across multiple browsers.
            </li>

            <li>
              • Collaborated with team members to deliver features on time.
            </li>

          </ul>

        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-blue-500/40 transition duration-500">

            <h3 className="text-2xl font-bold mb-4">
              Tracemate – Lost & Found Portal
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              Developed a full-stack lost and found portal using HTML, CSS,
              JavaScript, PHP, and MySQL with authentication, item tracking,
              and search filters.
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "MySQL",
              ].map((tech) => (

                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                >
                  {tech}
                </span>

              ))}

            </div>
          </div>

          {/* Project 2 */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-blue-500/40 transition duration-500">

            <h3 className="text-2xl font-bold mb-4">
              Water Quality Checker – IoT Monitoring System
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              Designing an IoT-based system using sensors to monitor pH,
              turbidity, and temperature in real time for efficient water
              quality analysis.
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "IoT",
                "Sensors",
                "Microcontrollers",
                "Monitoring System",
              ].map((tech) => (

                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                >
                  {tech}
                </span>

              ))}

            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24"
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
              href="tel:+917073647846"
              className="hover:text-blue-400 transition"
            >
              +91 7073647846
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
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">

        © 2026 Kartik Sharma. All rights reserved.

      </footer>

    </div>
  );
}