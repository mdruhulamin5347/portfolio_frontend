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
  Facebook,
} from "lucide-react"
import { aboutAPIFetch, contactInfoAPIFetch, courseAPIFetch, educationAPIFetch, HomeApiFetch, projectAPIFetch, serviceAPIFetch, skillsAPIFetch, workExperinceAPIFetch } from "@/routes/api"


interface homeDataType {
  name : string;
  title : string;
  details : string;
  github_link : string;
  linkedin_link : string;
  resume_download : string;
}

interface aboutDataType {
  title : string;
  details : string;
  picture : string;
}


interface educationDataType {
  degree : string;
  duration : string;
  title : string;
  course_name : string;
  institute : string;
  details : string;
  technologies : technologiesType[];
}

interface technologiesType{
  Section : string;
  name : string;
}


interface courseType {
  degree : string;
  duration : string;
  title : string;
  course_name : string;
  institute : string;
  details : string;
  technologies : technologiesType[];
}

interface skillsType{
  title : string;
  technologies : technologiesType[];
  icon : string;
}

interface workExperinceDataType {
  company : string;
  position : string;
  start_date : string;
  end_date : string;
  responsibilities : string;
  technologies : technologiesType[];
}

interface serviceDataType {
  title : string;
  description : string;
  icon : string;
}

interface projectDataType {
  title : string;
  description : string;
  technologies : technologiesType[];
  github_link : string;
  live_demo_link : string;
  image : string;
}

interface contactInfoDataType {
  email : string;
  phone_number : string;
  location : string;
  whats_app : string;
  facebook_link : string;
  codeforces_link : string;
  codechef_link : string;
  personal_website : string;
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Changed to false for light mode default

  const [homeData, sethomeData] = useState({} as homeDataType);
  const [aboutData, setAboutData] = useState({} as aboutDataType);
  const [educationData, setEducationData] = useState([] as educationDataType[]);
  const [courseData , setCourseData] = useState([] as courseType[]);
  const [skillData, setSkillsData] = useState([] as skillsType[]);
  const [workExperinceData, setWorkExperinceData] = useState([] as workExperinceDataType[]);
  const [serviceData , setServiceData] = useState([] as serviceDataType[]);
  const [projectData , setProjectData] = useState([] as projectDataType[]);
  const [contactInfoData , setContactInfoData] = useState({} as contactInfoDataType);

  useEffect(() => {
    const fetchAndLogHomeData = async () => {
    const homeData = await HomeApiFetch();
    sethomeData(homeData as homeDataType  );
    
  };
  fetchAndLogHomeData();
  }, [])


  useEffect(()=>{
    const fetchAndLogAboutData = async () => {
      const aboutData = await aboutAPIFetch();
      setAboutData(aboutData as aboutDataType);
    }
    fetchAndLogAboutData();


  },[])



  useEffect(()=>{
    const fetchAndLogEducationData = async () =>{
      const educationData = await educationAPIFetch();
      setEducationData(educationData as educationDataType[])
    }
    fetchAndLogEducationData();
  },[])



  useEffect(()=>{
    const fetchAndLogCourseData = async ()=>{
      const courseData = await courseAPIFetch();
      setCourseData(courseData as courseType[])
    }
    fetchAndLogCourseData();
  },[])


  useEffect(()=>{
    const fetchAndLogSkillsData = async ()=>{
      const skillsData = await skillsAPIFetch();
      setSkillsData(skillsData as skillsType[]);
    }
    fetchAndLogSkillsData();

  },[])



  useEffect(()=>{
    const fetchAndLogWorkExperinceData = async ()=>{
      const workExperinceData = await workExperinceAPIFetch();
      setWorkExperinceData(workExperinceData as workExperinceDataType[]);
    }
    fetchAndLogWorkExperinceData();
  },[])

    useEffect(()=>{
    const fetchAndLogServiceData = async ()=>{
      const serviceData = await serviceAPIFetch();
      setServiceData(serviceData as serviceDataType[]);
    }
    fetchAndLogServiceData();
  },[])

    useEffect(()=>{
    const fetchAndLogProjectData = async ()=>{
      const projectData = await projectAPIFetch();
      setProjectData(projectData as projectDataType[]);
    }
    fetchAndLogProjectData();
  },[])

    useEffect(()=>{
    const fetchAndLogContactInfoData = async ()=>{
      const contactInfoData = await contactInfoAPIFetch();
      setContactInfoData(contactInfoData as contactInfoDataType);
    }
    fetchAndLogContactInfoData();
  },[])



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



