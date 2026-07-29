"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

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

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const active = testimonials[current];

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, #080d24 0%, #050816 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 900,
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
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#8b5cf6",
              marginBottom: 16,
            }}
          >
            Success Stories
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
            What Enterprise Leaders
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Are Saying
            </span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card"
            style={{
              padding: "clamp(32px, 5vw, 56px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top gradient line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
              }}
            />

            {/* Quote icon */}
            <div
              style={{
                position: "absolute",
                top: 32,
                right: 40,
                opacity: 0.06,
              }}
            >
              <Quote size={80} color="#8b5cf6" />
            </div>

            {/* Stars */}
            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 28,
              }}
            >
              {[...Array(active.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  color="#f59e0b"
                  fill="#f59e0b"
                />
              ))}
            </div>

            {/* Quote */}
            <p
              style={{
                fontSize: "clamp(17px, 2.5vw, 21px)",
                color: "#e2e8f0",
                lineHeight: 1.75,
                marginBottom: 40,
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              &ldquo;{active.quote}&rdquo;
            </p>

            {/* Metric badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
                borderRadius: 50,
                padding: "6px 16px",
                marginBottom: 32,
                fontSize: 13,
                fontWeight: 700,
                color: "#10b981",
              }}
            >
              📈 {active.metric}
            </div>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${active.avatarColor}, ${active.avatarColor}88)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 800,
                  color: "white",
                  letterSpacing: "1px",
                  flexShrink: 0,
                  border: `2px solid ${active.avatarColor}44`,
                }}
              >
                {active.avatar}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#f0f4ff",
                    marginBottom: 2,
                  }}
                >
                  {active.name}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#94a3b8",
                  }}
                >
                  {active.role}, {active.company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginTop: 40,
          }}
        >
          <button
            onClick={prev}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#94a3b8",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(99,102,241,0.2)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "#6366f1";
              (e.currentTarget as HTMLButtonElement).style.color = "#a5b4fc";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.05)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background:
                    i === current
                      ? "linear-gradient(90deg, #6366f1, #8b5cf6)"
                      : "rgba(255,255,255,0.15)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#94a3b8",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(99,102,241,0.2)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "#6366f1";
              (e.currentTarget as HTMLButtonElement).style.color = "#a5b4fc";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.05)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
