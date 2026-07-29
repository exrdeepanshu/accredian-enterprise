"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

interface NavbarProps {
  onEnquire: () => void;
}

export default function Navbar({ onEnquire }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled
            ? "rgba(5, 8, 22, 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zap size={18} color="white" fill="white" />
            </div>
            <div>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.5px",
                }}
              >
                Accredian
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: "#94a3b8",
                  display: "block",
                  marginTop: -4,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Enterprise
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "8px 16px",
                  borderRadius: 8,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#f0f4ff";
                  (e.target as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#94a3b8";
                  (e.target as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onEnquire}
              className="btn-primary hidden md:inline-flex"
              style={{ fontSize: 14, padding: "10px 24px" }}
            >
              Enquire Now
            </motion.button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: 8,
                cursor: "pointer",
                color: "#f0f4ff",
                display: "flex",
              }}
              className="md:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 70,
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(5, 8, 22, 0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "20px 24px",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => {
                setMobileOpen(false);
                onEnquire();
              }}
              className="btn-primary"
              style={{ marginTop: 20, width: "100%", justifyContent: "center" }}
            >
              Enquire Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
