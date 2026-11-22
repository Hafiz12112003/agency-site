"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { MailIcon, PinIcon, ClockIcon, ArrowIcon } from "./Icons";

const initial = { name: "", email: "", message: "" };

const info = [
  { Icon: MailIcon, label: "Email", value: "hello@pixelforge.studio" },
  { Icon: PinIcon, label: "Studio", value: "Chennai, India" },
  { Icon: ClockIcon, label: "Response time", value: "Within one business day" },
];

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email.";
  if (values.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setValues(initial);
    }, 800);
  };

  const field =
    "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-indigo-400 dark:bg-slate-900";
  const ok = "border-slate-300 dark:border-slate-700";
  const bad = "border-red-500";

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Let&apos;s build{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
              something great
            </span>{" "}
            together
          </h2>
          <p className="mt-5 max-w-md text-slate-600 dark:text-slate-400">
            Tell us about your project and we will get back to you with ideas, a timeline and a clear quote.
          </p>

          <ul className="mt-10 space-y-5">
            {info.map(({ Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="font-medium">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 dark:border-slate-700 dark:bg-slate-900/60"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/30 blur-2xl" />

            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`${field} ${errors.name ? bad : ok}`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div className="mt-5">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`${field} ${errors.email ? bad : ok}`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className={`${field} resize-none ${errors.message ? bad : ok}`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02] disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
              {!sending && <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />}
            </button>

            {success && (
              <p
                role="status"
                className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
              >
                Thanks! Your message has been sent. We will be in touch soon.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
