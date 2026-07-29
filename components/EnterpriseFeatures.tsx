"use client";

import { motion } from "framer-motion";
import { ENTERPRISE_FEATURES } from "@/lib/data";

export default function EnterpriseFeatures() {
  return (
    <section
      id="features"
      className="section-padding"
      style={{
        background:
          "linear-gradient(135deg, #050816 0%, #0a0f2e 50%, #050816 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative grid */}
      <div
        className="grid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#06b6d4",
              marginBottom: 16,
            }}
          >
            Enterprise Grade
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              color: "#f0f4ff",
              lineHeight: 1.15,
            }}
          >
            Built for the
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #06b6d4, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Most Demanding Teams
            </span>
          </h2>
          <p
            style={{
              marginTop: 20,
              fontSize: 17,
              color: "#94a3b8",
              maxWidth: 520,
              margin: "20px auto 0",
              lineHeight: 1.6,
            }}
          >
            Enterprise-grade infrastructure that scales with your ambitions
            while keeping security and compliance front and center.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {ENTERPRISE_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card"
              style={{
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease",
                cursor: "default",
              }}
            >
              {/* Top glow line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: `linear-gradient(90deg, transparent, ${feature.color}88, transparent)`,
                }}
              />

              {/* Corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${feature.color}15 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 18,
                  background: `linear-gradient(135deg, ${feature.color}25, ${feature.color}10)`,
                  border: `1px solid ${feature.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  marginBottom: 24,
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#f0f4ff",
                  marginBottom: 12,
                  letterSpacing: "-0.3px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#94a3b8",
                  lineHeight: 1.75,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
