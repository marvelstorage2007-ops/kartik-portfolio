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
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">

        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[0.3em] text-blue-400 mb-4 text-sm">
              Premium Student Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-blue-400">
                Kartik Sharma
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Computer Science (IoT) Student
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-xl mb-8 text-lg">
              I am a Computer Science (IoT) student with a keen interest in
              technology and learning new skills. I am currently exploring
              web development, programming, and IoT concepts while improving
              my technical knowledge step by step.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#projects"
                className="px-7 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition font-medium shadow-lg shadow-blue-500/20"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition font-medium"
              >
                Contact Me
              </a>

            </div>
          </div>

          {/* Right Image */}
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
            I am a quick learner, hardworking, and eager to gain real-world
            experience in the software industry. My goal is to start my career
            in a good company, grow as a software engineer, and contribute
            to meaningful projects.
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "C/C++",
            "IoT",
            "DBMS",
            "Data Analytics",
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

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12">
          Featured Project
        </h2>

        <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-blue-500/40 transition duration-500">

          <div className="relative p-10 md:p-14">

            <div className="flex flex-wrap gap-3 mb-6">

              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Node.js",
                "MongoDB",
              ].map((tech) => (

                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                >
                  {tech}
                </span>

              ))}
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Lost & Found Portal
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg max-w-4xl">
              A web-based platform where users can report lost items or post
              found items. Users can search for missing belongings, upload
              item details and images, and contact the person who posted the
              item to help recover lost belongings easily.
            </p>

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
            Open to opportunities, collaborations, and learning experiences.
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
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">

        © 2026 Kartik Sharma. All rights reserved.

      </footer>

    </div>
  );
}
