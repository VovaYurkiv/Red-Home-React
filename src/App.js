import React from 'react';
import './App.css';
import AboutSection from './components/AboutSection';
import AdSection from './components/AdSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import QuoteSection from './components/QuoteSection';
import ServiceSection from './components/ServiceSection';
import WorkSection from './components/WorkSection';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <WorkSection />
      <AdSection />
      <BlogSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
