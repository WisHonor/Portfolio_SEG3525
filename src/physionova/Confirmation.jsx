import Icon from "./Icon.jsx";
import { useNavigate } from "react-router-dom";
import { CLINIC } from "./data.js";

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("fr-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

function Row({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon name={icon} className="w-5 h-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
        <p className="font-semibold text-ink">{value}</p>
      </div>
    </div>
  );
}

export default function Confirmation({ booking, onBookAnother }) {
  const navigate = useNavigate();
  const ref = booking.reference;

  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <div className="rounded-3xl border border-accent/30 bg-white p-8 shadow-xl shadow-accent/10 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30">
            <Icon name="check" className="w-9 h-9" strokeWidth={2.5} />
          </span>
          <h1 className="mt-5 text-2xl font-extrabold text-ink sm:text-3xl font-playfair">
            Votre rendez-vous est confirmé ! 🎉
          </h1>
          <p className="mt-2 max-w-md text-muted">
            Merci, {booking.name.split(" ")[0]}. Une confirmation a été envoyée à{" "}
            <span className="font-semibold text-ink">{booking.contact}</span>. Votre référence est{" "}
            <span className="font-semibold text-accent">{ref}</span>.
          </p>
        </div>

        <div className="my-7 h-px bg-accent/20" />

        <div className="divide-y divide-accent/20">
          <Row icon="clipboard" label="Service" value={`${booking.service.name} · ${booking.service.duration}`} />
          <Row icon="star" label="Thérapeute" value={booking.therapist.name} />
          <Row icon="calendar" label="Date" value={formatDate(booking.date)} />
          <Row icon="clock" label="Heure" value={booking.time} />
          <Row icon="pin" label="Adresse" value={CLINIC.address} />
          <Row icon="leaf" label="Coût estimé" value={`${booking.service.price} $ (payable lors de la visite)`} />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={onBookAnother}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-bold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-dark"
          >
            Prendre un autre rendez-vous
          </button>
          <button
            onClick={() => navigate('/physionova')}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-accent/30 bg-white px-6 py-3.5 font-bold text-accent transition hover:bg-accent-soft"
          >
            Retour à la clinique
          </button>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        Besoin de modifier quelque chose ? Appelez-nous au{" "}
        <a href={`tel:${CLINIC.phone}`} className="font-semibold text-accent no-underline hover:underline">
          {CLINIC.phone}
        </a>
      </p>
    </div>
  );
}
