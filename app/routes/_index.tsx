import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";
import { Briefcase, GraduationCap, Code, Cpu, Database, Wrench } from "lucide-react";

const Button = ({ href, children, className = "", onClick }: any) => (
  <a
    href={href}
    onClick={onClick}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center rounded-md font-medium px-6 py-3 transition text-center ${className}`}
  >
    {children}
  </a>
);

const sectionVariants: any = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export default function BatechHome() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen flex flex-col font-sans scroll-smooth relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="relative z-10 py-20 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mx-auto w-40 h-40 md:w-52 md:h-52 mb-6 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/logo.JPG"
              alt="Profile"
              className="w-full h-full rounded-full object-contain"
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
          >
            BADRUL AMIN
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-2"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer | Software Engineer
          </motion.p>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Kajang, Selangor, Malaysia
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href="mailto:badrulaminz.aj@gmail.com"
              className="bg-[#d93025] hover:bg-red-700 text-white gap-2"
            >
              <SiGmail className="w-5 h-5" /> Gmail
            </Button>
            <Button
              href="https://wa.me/60127832905"
              className="bg-green-500 hover:bg-green-600 text-white gap-2"
            >
              <SiWhatsapp className="w-5 h-5" /> WhatsApp
            </Button>
            <Button
              href="https://github.com/Badrulamin42"
              className="bg-[#24292f] hover:bg-black text-white gap-2"
            >
              <SiGithub className="w-5 h-5" /> GitHub
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Professional Summary */}
      <motion.section
        id="summary"
        className="py-16 px-6 text-center border-t border-white/5 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6 text-white">
          Professional Summary
        </h2>
        <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed text-base md:text-lg">
          Versatile and results-oriented Full Stack Developer with over 4 years of
          experience designing and building scalable, secure, and responsive web
          applications. Skilled in React.js, Node.js, ASP.NET MVC, Flutter, MySQL, and
          IoT integrations, with proven expertise in fintech, automation, and enterprise
          software development. Passionate about clean architecture, reliable performance,
          and bridging digital systems with real-world operations.
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-16 px-6 border-t border-white/5 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Full Stack Developer",
                company: "Transpire Byte",
                period: "Jan 2025 – Sep 2025",
                location: "Seri Kembangan, Malaysia",
                desc: [
                  "Developed IoT-integrated systems for dynamic QR payment vending machines.",
                  "Implemented secure payment gateway integrations ensuring reliability.",
                  "Applied ASP.NET MVC, Flutter, MQTT, and Firebase for connected applications.",
                  "Collaborated across teams to enhance UX and real-time monitoring.",
                ],
              },
              {
                title: "Freelance Software Developer",
                company: "Private Projects",
                period: "May 2024 – Nov 2025",
                location: "Remote",
                desc: [
                  "Built a Crypto Autotrading System integrating TradingView, Telegram, and Binance APIs.",
                  "Delivered full-stack systems using PHP, AJAX, jQuery, and MySQL.",
                  "Handled complete lifecycle from requirements to deployment.",
                  "Led client meetings and UAT for project satisfaction.",
                ],
              },
              {
                title: "Software Engineer",
                company: "IFCA MSC Berhad",
                period: "Aug 2021 – May 2024",
                location: "Petaling Jaya, Malaysia",
                desc: [
                  "Contributed to a large-scale Hotel Management System for enterprise clients.",
                  "Enhanced APIs and frontend with React, Node, TypeORM, and PostgreSQL.",
                  "Handled feature releases, performance tuning, and UAT.",
                  "Collaborated with stakeholders for reliable system delivery.",
                ],
              },
            ].map((job, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-2xl p-6 bg-neutral-900/40 shadow-md hover:shadow-[#f23d89]/10 transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#f23d89]">{job.title}</h3>
                <p className="text-gray-300">
                  {job.company} | {job.period}
                </p>
                <p className="text-sm text-gray-500 mb-3">{job.location}</p>
                <ul className="list-disc text-gray-400 text-sm md:text-base pl-5 space-y-1 text-left">
                  {job.desc.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

            {/* Personal Projects Section */}
      <motion.section
        id="projects"
        className="py-16 px-6 border-t border-white/5 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Personal Projects</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "AI Analytics Dashboard",
              desc: "Developed an analytics system powered by ChatGPT-4.1 for natural language querying and data-driven insights.",
              tech: "React, Node.js, OpenAI API, PostgreSQL",
            },
            {
              title: "AI Math Tutor for Primary Students",
              desc: "Built an educational platform that integrates Gemini AI to help students learn and solve math problems interactively.",
              tech: "Flutter, Firebase, Gemini API, TypeScript",
            },
             {
              title: "Property Agent Website And Dashboard with Email + WhatsApp campaign",
              desc: "A website specifically for property agent combine with dashboard and support blast campaign module using email and WhatsApp ",
              tech: "Asp.net, EF, React.js, Mssql",
            },
            {
              title: "Real-Time Auto Trading System",
              desc: "Implemented an automated trading platform integrating TradingView signals with Binance for live market execution.",
              tech: "Node.js, Express, Binance API, WebSockets, Telegram Bot",
            },
            {
              title: "Face Recognition IoT System",
              desc: "Created a face authentication system using ESP32-CAM integrated with a Node.js backend for real-time access control.",
              tech: "ESP32-CAM, Node.js, Face API, React, MQTT",
            },
          ].map((proj, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl p-6 bg-neutral-900/40 shadow-md hover:shadow-[#f23d89]/10 transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#f23d89] mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300 mb-2">{proj.desc}</p>
              <p className="text-sm text-gray-500 italic">{proj.tech}</p>
            </div>
          ))}
        </div>
      </motion.section>


      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-16 px-6 border-t border-white/5 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: Code, title: "Frontend", items: "React.js, Flutter, Bootstrap, jQuery, HTML5, CSS3" },
            { icon: Wrench, title: "Backend", items: "Node.js, ASP.NET MVC, PHP, TypeScript, GraphQL" },
            { icon: Database, title: "Database", items: "MySQL, PostgreSQL, Firebase" },
            { icon: Cpu, title: "IoT & Real-time", items: "MQTT, Sensor integration, Automation systems" },
            { icon: Briefcase, title: "Tools & Integration", items: "Git, Docker, REST APIs, TradingView, Telegram API" },
            { icon: GraduationCap, title: "Certifications", items: "Oracle SQL | Cisco Networking" },
          ].map(({ icon: Icon, title, items }, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-white/10 bg-neutral-900/40 text-center hover:border-[#f23d89]/40 transition-colors"
            >
              <Icon className="w-8 h-8 text-[#f23d89] mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400 text-sm">{items}</p>
            </div>
          ))}
        </div>
      </motion.section>

            {/* Certificates Section */}
      <motion.section
        id="certificates"
        className="py-16 px-6 border-t border-white/5 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "CCNA Routing and Switching: Introduction to Networks",
              org: "CISCO Academy",
              year: "2019",
            },
                        {
              title: "NetaCad Learning Transcript",
              org: "CISCO Academy",
              year: "2019",
            },
            {
              title: "Database Design and Programming with SQL",
              org: "Oracle Academy",
              year: "2019",
            },

          ].map((cert, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl p-6 bg-neutral-900/40 shadow-md hover:shadow-[#f23d89]/10 transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#f23d89] mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-300">{cert.org}</p>
              <p className="text-sm text-gray-500 mt-1">{cert.year}</p>
            </div>
          ))}
        </div>
      </motion.section>


      {/* Education */}
      <motion.section
        id="education"
        className="py-16 px-6 text-center border-t border-white/5 bg-transparent"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <p className="text-gray-300">
          <span className="font-semibold">Universiti Teknologi MARA (UiTM)</span>
        </p>
        <p className="text-gray-400 text-sm md:text-base mt-2">
          Bachelor of Computer Science (Hons) Netcentric Computing (2019–2021) | CGPA: 3.18 <br />
          Diploma in Computer Science (2016–2019) | CGPA: 3.08
        </p>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] text-gray-500 text-center py-6 text-xs md:text-sm border-t border-white/5">
        &copy; {new Date().getFullYear()} Badrul Amin. All rights reserved.
      </footer>
    </div>
  );
}
