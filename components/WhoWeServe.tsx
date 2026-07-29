"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WHO_WE_SERVE_TABS } from "@/lib/data";

export default function WhoWeServe() {
  const [activeTab, setActiveTab] = useState("tech");

  const activeData = WHO_WE_SERVE_TABS.find((t) => t.id === activeTab)!;

  return (
    <section
      id="who-we-serve"
      className="section-padding"
      style={{
        background: "#050816",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1000,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
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
            Who We Serve
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
            Tailored Learning for
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
              Every Role & Level
            </span>
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 56,
            flexWrap: "wrap",
            padding: "0 8px",
          }}
        >
          {WHO_WE_SERVE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "10px 22px",
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: 8,
                ...(activeTab === tab.id
                  ? {
                      background:
                        "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      borderColor: "transparent",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
                    }
                  : {
                      background: "transparent",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#94a3b8",
                    }),
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="glass-card"
            style={{
              padding: "clamp(32px, 5vw, 64px)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px, 5vw, 80px)",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 48,
                  marginBottom: 20,
                }}
              >
                {activeData.icon}
              </div>
              <h3
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 800,
                  color: "#f0f4ff",
                  marginBottom: 16,
                  letterSpacing: "-0.8px",
                  lineHeight: 1.2,
                }}
              >
                {activeData.headline}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "#94a3b8",
                  lineHeight: 1.75,
                }}
              >
                {activeData.description}
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#6366f1",
                  marginBottom: 24,
                }}
              >
                Key Benefits
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {activeData.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "16px 20px",
                      background: "rgba(99,102,241,0.06)",
                      border: "1px solid rgba(99,102,241,0.15)",
                      borderRadius: 12,
                    }}
                  >
                    <CheckCircle2 size={20} color="#6366f1" strokeWidth={2} />
                    <span
                      style={{
                        fontSize: 15,
                        color: "#e2e8f0",
                        fontWeight: 500,
                      }}
                    >
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <style>{`
              @media (max-width: 768px) {
                .who-serve-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
