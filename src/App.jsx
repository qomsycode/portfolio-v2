import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SkillsExperience from './components/SkillsExperience'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Main Application Component
// Assembles all section components into a single page layout
function App() {
  return (
    // Global container with background color and font settings
    <div className="bg-[#020617] scroll-smooth font-inter selection:bg-sky-500/30">

      {/* Navigation Bar (Fixed) */}
      <Navbar />

      {/* Hero Section (Introduction) */}
      <Hero />

      {/* Projects Grid Section */}
      <Projects />

      {/* Combined Skills & Experience Section */}
      <SkillsExperience />

      {/* Contact Form/Details Section */}
      <Contact />

      {/* Simple Footer */}
      <Footer />
    </div>
  )
}

export default App
