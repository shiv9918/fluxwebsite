import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "@/components/layout/Layout"

import HomePage from "@/pages/home"
import FacultyPage from "@/pages/faculty/FacultyPage"
import AboutPage from "@/pages/about/AboutPage"
import EventsPage from "@/pages/events/events"
import ComingSoon from "@/components/comingSoon"
import MobileLayout from "@/components/layout/mobileLayout"

export default function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        {isMobile ? (
          // Full one‑page scrolling layout
          <MobileLayout />
        ) : (
          // Original route-based desktop layout
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faculty" element={<FacultyPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/team" element={<ComingSoon title="Team" />} />
              <Route path="/contact" element={<ComingSoon title="Contact" />} />
            </Route>
          </Routes>
        )}
      </div>
    </BrowserRouter>
  )
}
