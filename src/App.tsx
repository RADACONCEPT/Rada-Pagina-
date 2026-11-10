/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenType, Project } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectModal } from './components/ProjectModal';
import { BookingModal } from './components/BookingModal';

import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { PortfolioScreen } from './screens/PortfolioScreen';
import { QuoteCalculatorScreen } from './screens/QuoteCalculatorScreen';
import { ContactScreen } from './screens/ContactScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f3] text-[#1c1c18] font-['Outfit']">
      {/* Fixed Navigation Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Screen Content */}
      <main className="flex-1 w-full pt-20">
        {currentScreen === 'home' && (
          <HomeScreen
            onSelectProject={handleSelectProject}
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'quienes-somos' && (
          <AboutScreen onOpenBooking={handleOpenBooking} />
        )}

        {currentScreen === 'servicios' && (
          <ServicesScreen
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'galeria' && (
          <PortfolioScreen
            onSelectProject={handleSelectProject}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentScreen === 'cotizador' && <QuoteCalculatorScreen />}

        {currentScreen === 'contactanos' && <ContactScreen />}
      </main>

      {/* Studio Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Floating WhatsApp with Tooltip */}
      <FloatingWhatsApp />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onOpenBooking={handleOpenBooking}
      />

      {/* Booking / Appointment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
