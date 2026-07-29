"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

interface HeroProps {
  onEnquire: () => void;
}

export default function Hero({ onEnquire }: HeroProps) {
  const scrollDown = () => {
    const el = document.querySelector("#trusted-by");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 120% 80% at 50% -10%, #1a1040 0%, #050816 60%)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="grid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Glowing orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "30%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "120px 24px 80px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(99,102,241,0.12)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 50,
            padding: "6px 18px",
            marginBottom: 32,
            fontSize: 13,
            fontWeight: 600,
            color: "#a5b4fc",
            letterSpacing: "0.5px",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#6366f1",
              boxShadow: "0 0 10px rgba(99,102,241,0.8)",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
          🚀 Trusted by 150+ Enterprise Partners
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(42px, 7vw, 80px)",
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: "-2px",
            marginBottom: 24,
            color: "#f0f4ff",
          }}
        >
          Next-Gen Expertise
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            For Your Enterprise
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "#94a3b8",
            lineHeight: 1.7,
            maxWidth: 660,
            margin: "0 auto 48px",
          }}
        >
          Precision upskilling in AI, Data Science, Product Management &
          Leadership. Built for the world's most ambitious organizations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onEnquire}
            className="btn-primary"
          >
            Request Enterprise Access
            <ArrowRight size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary"
          >
            <Download size={16} />
            Download Brochure
          </motion.button>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            marginTop: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "5,000+", label: "Professionals Trained" },
            { value: "95%", label: "Satisfaction Rate" },
            { value: "150+", label: "Enterprise Partners" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollDown}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#475569",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>
          Scroll
        </span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
