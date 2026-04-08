/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import UserSegmentation from './components/UserSegmentation';
import Testimonials from './components/Testimonials';
import BeforeAfter from './components/BeforeAfter';
import FullServices from './components/FullServices';
import Team from './components/Team';
import HowItWorks from './components/HowItWorks';
import HighTicket from './components/HighTicket';
import CTAStrip from './components/CTAStrip';
import Promotions from './components/Promotions';
import Insurance from './components/Insurance';
import FAQ from './components/FAQ';
import ClinicExperience from './components/ClinicExperience';
import AppointmentSection from './components/AppointmentSection';
import Directions from './components/Directions';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TrustBar from './components/TrustBar';
import WhyChooseUs from './components/WhyChooseUs';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <UserSegmentation />
        <WhyChooseUs />
        <Testimonials />
        <BeforeAfter />
        <CTAStrip />
        <FullServices />
        <Team />
        <HowItWorks />
        <HighTicket />
        <Promotions />
        <Insurance />
        <FAQ />
        <ClinicExperience />
        <AppointmentSection />
        <Directions />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
