"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

interface CTABannerProps {
  onEnquire: () => void;
}

export default function CTABanner({ onEnquire }: CTABannerProps) {
  return (
    <section
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        background: "#050816",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(6,182,212,0.08) 100%)",
          border: "1px solid rgba(99,102,241,0.25)",
          borderRadius: 28,
          padding: "clamp(48px, 8vw, 80px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <div
          style={{
            position: "absolute",
            top: -60,
            left: -60,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            right: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(99,102,241,0.15)",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: 50,
              padding: "6px 18px",
              marginBottom: 28,
              fontSize: 13,
              fontWeight: 600,
              color: "#a5b4fc",
            }}
          >
            ✨ Ready to get started?
          </motion.div>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 900,
              letterSpacing: "-2px",
              color: "#f0f4ff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Transform Your Workforce
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Starting Today
            </span>
          </h2>

          <p
            style={{
              fontSize: 18,
              color: "#94a3b8",
              lineHeight: 1.6,
              maxWidth: 540,
              margin: "0 auto 48px",
            }}
          >
            Join 150+ enterprises that trust Accredian to upskill their most
            critical asset — their people.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
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
          </div>

          {/* Trust badges */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {["SOC 2 Compliant", "GDPR Ready", "ISO 27001", "99.9% Uptime"].map(
              (badge) => (
                <div
                  key={badge}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#64748b",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#10b981",
                    }}
                  />
                  {badge}
                </div>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
