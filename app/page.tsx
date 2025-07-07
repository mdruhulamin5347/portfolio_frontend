"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Database,
  Globe,
  MessageCircle,
  Star,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Award,
  BookOpen,
  Sun,
  Moon,
} from "lucide-react"
import { HomeApiFetch } from "@/routes/api"

interface homeDataType {
  name : string;
  title : string;
  details : string;
  github_link : string;
  linkedin_link : string;
  resume_download : string;
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false) // Changed to false for light mode default

  const [homeData, sethomeData] = useState({} as homeDataType);

  useEffect(() => {
    const fetchAndLogHomeData = async () => {
    const homeData = await HomeApiFetch();
    sethomeData(homeData as homeDataType  );
    console.log(homeData, "home data hereeeeeeeeeeeeeeeeeee");
  };
  fetchAndLogHomeData();
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "experience", "services", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const skills = {
    frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
    backend: ["Django", "Django REST Framework", "Express.js", "Node.js", "PostgreSQL", "MySQL"],
    programming: ["Python", "C", "C++", "JavaScript", "TypeScript"],
    concepts: ["Data Structures", "Algorithms", "RESTful APIs", "Database Design"],
    tools: ["Docker", "Git", "GitHub", "VS Code", "Postman", "Linux"],
  }

  const projects = [
    {
      title: "E-Commerce API",
      description:
        "A comprehensive REST API built with Django REST Framework featuring user authentication, product management, and order processing.",
      tech: ["Django", "DRF", "PostgreSQL", "Docker"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management System",
      description:
        "Full-stack web application with React frontend and Django backend for team collaboration and project management.",
      tech: ["React", "Django", "MySQL", "JWT"],
      github: "#",
      live: "#",
    },
    {
      title: "Real-time Chat Application",
      description:
        "WebSocket-based chat application with real-time messaging, user authentication, and message history.",
      tech: ["Django Channels", "WebSocket", "Redis", "React"],
      github: "#",
      live: "#",
    },
  ]

  const services = [
    {
      title: "Backend API Development",
      description:
        "Build robust and scalable RESTful APIs using Django REST Framework with proper authentication, validation, and documentation.",
      icon: <Database className="w-8 h-8" />,
      features: ["REST API Design", "Authentication & Authorization", "Database Integration", "API Documentation"],
    },
    {
      title: "Web Application Development",
      description:
        "Full-stack web application development with Django backend and modern frontend frameworks like React and Next.js.",
      icon: <Globe className="w-8 h-8" />,
      features: ["Full-Stack Development", "Responsive Design", "Database Design", "Performance Optimization"],
    },
    {
      title: "Database Design & Optimization",
      description:
        "Design efficient database schemas, optimize queries, and ensure data integrity for your applications.",
      icon: <Code className="w-8 h-8" />,
      features: ["Schema Design", "Query Optimization", "Data Migration", "Performance Tuning"],
    },
    {
      title: "System Integration",
      description: "Integrate third-party services, payment gateways, and external APIs into your existing systems.",
      icon: <ExternalLink className="w-8 h-8" />,
      features: ["Third-party APIs", "Payment Integration", "Webhook Implementation", "Data Synchronization"],
    },
    {
      title: "DevOps & Deployment",
      description: "Deploy and maintain applications using Docker, cloud platforms, and implement CI/CD pipelines.",
      icon: <Star className="w-8 h-8" />,
      features: ["Docker Containerization", "Cloud Deployment", "CI/CD Setup", "Server Management"],
    },
    {
      title: "Code Review & Consultation",
      description: "Provide expert code reviews, architecture consultation, and technical guidance for your projects.",
      icon: <MessageCircle className="w-8 h-8" />,
      features: ["Code Review", "Architecture Planning", "Technical Consultation", "Best Practices"],
    },
  ]

  const education = [
    {
      type: "Bachelor's Degree",
      title: "Bachelor's in Engineering",
      field: "Computer Science & Engineering (CSE)",
      institution: "Uttara University",
      duration: "4 Years Program",
      description:
        "Comprehensive study in computer science fundamentals, software engineering, algorithms, data structures, and modern web technologies.",
      skills: ["Software Engineering", "Data Structures", "Algorithms", "Web Development"],
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      type: "Diploma",
      title: "Diploma in Engineering",
      field: "Computer Science & Technology",
      institution: "Jashore Polytechnic Institute",
      duration: "4 Years Program",
      description:
        "Strong foundation in computer science principles, programming fundamentals, and practical technology applications with hands-on experience.",
      skills: ["Programming", "Computer Networks", "Database Systems", "System Analysis"],
      icon: <BookOpen className="w-8 h-8" />,
    },
  ]

  const certifications = [
    {
      title: "CSE Fundamental with Phitron",
      field: "Computer Science Engineering Fundamentals",
      institution: "Phitron",
      type: "Professional Certification",
      description:
        "Comprehensive certification program covering core computer science concepts, programming fundamentals, problem-solving techniques, and software development best practices.",
      skills: ["Problem Solving", "Programming Logic", "Data Structures", "Algorithm Design", "Code Optimization"],
      icon: <Award className="w-8 h-8" />,
    },
  ]

  // Enhanced theme classes with better light mode colors
  const themeClasses = {
    background: isDarkMode
      ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      : "bg-gradient-to-br from-[#EBE7FA] via-[#F5F2FF] to-[#E8F4FD]",
    navbar: isDarkMode
      ? "backdrop-blur-sm bg-white/5 border-white/10"
      : "backdrop-blur-sm bg-white/20 border-purple-200/30",
    text: {
      primary: isDarkMode ? "text-white" : "text-slate-800",
      secondary: isDarkMode ? "text-gray-300" : "text-slate-600",
      accent: isDarkMode ? "text-purple-300" : "text-purple-700",
    },
    card: {
      base: isDarkMode
        ? "bg-white/10 backdrop-blur-md border-white/20"
        : "bg-[#F2DFF2]/80 backdrop-blur-md border-purple-200/40 shadow-lg",
      hover: isDarkMode
        ? "hover:bg-white/15"
        : "hover:bg-gradient-to-br hover:from-[#E8D5F2] hover:via-[#DDE8F8] hover:to-[#D4E6F1] hover:shadow-xl hover:border-purple-300/60",
    },
    badge: {
      primary: isDarkMode
        ? "bg-purple-600/20 text-purple-300 border-purple-300/30"
        : "bg-purple-200/60 text-purple-800 border-purple-300/50",
      secondary: isDarkMode
        ? "border-purple-300/50 text-purple-300"
        : "border-purple-500/60 text-purple-700 bg-white/40",
    },
    button: {
      primary: isDarkMode
        ? "bg-purple-600 hover:bg-purple-700 text-white"
        : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl",
      secondary: isDarkMode
        ? "border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900"
        : "border-purple-600 text-purple-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:border-transparent",
      ghost: isDarkMode
        ? "text-purple-300 hover:text-white hover:bg-purple-600/20"
        : "text-purple-700 hover:text-purple-800 hover:bg-purple-200/60",
    },
  }

  return (
    <div className={`min-h-screen ${themeClasses.background} transition-all duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${themeClasses.navbar} border-b transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-bold ${themeClasses.text.primary}`}>Ruhul Amin</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {["home", "about", "education", "skills", "experience", "services", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 ${
                      activeSection === section
                        ? `${themeClasses.text.accent} border-b-2 ${isDarkMode ? "border-purple-300" : "border-purple-600"}`
                        : `${themeClasses.text.primary} ${isDarkMode ? "hover:text-purple-300" : "hover:text-purple-700"}`
                    }`}
                  >
                    {section}
                  </button>
                ),
              )}

              {/* Theme Toggle */}
              <Button
                onClick={toggleTheme}
                size="sm"
                variant="ghost"
                className={`${themeClasses.text.primary} ${isDarkMode ? "hover:bg-white/10" : "hover:bg-purple-100/60"} p-2 transition-all duration-300`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                onClick={toggleTheme}
                size="sm"
                variant="ghost"
                className={`${themeClasses.text.primary} p-2 transition-all duration-300`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              <button className={themeClasses.text.primary} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {["home", "about", "education", "skills", "experience", "services", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left py-2 ${themeClasses.text.primary} ${isDarkMode ? "hover:text-purple-300" : "hover:text-purple-700"} capitalize transition-colors duration-300`}
                  >
                    {section}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className={`text-5xl md:text-7xl font-bold ${themeClasses.text.primary} mb-4`}>{homeData?.name}</h1>
            <h2
              className={`text-2xl md:text-3xl ${themeClasses.text.accent} mb-6 animate-pulse bg-gradient-to-r ${isDarkMode ? "from-purple-300 via-pink-300 to-purple-300" : "from-purple-700 via-indigo-700 to-purple-700"} bg-clip-text text-transparent bg-300% animate-gradient`}
            >
              {homeData.title}
            </h2>
            <p className={`text-xl ${themeClasses.text.secondary} mb-8 max-w-2xl mx-auto`}>
              {homeData.details}
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {/* Top row - Social Links */}
            <div className="flex justify-center gap-6">
              <Button
                variant="outline"
                className={`${themeClasses.button.secondary} px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent`}
                onClick={() => window.open(`${homeData.github_link}`, "_blank")}
              >
                <Github className="mr-2" size={20} />
                GitHub
              </Button>
              <Button
                variant="outline"
                className={`${themeClasses.button.secondary} px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent`}
                onClick={() => window.open(`${homeData.linkedin_link}`, "_blank")}
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </Button>
            </div>

            {/* Bottom row - Action Buttons */}
            <div className="flex justify-center gap-6">
              <Button
                className={`${themeClasses.button.primary} px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105`}
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2" size={20} />
                Hire Me
              </Button>
              <Button
                className={`${themeClasses.button.primary} px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105`}
                onClick={() => window.open(`http://127.0.0.1:8000/media/resume/${homeData.resume_download}`, "_blank")}
              >
                <Download className="mr-2" size={20} />
                Resume
              </Button>
            </div>
          </div>

          <div className="animate-bounce">
            <ChevronDown
              size={32}
              className={`${themeClasses.text.accent} mx-auto cursor-pointer`}
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold ${themeClasses.text.primary} text-center mb-16`}>About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div
                className={`w-80 h-80 mx-auto rounded-full overflow-hidden border-4 ${isDarkMode ? "border-purple-300" : "border-purple-600"} shadow-2xl`}
              >
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Md. Ruhul Amin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
            </div>

            <div className="space-y-6">
              <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-semibold ${themeClasses.text.primary} mb-4`}>Professional Summary</h3>
                  <p className={`${themeClasses.text.secondary} leading-relaxed mb-4`}>
                    I'm a dedicated Backend Developer with expertise in Django and Python, passionate about creating
                    robust, scalable web applications. With a strong foundation in software engineering principles and
                    modern development practices, I specialize in building RESTful APIs and database-driven
                    applications.
                  </p>
                  <p className={`${themeClasses.text.secondary} leading-relaxed mb-4`}>
                    My experience spans from designing efficient database schemas to implementing secure authentication
                    systems and optimizing application performance. I'm committed to writing clean, maintainable code
                    and following industry best practices.
                  </p>
                  <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                    staying updated with the latest trends in web development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-4`}>Education & Certifications</h2>
            <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
              My academic journey and professional development in computer science
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h3 className={`text-2xl font-semibold ${themeClasses.text.primary} mb-8 flex items-center`}>
              <GraduationCap className={`mr-3 ${themeClasses.text.accent}`} size={28} />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className={`${themeClasses.text.accent} mr-4 mt-1 transition-colors duration-300`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Badge className={`${themeClasses.badge.primary} mr-2 transition-all duration-300`}>
                            {edu.type}
                          </Badge>
                          <Badge
                            className={`${isDarkMode ? "bg-blue-600/20 text-blue-300 border-blue-300/30" : "bg-blue-200/60 text-blue-800 border-blue-300/50"} transition-all duration-300`}
                          >
                            {edu.duration}
                          </Badge>
                        </div>
                        <h4 className={`text-xl font-semibold ${themeClasses.text.primary} mb-1`}>{edu.title}</h4>
                        <h5 className={`text-lg ${themeClasses.text.accent} mb-2`}>{edu.field}</h5>
                        <p className={`${themeClasses.text.secondary} mb-3`}>{edu.institution}</p>
                      </div>
                    </div>
                    <p className={`${themeClasses.text.secondary} mb-4 leading-relaxed`}>{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className={`${themeClasses.badge.secondary} text-xs transition-all duration-300`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Certifications Section */}
          <div>
            <h3 className={`text-2xl font-semibold ${themeClasses.text.primary} mb-8 flex items-center`}>
              <Award className={`mr-3 ${themeClasses.text.accent}`} size={28} />
              Professional Certifications
            </h3>
            <div className="grid gap-8">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className={`${themeClasses.text.accent} mr-4 mt-1 transition-colors duration-300`}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Badge
                            className={`${isDarkMode ? "bg-green-600/20 text-green-300 border-green-300/30" : "bg-green-200/60 text-green-800 border-green-300/50"} mr-2 transition-all duration-300`}
                          >
                            Certified
                          </Badge>
                          <Badge className={`${themeClasses.badge.primary} transition-all duration-300`}>
                            {cert.type}
                          </Badge>
                        </div>
                        <h4 className={`text-xl font-semibold ${themeClasses.text.primary} mb-1`}>{cert.title}</h4>
                        <h5 className={`text-lg ${themeClasses.text.accent} mb-2`}>{cert.field}</h5>
                        <p className={`${themeClasses.text.secondary} mb-3`}>{cert.institution}</p>
                      </div>
                    </div>
                    <p className={`${themeClasses.text.secondary} mb-4 leading-relaxed`}>{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className={`${isDarkMode ? "border-green-300/50 text-green-300" : "border-green-500/60 text-green-700 bg-white/40"} text-xs transition-all duration-300`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold ${themeClasses.text.primary} text-center mb-16`}>Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className={`${themeClasses.text.accent} mr-3 transition-colors duration-300`} size={24} />
                  <h3 className={`text-xl font-semibold ${themeClasses.text.primary}`}>Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${themeClasses.badge.primary} transition-all duration-300`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Database className={`${themeClasses.text.accent} mr-3 transition-colors duration-300`} size={24} />
                  <h3 className={`text-xl font-semibold ${themeClasses.text.primary}`}>Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${themeClasses.badge.primary} transition-all duration-300`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className={`${themeClasses.text.accent} mr-3 transition-colors duration-300`} size={24} />
                  <h3 className={`text-xl font-semibold ${themeClasses.text.primary}`}>Programming</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${themeClasses.badge.primary} transition-all duration-300`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className={`${themeClasses.text.accent} mr-3 transition-colors duration-300`} size={24} />
                  <h3 className={`text-xl font-semibold ${themeClasses.text.primary}`}>Concepts</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${themeClasses.badge.primary} transition-all duration-300`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500 md:col-span-2 lg:col-span-1`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Database className={`${themeClasses.text.accent} mr-3 transition-colors duration-300`} size={24} />
                  <h3 className={`text-xl font-semibold ${themeClasses.text.primary}`}>Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${themeClasses.badge.primary} transition-all duration-300`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold ${themeClasses.text.primary} text-center mb-16`}>Work Experience</h2>

          <div className="max-w-4xl mx-auto">
            <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-semibold ${themeClasses.text.primary} mb-2`}>Backend Developer</h3>
                    <h4 className={`text-xl ${themeClasses.text.accent} mb-2`}>TRODAD International LTD</h4>
                  </div>
                  <div className={`flex items-center ${themeClasses.text.secondary}`}>
                    <Calendar className="mr-2" size={16} />
                    <span>March 2024 - Present</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                    Working as a Django Backend Developer, responsible for designing and implementing scalable backend
                    solutions for web applications. Key responsibilities include:
                  </p>

                  <ul className={`list-disc list-inside ${themeClasses.text.secondary} space-y-2 ml-4`}>
                    <li>Developing RESTful APIs using Django REST Framework</li>
                    <li>Designing and optimizing database schemas with PostgreSQL</li>
                    <li>Implementing user authentication and authorization systems</li>
                    <li>Writing comprehensive unit tests and maintaining code quality</li>
                    <li>Collaborating with frontend developers for seamless integration</li>
                    <li>Optimizing application performance and database queries</li>
                    <li>Deploying applications using Docker and cloud platforms</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge
                      className={`${isDarkMode ? "bg-purple-600 text-white" : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"} transition-all duration-300`}
                    >
                      Django
                    </Badge>
                    <Badge
                      className={`${isDarkMode ? "bg-purple-600 text-white" : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"} transition-all duration-300`}
                    >
                      Python
                    </Badge>
                    <Badge
                      className={`${isDarkMode ? "bg-purple-600 text-white" : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"} transition-all duration-300`}
                    >
                      REST API
                    </Badge>
                    <Badge
                      className={`${isDarkMode ? "bg-purple-600 text-white" : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"} transition-all duration-300`}
                    >
                      PostgreSQL
                    </Badge>
                    <Badge
                      className={`${isDarkMode ? "bg-purple-600 text-white" : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"} transition-all duration-300`}
                    >
                      Docker
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold ${themeClasses.text.primary} text-center mb-16`}>My Services</h2>
          <p className={`text-xl ${themeClasses.text.secondary} text-center mb-16 max-w-3xl mx-auto`}>
            I offer comprehensive backend development services to help bring your ideas to life with robust, scalable
            solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500 group`}
              >
                <CardContent className="p-6">
                  <div
                    className={`${themeClasses.text.accent} mb-4 group-hover:${isDarkMode ? "text-purple-200" : "text-purple-800"} transition-colors duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${themeClasses.text.primary} mb-3`}>{service.title}</h3>
                  <p className={`${themeClasses.text.secondary} mb-4 leading-relaxed`}>{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-center text-sm ${themeClasses.text.secondary}`}>
                        <div
                          className={`w-1.5 h-1.5 ${isDarkMode ? "bg-purple-400" : "bg-purple-600"} rounded-full mr-3`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full mt-6 ${isDarkMode ? "bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-600/30 hover:border-purple-600" : "bg-purple-200/60 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 text-purple-700 hover:text-white border border-purple-300/50 hover:border-transparent"} transition-all duration-300`}
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold ${themeClasses.text.primary} text-center mb-16`}>Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}
              >
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold ${themeClasses.text.primary} mb-3`}>{project.title}</h3>
                  <p className={`${themeClasses.text.secondary} mb-4 leading-relaxed`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`${themeClasses.badge.secondary} transition-all duration-300`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`${themeClasses.button.secondary} bg-transparent transition-all duration-300`}
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className={`${themeClasses.button.primary} transition-all duration-300`}
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold ${themeClasses.text.primary} text-center mb-16`}>Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-semibold ${themeClasses.text.primary} mb-6`}>Let's Connect</h3>
              <p className={`${themeClasses.text.secondary} mb-8 leading-relaxed`}>
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className={`${themeClasses.text.accent} mr-4`} size={20} />
                  <span className={themeClasses.text.primary}>ruhulamin@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className={`${themeClasses.text.accent} mr-4`} size={20} />
                  <span className={themeClasses.text.primary}>+880 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <MapPin className={`${themeClasses.text.accent} mr-4`} size={20} />
                  <span className={themeClasses.text.primary}>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className={`block ${themeClasses.text.primary} mb-2`}>Name</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-300" : "bg-white/70 border border-purple-200/50 text-slate-800 placeholder-slate-500 focus:border-purple-500"} focus:outline-none transition-all duration-300`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text.primary} mb-2`}>Email</label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-300" : "bg-white/70 border border-purple-200/50 text-slate-800 placeholder-slate-500 focus:border-purple-500"} focus:outline-none transition-all duration-300`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text.primary} mb-2`}>Message</label>
                    <textarea
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-300" : "bg-white/70 border border-purple-200/50 text-slate-800 placeholder-slate-500 focus:border-purple-500"} focus:outline-none resize-none transition-all duration-300`}
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button className={`w-full ${themeClasses.button.primary} py-3 transition-all duration-300`}>
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 px-4 border-t ${isDarkMode ? "border-white/20" : "border-purple-200/40"} transition-all duration-300`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className={`text-2xl font-bold ${themeClasses.text.primary} mb-2`}>Md. Ruhul Amin</h3>
              <p className={themeClasses.text.secondary}>Django Backend Developer</p>
            </div>

            <div className="flex space-x-6">
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open("#", "_blank")}
              >
                <Linkedin size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open("#", "_blank")}
              >
                <Github size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open("#", "_blank")}
              >
                <MessageCircle size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open("mailto:ruhulamin@example.com")}
              >
                <Mail size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open("#", "_blank")}
              >
                <ExternalLink size={20} />
              </Button>
            </div>
          </div>

          <div
            className={`mt-8 pt-8 border-t ${isDarkMode ? "border-white/20" : "border-purple-200/40"} text-center transition-all duration-300`}
          >
            <p className={themeClasses.text.secondary}>
              © 2024 Md. Ruhul Amin. All rights reserved. Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
