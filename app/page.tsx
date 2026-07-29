"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ImpactMetrics from "@/components/ImpactMetrics";
import HowItWorks from "@/components/HowItWorks";
import DomainExpertise from "@/components/DomainExpertise";
import WhoWeServe from "@/components/WhoWeServe";
import Testimonials from "@/components/Testimonials";
import EnterpriseFeatures from "@/components/EnterpriseFeatures";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import { STATS, TESTIMONIALS } from "@/lib/data";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  avatarColor: string;
  quote: string;
  rating: number;
  metric: string;
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [stats, setStats] = useState<Stat[]>(STATS);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);

  // Fetch stats from API
  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setStats(data.data);
      })
      .catch(() => {
        // fallback to static data already set
      });
  }, []);

  // Fetch testimonials from API
  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setTestimonials(data.data);
      })
      .catch(() => {
        // fallback to static data already set
      });
  }, []);

  return (
    <main>
      <Navbar onEnquire={() => setModalOpen(true)} />
      <Hero onEnquire={() => setModalOpen(true)} />
      <TrustedBy />
      <ImpactMetrics stats={stats} />
      <HowItWorks />
      <DomainExpertise />
      <WhoWeServe />
      <Testimonials testimonials={testimonials} />
      <EnterpriseFeatures />
      <CTABanner onEnquire={() => setModalOpen(true)} />
      <Footer />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
