import { createFileRoute } from "@tanstack/react-router";
import { Layout, CLINIC } from "@/components/Layout";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos | Clínica Veterinária de Mafamude" },
      { name: "description", content: "Morada e telefone da Clínica Veterinária de Mafamude, R. José Rocha 155, Vila Nova de Gaia." },
      { property: "og:title", content: "Contactos | Clínica Veterinária de Mafamude" },
      { property: "og:description", content: "R. José Rocha 155, 4430-123 Vila Nova de Gaia · 22 370 3309" },
    ],
  }),
  component: Contactos,
});

function Contactos() {
  const q = encodeURIComponent(`${CLINIC.name}, ${CLINIC.street}, ${CLINIC.city}`);
  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="font-display text-5xl text-foreground">Venha visitar-nos 🐾</h1>
          <p className="mt-3 text-lg text-muted-foreground">{CLINIC.name} — {CLINIC.doctor}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-card p-7 shadow-warm">
              <p className="text-3xl">📍</p>
              <h2 className="mt-2 font-display text-xl text-foreground">Morada</h2>
              <p className="mt-1 text-muted-foreground">{CLINIC.street}<br />{CLINIC.city}</p>
            </div>
            <a href={`tel:${CLINIC.phone}`} className="rounded-3xl bg-primary p-7 text-primary-foreground shadow-warm transition hover:-translate-y-1">
              <p className="text-3xl">📞</p>
              <h2 className="mt-2 font-display text-xl">Telefone</h2>
              <p className="mt-1 text-2xl font-bold">{CLINIC.phoneDisplay}</p>
            </a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noreferrer" className="rounded-3xl bg-pink p-7 text-pink-foreground shadow-warm transition hover:-translate-y-1">
              <p className="text-3xl">🗺️</p>
              <h2 className="mt-2 font-display text-xl">Direções</h2>
              <p className="mt-1">Abrir no Google Maps →</p>
            </a>
          </div>
          <iframe title="Mapa" src={`https://www.google.com/maps?q=${q}&output=embed`} className="mt-10 h-96 w-full rounded-3xl border-4 border-card shadow-warm" loading="lazy" />
        </div>
      </section>
    </Layout>
  );
}
