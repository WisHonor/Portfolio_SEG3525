import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import BookingForm from "./BookingForm.jsx";
import Confirmation from "./Confirmation.jsx";
import { CLINIC, SERVICES, THERAPISTS, HOURS } from "./data.js";

const todayName = new Date().toLocaleDateString("fr-CA", { weekday: "long" });

function NavBar({ onBook }) {
  const links = [
    ["Services", "#services"],
    ["Équipe", "#team"],
    ["Horaires", "#hours"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-accent/20 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2 no-underline">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white">
            <Icon name="leaf" className="w-5 h-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink">
            Physio<span className="text-accent">Nova</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-muted transition hover:text-accent no-underline">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-muted transition hover:text-ink sm:block no-underline"
          >
            ← Portfolio
          </Link>
          <button
            onClick={onBook}
            className="rounded-xl bg-accent px-4 py-2 text-sm font-bold text-white shadow-md shadow-accent/25 transition hover:bg-accent-dark"
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onBook }) {
  return (
    <section id="top" className="relative overflow-hidden bg-bg-light">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-soft blur-2xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-2xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-dark">
            <Icon name="star" className="w-3.5 h-3.5" /> {CLINIC.tagline}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl font-playfair">
            {CLINIC.promise.split(" ").map((word, i) => 
              i === 0 ? <span key={i} className="text-accent">{word} </span> : word + " "
            )}
          </h1>
          <p className="mt-4 max-w-md text-lg text-muted">
            La clinique moderne de physiothérapie et réadaptation d'Ottawa. Des soins experts, des horaires en soirée et des rendez-vous en semaine — pensés pour votre emploi du temps chargé.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={onBook}
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-dark"
            >
              Prendre un rendez-vous
              <Icon name="arrow" className="w-5 h-5 transition group-hover:translate-x-0.5" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-white px-6 py-3.5 text-base font-bold text-accent transition hover:bg-accent-soft hover:border-accent no-underline"
            >
              Voir les services et tarifs
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-muted">
            <span className="flex items-center gap-2"><Icon name="check" className="w-4 h-4 text-accent" /> Ouvert jusqu'à 20h</span>
            <span className="flex items-center gap-2"><Icon name="check" className="w-4 h-4 text-accent" /> Facturation directe aux assurances</span>
            <span className="flex items-center gap-2"><Icon name="check" className="w-4 h-4 text-accent" /> Aucune référence requise</span>
          </div>
        </div>

        <div className="relative">
          <div className="animate-float-soft rounded-3xl border border-accent/30 bg-white p-7 shadow-xl shadow-accent/10">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold uppercase tracking-wide text-muted">Prochain disponible</p>
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent-dark">Aujourd'hui</span>
            </div>
            <p className="mt-2 text-3xl font-extrabold text-ink">15h00</p>
            <p className="text-muted">avec Dr. Amélie Tremblay</p>
            <div className="mt-5 space-y-2.5">
              {["Réadaptation du dos et de la colonne", "Récupération sportive", "Coaching postural"].map((t) => (
                <div key={t} className="flex items-center gap-3 rounded-xl bg-bg-light px-4 py-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white">
                    <Icon name="check" className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                  <span className="font-semibold text-ink">{t}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onBook}
              className="mt-5 w-full rounded-xl bg-accent px-5 py-3 font-bold text-white transition hover:bg-accent-dark"
            >
              Réserver ce créneau
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-wide text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl font-playfair">{title}</h2>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
    </div>
  );
}

function Services({ onPick }) {
  return (
    <section id="services" className="scroll-anchor bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services & Tarifs"
          title="Des soins adaptés à vos besoins"
          subtitle="Tarifs transparents et affichés d'avance. La plupart des assurances complémentaires acceptées avec facturation directe."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="group flex flex-col rounded-2xl border border-accent/20 bg-white p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
                <Icon name={s.icon} className="w-6 h-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{s.blurb}</p>
              <div className="mt-5 flex items-center justify-between border-t border-accent/20 pt-4">
                <div>
                  <span className="text-2xl font-extrabold text-accent">{s.price} $</span>
                  <span className="ml-1 text-sm text-muted">· {s.duration}</span>
                </div>
                <button
                  onClick={() => onPick(s.id)}
                  className="inline-flex items-center gap-1 rounded-lg bg-accent-soft px-3 py-2 text-sm font-bold text-accent transition hover:bg-accent hover:text-white"
                >
                  Réserver <Icon name="arrow" className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="scroll-anchor bg-accent-soft/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Notre équipe"
          title="Des thérapeutes à votre écoute"
          subtitle="Des praticiens certifiés et expérimentés qui élaborent un plan autour de vos objectifs — pas un protocole universel."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {THERAPISTS.filter((t) => t.id !== "any").map((t) => (
            <div key={t.id} className="rounded-2xl border border-accent/20 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent text-2xl font-extrabold text-white shadow-lg shadow-accent/25">
                {t.initials}
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{t.name}</h3>
              <p className="text-sm font-semibold text-accent">{t.role}</p>
              <p className="mt-1 text-sm text-muted">{t.bio}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                <Icon name="star" className="w-3.5 h-3.5" /> {t.focus}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSection({ preselected, onSubmit, formRef }) {
  return (
    <section id="book" ref={formRef} className="scroll-anchor bg-white py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="overflow-hidden rounded-3xl border border-accent/30 shadow-xl shadow-accent/10 md:grid md:grid-cols-5">
          <div className="bg-bg-dark p-8 text-white md:col-span-2 md:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-accent">Réservez en 30 secondes</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight font-playfair">Réservez votre place</h2>
            <p className="mt-3 text-white/70">
              Choisissez un service, un horaire, et c'est réglé. Pas de compte, pas d'allers-retours.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                ["calendar", "Disponibilités en semaine"],
                ["clock", "Créneaux en soirée et le samedi"],
                ["check", "Confirmation instantanée"],
                ["phone", "Rappel avant votre visite"],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-center gap-3 text-white/90">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-accent">
                    <Icon name={icon} className="w-5 h-5" />
                  </span>
                  <span className="font-semibold">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 md:col-span-3 md:p-10">
            <BookingForm preselectedService={preselected} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Hours() {
  return (
    <section id="hours" className="scroll-anchor bg-accent-soft/50 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-accent">Heures d'ouverture</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl font-playfair">
            Des horaires adaptés à votre semaine
          </h2>
          <p className="mt-3 max-w-md text-muted">
            Tôt le matin et tard le soir pour que vous n'ayez jamais à choisir entre le travail et votre rétablissement.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-3 font-semibold text-white">
            <Icon name="clock" className="w-5 h-5" />
            Nous sommes ouverts aujourd'hui jusqu'à {HOURS.find((h) => h.day === todayName)?.close || "—"}
          </div>
        </div>
        <div className="rounded-2xl border border-accent/20 bg-white p-2 shadow-sm">
          {HOURS.map((h) => {
            const isToday = h.day === todayName;
            return (
              <div
                key={h.day}
                className={
                  "flex items-center justify-between rounded-xl px-5 py-3.5 " +
                  (isToday ? "bg-accent-soft border border-accent/30" : "")
                }
              >
                <span className={"font-semibold capitalize " + (isToday ? "text-accent" : "text-ink")}>
                  {h.day} {isToday && <span className="ml-1 text-xs font-bold">· Aujourd'hui</span>}
                </span>
                <span className={h.open === "Fermé" ? "text-muted" : (isToday ? "font-semibold text-accent" : "font-semibold text-ink")}>
                  {h.open === "Fermé" ? "Fermé" : `${h.open} – ${h.close}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact({ onBook }) {
  const items = [
    ["phone", "Téléphone", CLINIC.phone, `tel:${CLINIC.phone}`],
    ["mail", "Courriel", CLINIC.email, `mailto:${CLINIC.email}`],
    ["pin", "Adresse", CLINIC.address, null],
  ];
  return (
    <section id="contact" className="scroll-anchor bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl bg-bg-dark px-6 py-12 text-white sm:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-playfair">
                Prêts quand vous l'êtes
              </h2>
              <p className="mt-3 max-w-md text-white/70">
                Une question ou vous souhaitez réserver par téléphone ? Contactez-nous — notre accueil est là pour vous aider.
              </p>
              <button
                onClick={onBook}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-bold text-white shadow-lg shadow-accent/30 transition hover:bg-accent-dark"
              >
                Prendre rendez-vous <Icon name="arrow" className="w-5 h-5" />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-1">
              {items.map(([icon, label, value, href]) => {
                const inner = (
                  <div className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4 transition hover:bg-white/10">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white">
                      <Icon name={icon} className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-white/60">{label}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="no-underline">{inner}</a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bg-dark py-10 border-t border-accent/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white">
            <Icon name="leaf" className="w-4 h-4" />
          </span>
          <span className="font-extrabold text-white">
            Physio<span className="text-accent">Nova</span>
          </span>
        </div>
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Clinique PhysioNova · Ottawa, ON</p>
        <p className="text-sm font-semibold text-accent">Conçu par Wissam Elmasry</p>
      </div>
    </footer>
  );
}

export default function PhysioNova() {
  const [stage, setStage] = useState("site");
  const [booking, setBooking] = useState(null);
  const [preselected, setPreselected] = useState("");
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pickService = (id) => {
    setPreselected(id);
    scrollToForm();
  };

  const handleSubmit = (data) => {
    const reference =
      "PN-" +
      Math.random().toString(36).slice(2, 6).toUpperCase() +
      new Date().getFullYear();
    setBooking({ ...data, reference });
    setStage("confirmed");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (stage === "confirmed" && booking) {
    return (
      <div className="min-h-screen bg-bg-light font-poppins">
        <NavBar onBook={() => setStage("site")} />
        <Confirmation
          booking={booking}
          onBookAnother={() => {
            setBooking(null);
            setPreselected("");
            setStage("site");
            scrollToForm();
          }}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-poppins">
      <NavBar onBook={scrollToForm} />
      <Hero onBook={scrollToForm} />
      <Services onPick={pickService} />
      <Team />
      <BookingSection preselected={preselected} onSubmit={handleSubmit} formRef={formRef} />
      <Hours />
      <Contact onBook={scrollToForm} />
      <Footer />
    </div>
  );
}