  // Enhanced theme classes with better light mode colors
  const themeClasses = {
    background: isDarkMode
      ? "bg-gradient-to-br from-[#020024] via-[#090979] to-[#000000]"
      : "bg-gradient-to-br from-[#E9E4F0] via-[#D3CCE3] to-[#E9E4F0]",
    navbar: isDarkMode
      ? "backdrop-blur-sm bg-black/20 border-cyan-400/20"
      : "backdrop-blur-sm bg-white/50 border-purple-300/30",
    text: {
      primary: isDarkMode ? "text-white" : "text-slate-900",
      secondary: isDarkMode ? "text-gray-400" : "text-slate-700",
      accent: isDarkMode ? "text-cyan-400" : "text-indigo-600",
      accent2: isDarkMode ? "text-fuchsia-500" : "text-purple-700",
    },
    card: {
      base: isDarkMode
        ? "bg-black/30 backdrop-blur-lg border border-cyan-400/20 shadow-lg shadow-cyan-500/10"
        : "bg-gradient-to-br from-[#E8D5F2] via-[#DDE8F8] to-[#D4E6F1] shadow-xl border-purple-300/60",
      hover: isDarkMode
        ? "hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/30"
        : "hover:bg-gradient-to-br hover:from-[#D4E6F1] hover:via-[#DDE8F8] hover:to-[#E8D5F2] hover:shadow-xl hover:border-purple-300/60",
    },
    badge: {
      primary: isDarkMode
        ? "bg-cyan-400/10 text-fuchsia-400 border border-cyan-400/30"
        : "bg-indigo-100 text-indigo-800 border border-indigo-200/80",
      secondary: isDarkMode
        ? "bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30"
        : "bg-purple-100 text-purple-800 border border-purple-200/80",
    },
    button: {
      primary: isDarkMode
        ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white hover:from-fuchsia-500 hover:to-cyan-500 shadow-lg shadow-cyan-500/20"
        : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-purple-600 hover:to-indigo-600 shadow-lg hover:shadow-xl",
      secondary: isDarkMode
        ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
        : "border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white",
      ghost: isDarkMode
        ? "text-cyan-400 hover:text-black hover:bg-cyan-400"
        : "text-indigo-700 hover:text-white hover:bg-indigo-600",
    },
    input: {
      base: isDarkMode
        ? "bg-black/20 border border-cyan-400/30 text-white placeholder-gray-500 focus:border-fuchsia-500 focus:ring-fuchsia-500/50"
        : "bg-white/80 border border-purple-300/50 text-slate-800 placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/50",
    }
  };

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
                        ? `${themeClasses.text.accent} border-b-2 ${isDarkMode ? "border-cyan-400" : "border-indigo-600"}`
                        : `${themeClasses.text.primary} hover:${themeClasses.text.accent}`
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
                className={`${isDarkMode ? "hover:bg-cyan-400/10" : "hover:bg-indigo-100"} ${themeClasses.text.accent} p-2 transition-all duration-300`}
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
                className={`${themeClasses.text.accent} p-2 transition-all duration-300`}
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
                    className={`block w-full text-left py-2 ${themeClasses.text.primary} hover:${themeClasses.text.accent} capitalize transition-colors duration-300`}
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
              className={`text-2xl md:text-3xl ${themeClasses.text.accent2} mb-6 animate-pulse bg-gradient-to-r ${isDarkMode ? "from-fuchsia-500 via-cyan-400 to-fuchsia-500" : "from-purple-700 via-indigo-700 to-purple-700"} bg-clip-text text-transparent bg-300% animate-gradient`}
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
                onClick={() => window.open(`${process.env.NEXT_PUBLIC_BACKEND_URL}/media/resume/${homeData.resume_download}`, "_blank")}
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
                className={`w-80 h-80 mx-auto rounded-full overflow-hidden border-4 ${isDarkMode ? "border-cyan-400" : "border-indigo-600"} shadow-2xl`}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${aboutData.picture}`}
                  alt="Md. Ruhul Amin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
            </div>

            <div className="space-y-6">
              <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-semibold ${themeClasses.text.primary} mb-4`}>{aboutData.title}</h3>
                  
                  <div
                    className={`${themeClasses.text.secondary} leading-relaxed space-y-2 list-disc list-inside`}
                    dangerouslySetInnerHTML={{ __html: aboutData.details }} 
                  />
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
              {educationData.map((edu, index) => (
                <Card
                  key={index}
                  className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className={`${themeClasses.text.accent} mr-4 mt-1 transition-colors duration-300`}>
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Badge className={`${themeClasses.badge.primary} mr-2 transition-all duration-300`}>
                            {edu.degree}
                          </Badge>
                          <Badge
                            className={`${isDarkMode ? "bg-blue-600/20 text-blue-300 border-blue-300/30" : "bg-blue-200/60 text-blue-800 border-blue-300/50"} transition-all duration-300`}
                          >
                            {edu.duration}
                          </Badge>
                        </div>
                        <h4 className={`text-xl font-semibold ${themeClasses.text.primary} mb-1`}>{edu.title}</h4>
                        <h5 className={`text-lg ${themeClasses.text.accent2} mb-2`}>{edu.course_name}</h5>
                        <p className={`${themeClasses.text.secondary} mb-3`}>{edu.institute}</p>
                      </div>
                    </div>
                    <p className={`${themeClasses.text.secondary} mb-4 leading-relaxed`}>{edu.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.technologies.map((skill) => (
                        <Badge
                          key={skill?.name}
                          variant="outline"
                          className={`${themeClasses.badge.secondary} transition-all duration-300`}
                        >
                          {skill?.name}
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
              {courseData.map((cert, index) => (
                <Card
                  key={index}
                  className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className={`${themeClasses.text.accent} mr-4 mt-1 transition-colors duration-300`}>
                        <Award className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Badge
                            className={`${isDarkMode ? "bg-green-600/20 text-green-300 border-green-300/30" : "bg-green-200/60 text-green-800 border-green-300/50"} mr-2 transition-all duration-300`}
                          >
                            {cert.degree}
                          </Badge>
                          <Badge className={`${themeClasses.badge.primary} transition-all duration-300`}>
                            {cert.duration}
                          </Badge>
                        </div>
                        <h4 className={`text-xl font-semibold ${themeClasses.text.primary} mb-1`}>{cert.title}</h4>
                        <h5 className={`text-lg ${themeClasses.text.accent2} mb-2`}>{cert.course_name}</h5>
                        <p className={`${themeClasses.text.secondary} mb-3`}>{cert.institute}</p>
                      </div>
                    </div>
                    <p className={`${themeClasses.text.secondary} mb-4 leading-relaxed`}>{cert.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.technologies.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="outline"
                          className={`${themeClasses.badge.secondary} transition-all duration-300`}
                        >
                          {skill.name}
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

            {skillData.map((skillData) =>(

              <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Database className={`${themeClasses.text.accent} mr-3 transition-colors duration-300`} size={24} />
                  <h3 className={`text-xl font-semibold ${themeClasses.text.primary}`}>{skillData.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillData.technologies.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className={`${themeClasses.badge.primary} transition-all duration-300`}
                    >
                      {skill.name}
                    </Badge>

                  ))}
                </div>
              </CardContent>
            </Card>
            ))}

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold ${themeClasses.text.primary} text-center mb-16`}>Work Experience</h2>

          <div className="max-w-4xl mx-auto">

            {workExperinceData.map((experience) =>(
              <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-semibold ${themeClasses.text.primary} mb-2`}>{experience.position}</h3>
                    <h4 className={`text-xl ${themeClasses.text.accent2} mb-2`}>{experience.company}</h4>
                  </div>
                  <div className={`flex items-center ${themeClasses.text.secondary}`}>
                    <Calendar className="mr-2" size={16} />
                    <span>{experience.start_date}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div
                    className={`${themeClasses.text.secondary} leading-relaxed space-y-2 list-disc list-inside`}
                    dangerouslySetInnerHTML={{ __html: experience.responsibilities }}
                  />
                              

                  <div className="flex flex-wrap gap-2 mt-6">
                    {experience.technologies.map((tech)=>(
                        <Badge
                          className={`${themeClasses.badge.secondary} transition-all duration-300`}
                        >
                          {tech.name}
                        </Badge>
                    ))}                    
                    
                  </div>                  
                </div>
              </CardContent>
            </Card>
            ))}
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
            {serviceData.map((service, index) => (
              <Card
                key={index}
                className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500 group`}
              >
                <CardContent className="p-6">
                  <div
                    className={`${themeClasses.text.accent} mb-4 group-hover:${themeClasses.text.accent2} transition-colors duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${themeClasses.text.primary} mb-3`}>{service.title}</h3>
                  {/* <p className={`${themeClasses.text.secondary} mb-4 leading-relaxed`}>{service.description}</p> */}
                  <div
                    className={`${themeClasses.text.secondary} leading-relaxed space-y-2 list-disc list-inside`}
                    dangerouslySetInnerHTML={{ __html: service.description }} 
                  />
            

                  <Button
                    className={`w-full mt-6 ${themeClasses.button.primary} transition-all duration-300`}
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
            {projectData.map((project, index) => (
              <Card
                key={index}
                className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}
              >
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold ${themeClasses.text.primary} mb-3`}>{project.title}</h3>
                  <p className={`${themeClasses.text.secondary} mb-4 leading-relaxed`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="outline"
                        className={`${themeClasses.badge.secondary} transition-all duration-300`}
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`${themeClasses.button.secondary} bg-transparent transition-all duration-300`}
                      onClick={() => window.open(project.github_link, "_blank")}
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className={`${themeClasses.button.primary} transition-all duration-300`}
                      onClick={() => window.open(project.live_demo_link, "_blank")}
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
                  <span className={themeClasses.text.primary}>{contactInfoData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className={`${themeClasses.text.accent} mr-4`} size={20} />
                  <span className={themeClasses.text.primary}>{contactInfoData.phone_number}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className={`${themeClasses.text.accent} mr-4`} size={20} />
                  <span className={themeClasses.text.primary}>{contactInfoData.location}</span>
                </div>
              </div>
            </div>

            <Card className={`${themeClasses.card.base} ${themeClasses.card.hover} transition-all duration-500`}>
              <CardContent className="p-8">
                <form className="space-y-6" >
                  <div>
                    <label className={`block ${themeClasses.text.primary} mb-2`}>Name</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg ${themeClasses.input.base} focus:outline-none transition-all duration-300`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text.primary} mb-2`}>Email</label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg ${themeClasses.input.base} focus:outline-none transition-all duration-300`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text.primary} mb-2`}>Message</label>
                    <textarea
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg ${themeClasses.input.base} focus:outline-none resize-none transition-all duration-300`}
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
        className={`py-12 px-4 border-t ${isDarkMode ? "border-cyan-400/20" : "border-purple-200/40"} transition-all duration-300`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className={`text-2xl font-bold ${themeClasses.text.primary} mb-2`}>{homeData.name}</h3>
              <p className={themeClasses.text.secondary}>{homeData.title}</p>
            </div>

            <div className="flex space-x-6">
              {/* GitHub */}
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open(`${homeData.github_link}`, "_blank")}
              >
                <Github size={20} />
              </Button>

              {/* LinkedIn */}
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open(`${homeData.linkedin_link}`, "_blank")}
              >
                <Linkedin size={20} />
              </Button>

              {/* Codeforces */}
              {/* <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open(`${contactInfoData.codeforces_link}`, "_blank")}
              >
                <Code size={20} /> 
              </Button> */}

              {/* CodeChef */}
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open(`${contactInfoData.codechef_link}`, "_blank")}
              >
                <Code size={20} /> {/* You can replace this with a CodeChef SVG icon */}
              </Button>

              {/* WhatsApp */}
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open(`${contactInfoData.whats_app}`, "_blank")}
              >
                <MessageCircle size={20} />
              </Button>

              {/* Facebook */}
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open(`${contactInfoData.facebook_link}`, "_blank")}
              >
                <Facebook size={20} /> {/* Use Facebook icon if available */}
              </Button>

              {/* Email */}
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => {
                  const email = contactInfoData?.email || "mdruhulamin534793@gmail.com";
                  window.open(`mailto:${email}`);
                }}
              >
                <Mail size={20} />
              </Button>

              

              {/* External Website */}
              <Button
                size="sm"
                variant="ghost"
                className={`${themeClasses.button.ghost} transition-all duration-300`}
                onClick={() => window.open(`${contactInfoData.personal_website}`, "_blank")}
              >
                <ExternalLink size={20} />
              </Button>
            </div>
          </div>

          <div
            className={`mt-8 pt-8 border-t ${isDarkMode ? "border-cyan-400/20" : "border-purple-200/40"} text-center transition-all duration-300`}
          >
            <p className={themeClasses.text.secondary}>
              © 2023 Md. Ruhul Amin. All rights reserved. Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}