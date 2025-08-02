import React, { useState, useEffect } from "react";

const courses = [
  {
    icon: "🧠",
    title: "Aptitude & Reasoning",
    description: "Enhance logical thinking and problem-solving abilities with comprehensive practice modules.",
    category: "Core Skills",
    duration: "8 weeks",
    students: "2.4k",
    color: "#FF6B6B",
    accent: "#4ECDC4"
  },
  {
    icon: "📊",
    title: "Data Structures & Algorithms",
    description: "Master time complexity and advanced problem solving techniques.",
    category: "Programming",
    duration: "12 weeks",
    students: "3.1k",
    color: "#45B7D1",
    accent: "#96CEB4"
  },
  {
    icon: "🖥️",
    title: "Operating Systems",
    description: "Learn about processes, threads, and advanced scheduling algorithms.",
    category: "Systems",
    duration: "10 weeks",
    students: "1.8k",
    color: "#FFA07A",
    accent: "#98D8C8"
  },
  {
    icon: "🗄️",
    title: "Database Management",
    description: "Understand relational databases, SQL, and modern database systems.",
    category: "Data",
    duration: "6 weeks",
    students: "2.7k",
    color: "#DDA0DD",
    accent: "#F7DC6F"
  },
  {
    icon: "🌐",
    title: "Computer Networks",
    description: "Gain knowledge of protocols, models, and network architecture.",
    category: "Networking",
    duration: "9 weeks",
    students: "1.5k",
    color: "#87CEEB",
    accent: "#FFB6C1"
  },
  {
    icon: "🎯",
    title: "Interview Preparation",
    description: "Prepare with mock interviews, tips, and real-world scenarios.",
    category: "Career",
    duration: "4 weeks",
    students: "4.2k",
    color: "#FFD700",
    accent: "#FF69B4"
  },
];

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const categories = ["All", "Core Skills", "Programming", "Systems", "Data", "Networking", "Career"];

  const filteredCourses = activeFilter === "All" 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-700 ${
      isDarkMode 
        ? 'bg-[#1a1a2e] text-white' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
    }`}>
      {/* Custom Cursor Trail */}
      <div 
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ${
          isDarkMode ? 'bg-yellow-400' : 'bg-purple-600'
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full transition-all duration-700 ${
              isDarkMode ? 'bg-white/10' : 'bg-purple-500/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className={`relative z-10 backdrop-blur-sm border-b transition-all duration-700 ${
        isDarkMode 
          ? 'bg-black/20 border-white/10' 
          : 'bg-white/80 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className={`w-12 h-12 rounded-2xl transform rotate-12 hover:rotate-0 transition-all duration-300 shadow-lg ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500' 
                    : 'bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600'
                }`}>
                  <div className={`absolute inset-1 rounded-xl transition-all duration-300 ${
                    isDarkMode ? 'bg-black/20' : 'bg-white/20'
                  }`}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-white font-black text-xl">B</span>
                </div>
              </div>
              <div>
                <h1 className={`text-3xl font-black tracking-tight transition-all duration-700 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <span className={`bg-clip-text text-transparent transition-all duration-700 ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500' 
                      : 'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600'
                  }`}>
                    BROFESSOR
                  </span>
                </h1>
                <div className="flex space-x-1 mt-1">
                  <div className={`w-1 h-1 rounded-full animate-pulse transition-all duration-700 ${
                    isDarkMode ? 'bg-yellow-400' : 'bg-purple-600'
                  }`}></div>
                  <div className={`w-1 h-1 rounded-full animate-pulse transition-all duration-700 ${
                    isDarkMode ? 'bg-orange-500' : 'bg-blue-600'
                  }`} style={{animationDelay: '0.2s'}}></div>
                  <div className={`w-1 h-1 rounded-full animate-pulse transition-all duration-700 ${
                    isDarkMode ? 'bg-red-500' : 'bg-indigo-600'
                  }`} style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Dashboard', 'Planner', 'Notes', 'Others'].map((item, i) => (
                <a 
                  key={item}
                  href="#" 
                  className={`font-medium transition-all duration-300 relative group ${
                    isDarkMode 
                      ? 'text-white/70 hover:text-yellow-400' 
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                  style={{animationDelay: `${i * 0.1}s`}}
                >
                  {item}
                  <div className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                    isDarkMode ? 'bg-yellow-400' : 'bg-purple-600'
                  } group-hover:w-full`}></div>
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={`relative w-16 h-8 rounded-full transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-600'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-500 shadow-lg ${
                  isDarkMode ? 'left-1' : 'left-9'
                }`}>
                  <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-yellow-400 opacity-20' 
                      : 'bg-purple-600 opacity-20'
                  }`}></div>
                </div>
                {/* Sun/Moon Icons */}
                <div className={`absolute inset-0 flex items-center justify-between px-2 transition-all duration-500 ${
                  isDarkMode ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span className="text-xs">🌙</span>
                  <span className="text-xs">☀️</span>
                </div>
              </button>
              
              <button className={`relative overflow-hidden px-8 py-3 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 group ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
              }`}>
                <span className="relative z-10">LOGIN</span>
                <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            {/* Unique Badge */}
            <div className={`inline-flex items-center space-x-3 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border transition-all duration-700 ${
              isDarkMode 
                ? 'bg-black/30 border-white/20' 
                : 'bg-white/60 border-gray-200'
            }`}>
              <div className={`w-3 h-3 rounded-full animate-ping transition-all duration-700 ${
                isDarkMode ? 'bg-yellow-400' : 'bg-purple-600'
              }`}></div>
              <span className={`font-bold tracking-wider transition-all duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>LIVE LEARNING PLATFORM</span>
              <div className={`w-3 h-3 rounded-full animate-ping transition-all duration-700 ${
                isDarkMode ? 'bg-orange-500' : 'bg-blue-600'
              }`} style={{animationDelay: '0.5s'}}></div>
            </div>
            
            <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight transition-all duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block">MASTER</span>
              <span className={`bg-clip-text text-transparent transition-all duration-700 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500' 
                  : 'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600'
              }`}>
                YOUR SKILLS
              </span>
            </h1>
            
            <p className={`text-xl mb-12 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-700 ${
              isDarkMode ? 'text-white/80' : 'text-gray-600'
            }`}>
              Explore comprehensive courses, watch expert tutorials, and practice with real-world scenarios. 
              Join thousands of learners advancing their careers with our unique approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className={`group relative overflow-hidden px-12 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
              }`}>
                <span className="relative z-10">START LEARNING</span>
                <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}></div>
              </button>
              <button className={`border-2 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm ${
                isDarkMode 
                  ? 'border-white/30 text-white hover:border-yellow-400 hover:text-yellow-400' 
                  : 'border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600'
              }`}>
                VIEW COURSES
              </button>
            </div>
          </div>
        </div>
        
        {/* Unique Decorative Elements */}
        <div className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 animate-spin transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
            : 'bg-gradient-to-br from-purple-400 to-blue-400'
        }`} style={{animationDuration: '20s'}}></div>
        <div className={`absolute top-40 right-20 w-24 h-24 rounded-full opacity-20 animate-pulse transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-orange-500 to-red-500' 
            : 'bg-gradient-to-br from-blue-500 to-indigo-500'
        }`}></div>
        <div className={`absolute bottom-20 left-1/4 w-16 h-16 rounded-full opacity-20 animate-bounce transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-red-500 to-pink-500' 
            : 'bg-gradient-to-br from-indigo-500 to-purple-500'
        }`}></div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative overflow-hidden px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                activeFilter === category
                  ? isDarkMode
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-2xl scale-105"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl scale-105"
                  : isDarkMode
                    ? "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-yellow-400"
                    : "bg-white/60 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-white hover:border-purple-600"
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {category}
              {activeFilter === category && (
                <div className={`absolute inset-0 transform scale-x-0 animate-pulse ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}></div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div 
              key={index} 
              className={`group relative backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-black/20 border border-white/10 hover:border-yellow-400/50' 
                  : 'bg-white/60 border border-gray-200 hover:border-purple-600/50'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Course Header */}
              <div className="relative p-8" style={{background: `linear-gradient(135deg, ${course.color}, ${course.accent})`}}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{course.icon}</span>
                  <span className={`text-xs px-4 py-2 rounded-full font-bold text-white backdrop-blur-sm ${
                    isDarkMode ? 'bg-black/30' : 'bg-white/30'
                  }`}>
                    {course.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{course.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{course.description}</p>
                
                {/* Unique Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
              </div>
              
              {/* Course Details */}
              <div className="p-8">
                <div className={`flex items-center justify-between mb-6 text-sm transition-all duration-700 ${
                  isDarkMode ? 'text-white/70' : 'text-gray-600'
                }`}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-full transition-all duration-700 ${
                      isDarkMode ? 'bg-yellow-400' : 'bg-purple-600'
                    }`}></div>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-full transition-all duration-700 ${
                      isDarkMode ? 'bg-orange-500' : 'bg-blue-600'
                    }`}></div>
                    <span>{course.students} students</span>
                  </div>
                </div>
                
                <button className={`w-full relative overflow-hidden py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 group ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                }`}>
                  <span className="relative z-10">VIEW RESOURCES</span>
                  <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                  }`}></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Stats Section */}
      <section className={`backdrop-blur-sm border-t py-20 transition-all duration-700 ${
        isDarkMode 
          ? 'bg-black/30 border-white/10' 
          : 'bg-white/60 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15k+", label: "Active Students", color: isDarkMode ? "yellow" : "purple" },
              { number: "50+", label: "Expert Instructors", color: isDarkMode ? "orange" : "blue" },
              { number: "200+", label: "Course Modules", color: isDarkMode ? "red" : "indigo" },
              { number: "95%", label: "Success Rate", color: isDarkMode ? "pink" : "purple" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`text-4xl font-black mb-2 bg-clip-text text-transparent transition-all duration-700 ${
                  stat.color === 'yellow' 
                    ? isDarkMode ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-purple-600 to-blue-600'
                    : stat.color === 'orange'
                    ? isDarkMode ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                    : stat.color === 'red'
                    ? isDarkMode ? 'bg-gradient-to-r from-red-500 to-pink-500' : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                    : isDarkMode ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gradient-to-r from-purple-600 to-indigo-600'
                }`}>
                  {stat.number}
                </div>
                <div className={`font-medium transition-all duration-700 ${
                  isDarkMode ? 'text-white/70' : 'text-gray-600'
                }`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`backdrop-blur-sm border-t py-16 transition-all duration-700 ${
        isDarkMode 
          ? 'bg-black/50 border-white/10' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-10 h-10 rounded-xl transform rotate-12 transition-all duration-700 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                    : 'bg-gradient-to-br from-purple-600 to-blue-600'
                }`}></div>
                <span className={`text-2xl font-black transition-all duration-700 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>BROFESSOR</span>
              </div>
              <p className={`text-sm leading-relaxed transition-all duration-700 ${
                isDarkMode ? 'text-white/60' : 'text-gray-600'
              }`}>
                Empowering students with comprehensive learning resources and expert guidance for career success.
              </p>
            </div>
            
            {[
              { title: "Platform", links: ["Home", "Dashboard", "Planner", "Notes"] },
              { title: "Support", links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"] },
              { title: "Connect", links: ["Twitter", "LinkedIn", "GitHub", "Discord"] }
            ].map((section, index) => (
              <div key={index}>
                <h4 className={`font-bold mb-4 transition-all duration-700 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{section.title}</h4>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className={`transition-colors duration-300 ${
                        isDarkMode 
                          ? 'text-white/60 hover:text-yellow-400' 
                          : 'text-gray-600 hover:text-purple-600'
                      }`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className={`border-t mt-12 pt-8 text-center text-sm transition-all duration-700 ${
            isDarkMode ? 'border-white/10 text-white/40' : 'border-gray-200 text-gray-500'
          }`}>
            <p>&copy; 2024 BROFESSOR. All rights reserved. | brofessor@gmail.com</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}
