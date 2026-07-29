"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DOMAINS } from "@/lib/data";

export default function DomainExpertise() {
  return (
    <section
      id="solutions"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, #050816 0%, #080d24 100%)",
        position: "relative",
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
          style={{ textAlign: "center", marginBottom: 72 }}
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
            Domain Expertise
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
            Specialized Programs
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
              Built for Scale
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
            Five carefully crafted domains covering the full spectrum of
            enterprise capability building.
          </p>
        </motion.div>

        {/* First row — 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            marginBottom: 24,
          }}
        >
          {DOMAINS.slice(0, 3).map((domain, i) => (
            <DomainCard key={domain.title} domain={domain} index={i} />
          ))}
        </div>

        {/* Second row — 2 cards centered */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 24,
            maxWidth: 680,
            margin: "0 auto",
          }}
          className="domain-bottom-row"
        >
          {DOMAINS.slice(3).map((domain, i) => (
            <DomainCard key={domain.title} domain={domain} index={i + 3} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .domain-bottom-row {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

function DomainCard({
  domain,
  index,
}: {
  domain: (typeof DOMAINS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-card"
      style={{
        padding: "32px",
        cursor: "pointer",
        transition: "box-shadow 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient blob */}
      <div
        style={{
          position: "absolute",
          top: -30,
          right: -30,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${domain.color}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: `linear-gradient(135deg, ${domain.color}33, ${domain.color}11)`,
          border: `1px solid ${domain.color}33`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        {domain.icon}
      </div>

      <h3
        style={{
          fontSize: 19,
          fontWeight: 700,
          color: "#f0f4ff",
          marginBottom: 12,
          letterSpacing: "-0.3px",
        }}
      >
        {domain.title}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "#94a3b8",
          lineHeight: 1.7,
          marginBottom: 20,
        }}
      >
        {domain.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {domain.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: domain.color,
              background: `${domain.color}15`,
              border: `1px solid ${domain.color}30`,
              borderRadius: 50,
              padding: "4px 12px",
              letterSpacing: "0.3px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Learn more */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "transparent",
          border: "none",
          color: domain.color,
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          padding: 0,
        }}
      >
        Learn more <ArrowRight size={14} />
      </button>
    </motion.div>
  );
}
