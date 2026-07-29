"use client";

import { Zap, X, Link2, Code2, Mail } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#030710",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "80px 0 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(4, 1fr)",
            gap: 48,
            marginBottom: 64,
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
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
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Accredian
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#475569",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginTop: -2,
                  }}
                >
                  Enterprise
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#64748b",
                lineHeight: 1.7,
                maxWidth: 260,
                marginBottom: 28,
              }}
            >
              Next-gen workforce learning platform for the world&apos;s most
              ambitious organizations.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: <X size={16} />, label: "Twitter" },
                { icon: <Link2 size={16} />, label: "LinkedIn" },
                { icon: <Code2 size={16} />, label: "GitHub" },
                { icon: <Mail size={16} />, label: "Email" },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(99,102,241,0.15)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#a5b4fc";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(99,102,241,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#64748b";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            { title: "Solutions", links: FOOTER_LINKS.solutions },
            { title: "Company", links: FOOTER_LINKS.company },
            { title: "Resources", links: FOOTER_LINKS.resources },
            { title: "Legal", links: FOOTER_LINKS.legal },
          ].map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#f0f4ff",
                  marginBottom: 20,
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 12 }}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: 14,
                        color: "#64748b",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLAnchorElement).style.color = "#a5b4fc";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLAnchorElement).style.color = "#64748b";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "#374151",
            }}
          >
            © {currentYear} Accredian Enterprise. All rights reserved.
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#374151",
            }}
          >
            Made with ❤️ for the enterprise community
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
