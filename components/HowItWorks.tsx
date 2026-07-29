"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding"
      style={{
        background: "#050816",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#6366f1",
              marginBottom: 16,
            }}
          >
            The CAT Framework
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
            How We Transform
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Workforce
            </span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
            position: "relative",
          }}
        >
          {/* Connecting line (desktop) */}
          <div
            style={{
              position: "absolute",
              top: 60,
              left: "16.6%",
              right: "16.6%",
              height: 1,
              background:
                "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
              opacity: 0.3,
              pointerEvents: "none",
            }}
            className="hidden lg:block"
          />

          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ position: "relative" }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "40px 32px",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-8px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px rgba(99,102,241,0.2)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 28,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: `linear-gradient(135deg, ${step.color}33, ${step.color}11)`,
                      border: `1px solid ${step.color}44`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 48,
                      fontWeight: 900,
                      color: `${step.color}22`,
                      letterSpacing: "-3px",
                      lineHeight: 1,
                    }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#f0f4ff",
                    marginBottom: 14,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#94a3b8",
                    lineHeight: 1.75,
                  }}
                >
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div
                  style={{
                    marginTop: 28,
                    height: 3,
                    borderRadius: 2,
                    background: `linear-gradient(90deg, ${step.color}, transparent)`,
                    opacity: 0.6,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
