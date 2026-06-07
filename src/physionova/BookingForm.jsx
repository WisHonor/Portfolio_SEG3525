import { useState } from "react";
import Icon from "./Icon.jsx";
import { SERVICES, THERAPISTS, TIME_SLOTS } from "./data.js";

const todayISO = () => new Date().toISOString().split("T")[0];

const inputBase =
  "w-full rounded-xl border border-accent/30 bg-white px-4 py-3 text-ink outline-none transition " +
  "focus:border-accent focus:ring-4 focus:ring-accent/20 placeholder:text-muted/70";

function Field({ label, error, children, htmlFor }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error && <span className="text-xs font-medium text-accent">{error}</span>}
    </div>
  );
}

export default function BookingForm({ preselectedService = "", onSubmit }) {
  const [form, setForm] = useState({
    service: preselectedService,
    therapist: "any",
    date: "",
    time: "",
    name: "",
    contact: "",
  });
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.service) next.service = "Veuillez choisir un service.";
    if (!form.date) next.date = "Veuillez choisir une date.";
    if (!form.time) next.time = "Veuillez choisir un horaire.";
    if (!form.name.trim()) next.name = "Veuillez entrer votre nom.";

    const c = form.contact.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);
    const isPhone = /^[+()\d][\d\s().-]{6,}$/.test(c);
    if (!c) next.contact = "Entrez un courriel ou un numéro de téléphone.";
    else if (!isEmail && !isPhone) next.contact = "Entrez un courriel ou un numéro valide.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const service = SERVICES.find((s) => s.id === form.service);
    const therapist = THERAPISTS.find((t) => t.id === form.therapist);
    onSubmit({ ...form, service, therapist });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Field label="Service" error={errors.service} htmlFor="service">
          <select id="service" value={form.service} onChange={set("service")} className={inputBase}>
            <option value="" disabled>
              Sélectionnez un service…
            </option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} — {s.price} $ · {s.duration}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Thérapeute" error={errors.therapist} htmlFor="therapist">
        <select id="therapist" value={form.therapist} onChange={set("therapist")} className={inputBase}>
          {THERAPISTS.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name} {t.id !== "any" ? `· ${t.role}` : ""}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Date" error={errors.date} htmlFor="date">
        <input
          id="date"
          type="date"
          min={todayISO()}
          value={form.date}
          onChange={set("date")}
          className={inputBase}
        />
      </Field>

      <div className="sm:col-span-2">
        <Field label="Heure" error={errors.time}>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {TIME_SLOTS.map((slot) => {
              const active = form.time === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {
                    setForm((f) => ({ ...f, time: slot }));
                    setErrors((er) => ({ ...er, time: undefined }));
                  }}
                  className={
                    "rounded-xl border px-2 py-2.5 text-sm font-semibold transition " +
                    (active
                      ? "border-accent bg-accent text-white shadow-sm"
                      : "border-accent/30 bg-white text-ink hover:border-accent hover:text-accent")
                  }
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </Field>
      </div>

      <Field label="Nom complet" error={errors.name} htmlFor="name">
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={set("name")}
          placeholder="Jean Dupont"
          className={inputBase}
        />
      </Field>

      <Field label="Courriel ou téléphone" error={errors.contact} htmlFor="contact">
        <input
          id="contact"
          type="text"
          value={form.contact}
          onChange={set("contact")}
          placeholder="jean@courriel.com  ·  (613) 555-0199"
          className={inputBase}
        />
      </Field>

      <div className="sm:col-span-2 mt-1">
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-dark sm:w-auto"
        >
          Confirmer la réservation
          <Icon name="arrow" className="w-5 h-5 transition group-hover:translate-x-0.5" />
        </button>
        <p className="mt-3 text-xs text-muted">
          Aucun paiement requis maintenant — vous paierez lors de votre visite. Un rappel vous sera envoyé avant votre rendez-vous.
        </p>
      </div>
    </form>
  );
}
