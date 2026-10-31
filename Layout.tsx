import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const CLINIC = {
  name: "Clínica Veterinária de Mafamude",
  doctor: "Dr. Eduardo Correia",
  street: "R. José Rocha 155",
  city: "4430-123 Vila Nova de Gaia",
  phone: "223703309",
  phoneDisplay: "22 370 3309",
};

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-xl text-primary-foreground">🐾</span>
            <span className="font-display text-lg leading-tight text-foreground">
              Mafamude<br /><span className="text-xs text-muted-foreground">Clínica Veterinária</span>
            </span>
          </Link>
          <nav className="flex gap-2 text-sm font-semibold">
            <Link to="/" className="rounded-full px-4 py-2 text-foreground hover:bg-secondary" activeProps={{ className: "bg-secondary" }} activeOptions={{ exact: true }}>Início</Link>
            <Link to="/contactos" className="rounded-full px-4 py-2 text-foreground hover:bg-secondary" activeProps={{ className: "bg-secondary" }}>Contactos</Link>
          </nav>
        </div>
        </header>
        <a
          href={`tel:${CLINIC.phone}`}
          aria-label={`Ligar para a clínica: ${CLINIC.phoneDisplay}`}
          className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground shadow-warm transition hover:-translate-y-0.5"
        >
          📞 {CLINIC.phoneDisplay}
        </a>
      {children}
      <footer className="bg-brown text-brown-foreground">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm">
          <p className="font-display text-xl">{CLINIC.name}</p>
          <p className="opacity-80">{CLINIC.doctor} · {CLINIC.street}, {CLINIC.city} · Tel. {CLINIC.phoneDisplay}</p>
        </div>
      </footer>
    </div>
  );
}
