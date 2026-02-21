import { useCallback } from 'react'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import Timeline from './components/Timeline'
import ChemistrySection from './components/ChemistrySection'
import PhotoGallery from './components/PhotoGallery'
import InteractiveElements from './components/InteractiveElements'
import Nav from './components/Nav'
import './App.css'

function App() {
  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="app">
      <Nav onScrollToSection={scrollToSection} />
      <main>
        <Hero onScrollToSection={scrollToSection} />
        <LoveLetter />
        <Timeline />
        <ChemistrySection />
        <PhotoGallery />
        <InteractiveElements />
      </main>
    </div>
  )
}

export default App
