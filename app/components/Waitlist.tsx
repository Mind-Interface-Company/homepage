"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    // Placeholder — replace with fetch("/api/waitlist", ...) to wire a real backend
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <section id="waitlist" className="bg-navy py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-teal-deep rounded-3xl p-10 md:p-14">
          {status === "success" ? (
            <div className="text-center py-8">
              <div
                className="w-16 h-16 rounded-full bg-canary/20 flex items-center
                            justify-center text-3xl mx-auto mb-6"
              >
                ✓
              </div>
              <h2
                className="font-display font-bold text-3xl text-white uppercase
                           tracking-tight mb-3"
              >
                You&apos;re on the List.
              </h2>
              <p className="text-white/60 leading-relaxed">
                We&apos;ll reach out when your spot is ready. Keep an eye on your
                inbox — something extraordinary is coming.
              </p>
            </div>
          ) : (
            <>
              <span
                className="inline-block bg-canary text-navy text-xs font-bold
                           uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              >
                Reserve Your Spot
              </span>

              <h2
                className="font-display font-bold text-4xl md:text-5xl text-white
                           uppercase leading-tight mb-4"
              >
                Be Among
                <br />
                The First.
              </h2>

              <p className="text-white/60 leading-relaxed mb-8">
                We&apos;re selecting a founding cohort of curious minds to shape the
                future of Mind Interface. One email. No spam. Just a message when
                it&apos;s your turn.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="you@example.com"
                    aria-label="Email address"
                    aria-describedby={status === "error" ? "email-error" : undefined}
                    className={`w-full px-5 py-4 rounded-2xl bg-navy text-white
                                placeholder:text-white/30 transition-colors
                                focus:outline-none focus:ring-2 focus:ring-aqua
                                ${
                                  status === "error"
                                    ? "border-2 border-tangerine ring-2 ring-tangerine/30"
                                    : "border border-aqua/30"
                                }`}
                  />
                  {status === "error" && (
                    <p
                      id="email-error"
                      className="text-tangerine text-sm mt-2 ml-1"
                    >
                      {errorMsg}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-tangerine text-white py-4 rounded-2xl font-bold
                             uppercase tracking-widest text-sm hover:bg-tangerine-dark
                             transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Reserving…" : "Reserve My Spot"}
                </button>
              </form>

              <p className="text-white/30 text-xs text-center mt-5">
                No spam. No noise. Just a message when it&apos;s your turn.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
