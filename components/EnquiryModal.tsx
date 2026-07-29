"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { X, CheckCircle, Loader2, ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
}

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TEAM_SIZE_OPTIONS = [
  "1–50",
  "51–200",
  "201–1000",
  "1001–5000",
  "5000+",
];

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.success) {
      setReferenceId(result.referenceId);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 300);
  };

  const inputStyle = (hasError: boolean) => ({
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${hasError ? "#ef4444" : "rgba(255,255,255,0.1)"}`,
    borderRadius: 10,
    color: "#f0f4ff",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(8px)",
              zIndex: 200,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 201,
              width: "100%",
              maxWidth: 520,
              maxHeight: "90vh",
              overflowY: "auto",
              margin: "0 16px",
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: "clamp(28px, 5vw, 48px)",
                background: "#0d1117",
                border: "1px solid rgba(99,102,241,0.2)",
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
                  borderRadius: "16px 16px 0 0",
                }}
              />

              {/* Close button */}
              <button
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  padding: 8,
                  cursor: "pointer",
                  color: "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <X size={16} />
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "24px 0" }}
                  >
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background: "rgba(16,185,129,0.15)",
                        border: "1px solid rgba(16,185,129,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px",
                      }}
                    >
                      <CheckCircle size={36} color="#10b981" />
                    </div>
                    <h3
                      style={{
                        fontSize: 24,
                        fontWeight: 800,
                        color: "#f0f4ff",
                        marginBottom: 12,
                      }}
                    >
                      Request Submitted! 🎉
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        color: "#94a3b8",
                        lineHeight: 1.6,
                        marginBottom: 20,
                      }}
                    >
                      Thank you! Our enterprise team will reach out within 24
                      hours.
                    </p>
                    <div
                      style={{
                        display: "inline-block",
                        background: "rgba(99,102,241,0.1)",
                        border: "1px solid rgba(99,102,241,0.2)",
                        borderRadius: 8,
                        padding: "8px 16px",
                        fontSize: 13,
                        color: "#a5b4fc",
                        fontFamily: "monospace",
                        marginBottom: 32,
                      }}
                    >
                      Ref: {referenceId}
                    </div>
                    <br />
                    <button
                      onClick={handleClose}
                      className="btn-primary"
                      style={{ fontSize: 14 }}
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  /* Form state */
                  <motion.div key="form" initial={{ opacity: 1 }}>
                    <h2
                      style={{
                        fontSize: 24,
                        fontWeight: 800,
                        color: "#f0f4ff",
                        marginBottom: 8,
                        letterSpacing: "-0.5px",
                      }}
                    >
                      Request Enterprise Access
                    </h2>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#94a3b8",
                        marginBottom: 32,
                        lineHeight: 1.5,
                      }}
                    >
                      Our team will reach out within 24 hours to discuss your
                      needs.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 20,
                        }}
                      >
                        {/* Name */}
                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: 13,
                              fontWeight: 600,
                              color: "#94a3b8",
                              marginBottom: 8,
                            }}
                          >
                            Full Name *
                          </label>
                          <input
                            {...register("name", {
                              required: "Name is required",
                            })}
                            placeholder="Jane Smith"
                            style={inputStyle(!!errors.name)}
                            onFocus={(e) => {
                              (e.target as HTMLInputElement).style.borderColor =
                                "#6366f1";
                            }}
                            onBlur={(e) => {
                              if (!errors.name) {
                                (
                                  e.target as HTMLInputElement
                                ).style.borderColor =
                                  "rgba(255,255,255,0.1)";
                              }
                            }}
                          />
                          {errors.name && (
                            <p
                              style={{
                                fontSize: 12,
                                color: "#ef4444",
                                marginTop: 4,
                              }}
                            >
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: 13,
                              fontWeight: 600,
                              color: "#94a3b8",
                              marginBottom: 8,
                            }}
                          >
                            Work Email *
                          </label>
                          <input
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email",
                              },
                            })}
                            placeholder="jane@company.com"
                            type="email"
                            style={inputStyle(!!errors.email)}
                            onFocus={(e) => {
                              (e.target as HTMLInputElement).style.borderColor =
                                "#6366f1";
                            }}
                            onBlur={(e) => {
                              if (!errors.email) {
                                (
                                  e.target as HTMLInputElement
                                ).style.borderColor =
                                  "rgba(255,255,255,0.1)";
                              }
                            }}
                          />
                          {errors.email && (
                            <p
                              style={{
                                fontSize: 12,
                                color: "#ef4444",
                                marginTop: 4,
                              }}
                            >
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        {/* Company */}
                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: 13,
                              fontWeight: 600,
                              color: "#94a3b8",
                              marginBottom: 8,
                            }}
                          >
                            Company Name *
                          </label>
                          <input
                            {...register("company", {
                              required: "Company is required",
                            })}
                            placeholder="Acme Corp"
                            style={inputStyle(!!errors.company)}
                            onFocus={(e) => {
                              (e.target as HTMLInputElement).style.borderColor =
                                "#6366f1";
                            }}
                            onBlur={(e) => {
                              if (!errors.company) {
                                (
                                  e.target as HTMLInputElement
                                ).style.borderColor =
                                  "rgba(255,255,255,0.1)";
                              }
                            }}
                          />
                          {errors.company && (
                            <p
                              style={{
                                fontSize: 12,
                                color: "#ef4444",
                                marginTop: 4,
                              }}
                            >
                              {errors.company.message}
                            </p>
                          )}
                        </div>

                        {/* Team size */}
                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: 13,
                              fontWeight: 600,
                              color: "#94a3b8",
                              marginBottom: 8,
                            }}
                          >
                            Team Size *
                          </label>
                          <select
                            {...register("teamSize", {
                              required: "Team size is required",
                            })}
                            style={{
                              ...inputStyle(!!errors.teamSize),
                              cursor: "pointer",
                            }}
                          >
                            <option value="" style={{ background: "#0d1117" }}>
                              Select team size
                            </option>
                            {TEAM_SIZE_OPTIONS.map((opt) => (
                              <option
                                key={opt}
                                value={opt}
                                style={{ background: "#0d1117" }}
                              >
                                {opt} employees
                              </option>
                            ))}
                          </select>
                          {errors.teamSize && (
                            <p
                              style={{
                                fontSize: 12,
                                color: "#ef4444",
                                marginTop: 4,
                              }}
                            >
                              {errors.teamSize.message}
                            </p>
                          )}
                        </div>

                        {/* Message */}
                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: 13,
                              fontWeight: 600,
                              color: "#94a3b8",
                              marginBottom: 8,
                            }}
                          >
                            Tell us about your needs (optional)
                          </label>
                          <textarea
                            {...register("message")}
                            placeholder="We're looking to upskill our engineering team in Gen-AI..."
                            rows={3}
                            style={{
                              ...inputStyle(false),
                              resize: "vertical",
                              minHeight: 80,
                            }}
                            onFocus={(e) => {
                              (
                                e.target as HTMLTextAreaElement
                              ).style.borderColor = "#6366f1";
                            }}
                            onBlur={(e) => {
                              (
                                e.target as HTMLTextAreaElement
                              ).style.borderColor = "rgba(255,255,255,0.1)";
                            }}
                          />
                        </div>

                        {/* Submit */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary"
                          style={{
                            width: "100%",
                            justifyContent: "center",
                            opacity: isSubmitting ? 0.7 : 1,
                            cursor: isSubmitting ? "wait" : "pointer",
                          }}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2
                                size={16}
                                style={{ animation: "spin 1s linear infinite" }}
                              />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Request
                              <ArrowRight size={16} />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
