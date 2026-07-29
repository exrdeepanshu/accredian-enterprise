"use client";

import { COMPANY_LOGOS } from "@/lib/data";
import { motion } from "framer-motion";

export default function TrustedBy() {
  // Duplicate for seamless loop
  const logos = [...COMPANY_LOGOS, ...COMPANY_LOGOS];

  return (
    <section
      id="trusted-by"
      style={{
        padding: "80px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
        position: "relative",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      {/* Fade masks */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background:
            "linear-gradient(to right, #050816, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background:
            "linear-gradient(to left, #050816, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: 40, padding: "0 24px" }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#475569",
          }}
        >
          Trusted by world-class organizations
        </p>
      </motion.div>

      {/* Marquee */}
      <div style={{ overflow: "hidden" }}>
        <div className="marquee-track">
          {logos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 32px",
                margin: "0 8px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                minWidth: 160,
                flexShrink: 0,
                transition: "all 0.2s ease",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#a5b4fc",
                  letterSpacing: "0.5px",
                  flexShrink: 0,
                }}
              >
                {logo.abbr}
              </div>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#94a3b8",
                  whiteSpace: "nowrap",
                }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
