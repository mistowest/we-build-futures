import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Youtube,
  MapPin,
  ChevronDown,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Cpu,
  Globe,
  Server,
  Eye,
  ShieldCheck,
  FileBadge,
  ExternalLink,
  MessageCircle,
  Phone,
  Menu,
  X,
  Code2,
  Boxes,
  Gem,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import wesleyAsset from "@/assets/wesley.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wesley Henrique — Full Stack Developer" },
      { name: "description", content: "Wesley Henrique (Misto West) — Full Stack Developer focado em Web, APIs, IoT e Soluções Ambientais." },
      { property: "og:title", content: "Wesley Henrique — Full Stack Developer" },
      { property: "og:description", content: "Portfólio de Wesley Henrique — Full Stack, IoT, WebGIS." },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "5564981179276";
const WHATSAPP_DISPLAY = "+55 64 98117-9276";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const skills = [
  { name: "Python", desc: "Backend, APIs REST, Automação", tags: ["FastAPI", "Flask", "Pandas"], icon: Code2 },
  { name: "Golang", desc: "Alto desempenho, Microserviços", tags: ["Gin", "gRPC", "Concorrência"], icon: Boxes },
  { name: "Lua", desc: "Scripts embarcados, Automação", tags: ["ESP32", "Firmware", "Integração"], icon: Code2 },
  { name: "Ruby", desc: "Web, Scripts, Automação", tags: ["Rails", "Sinatra", "Gems"], icon: Gem },
  { name: "IoT / ESP32", desc: "Sensores, Wi-Fi, MQTT, LoRa", tags: ["C++", "Arduino", "DHT22"], icon: Cpu },
  { name: "WebGIS", desc: "Sistemas geográficos, Mapas", tags: ["Leaflet", "GeoJSON", "PostGIS"], icon: Globe },
  { name: "Fullstack", desc: "Web, APIs, Databases, DevOps", tags: ["Docker", "PostgreSQL", "Redis"], icon: Server },
];

const projects = [
  {
    id: "SRC_01",
    title: "Mapa de Pontos de Coleta",
    sub: "Projeto Carbono",
    desc: "Plataforma de mapeamento interativo com visualização georreferenciada de pontos de coleta em diversas regiões do Brasil.",
    tags: ["Python", "Golang", "WebGIS", "REST API"],
    href: "https://ceagre-map-hub.lovable.app/",
    icon: Globe,
  },
  {
    id: "SRC_02",
    title: "Sistema IoT ESP32",
    sub: "Monitoramento Ambiental",
    desc: "Soluções completas de IoT baseadas em ESP32 para monitoramento ambiental em tempo real.",
    tags: ["C++", "Arduino", "MQTT", "LoRa"],
    href: "https://wokwi.com/makers/mrwest",
    icon: Cpu,
  },
  {
    id: "SRC_03",
    title: "EvaOSINT",
    sub: "Takedown Projects",
    desc: "Projeto de OSINT e inteligência em mídias sociais, desenvolvido para análise e monitoramento em larga escala.",
    tags: ["OSINT", "Inteligência", "Social Media"],
    href: "https://evaosint.lat/",
    icon: Eye,
  },
];

const experiences = [
  {
    role: "Bolsista",
    org: "CEAGRE",
    orgHref: "https://www.ceagre.com.br/",
    desc: "Centro de Excelência em Agricultura Exponencial. Participação ativa no Projeto Carbono, desenvolvendo soluções tecnológicas para monitoramento ambiental.",
  },
  {
    role: "Desenvolvedor",
    org: "Takedown Now",
    orgHref: "https://takedownnow.com.br/",
    desc: "Atuo na área de desenvolvimento de plataformas voltadas a segurança, OSINT e proteção digital.",
  },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Registry />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links: [string, string][] = [
    ["Sobre", "#sobre"],
    ["Habilidades", "#habilidades"],
    ["Projetos", "#projetos"],
    ["Registros", "#registros"],
    ["Contato", "#contato"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "border-b border-border bg-background/85 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card font-mono text-xs font-bold tracking-tight">
            WH
          </span>
          <span className="flex items-baseline gap-2">
            <span className="font-mono text-xs font-semibold tracking-tight sm:text-sm">WESLEY HENRIQUE</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">misto west</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover-underline font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hidden h-9 items-center gap-2 rounded-full border border-border bg-card px-3 font-mono text-[10px] uppercase tracking-widest text-foreground transition-colors hover:border-accent-cyan hover:text-accent-cyan sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-border bg-background/95 backdrop-blur transition-[max-height,border] duration-300 ${
          open ? "max-h-[80vh] border-t" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-md px-3 py-3 font-mono text-sm uppercase tracking-widest text-foreground hover:bg-muted"
            >
              <span>{l}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-md border border-accent-cyan/40 bg-accent-cyan-soft px-3 py-3 font-mono text-sm uppercase tracking-widest text-accent-cyan"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-4 pt-24 sm:px-6">
      <BgGrid />
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest">Full Stack Developer</span>
          </div>

          <h1 className="mt-8 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            WESLEY
            <br />
            <span className="relative inline-block">
              HENRIQUE
              <span className="absolute -bottom-2 left-0 h-1 w-24 bg-accent-cyan" />
            </span>
          </h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            aka misto_west
          </p>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            Desenvolvedor focado em <span className="font-medium text-foreground">Web</span>,{" "}
            <span className="font-medium text-foreground">APIs</span>,{" "}
            <span className="font-medium text-foreground">IoT</span> e{" "}
            <span className="font-medium text-foreground">Soluções Ambientais</span>. Bolsista{" "}
            <a href="https://www.ceagre.com.br/" target="_blank" rel="noreferrer" className="hover-underline font-medium text-foreground">
              CEAGRE
            </a>{" "}
            no Projeto Carbono.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
            >
              <Youtube className="h-4 w-4" />
              YouTube
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 space-y-1 font-mono text-xs text-muted-foreground">
            <p><span className="text-accent-cyan">{">"}</span> INITIALIZING PORTFOLIO...</p>
            <p><span className="text-accent-cyan">{">"}</span> STACK: Python, Golang, Ruby, Lua, IoT</p>
            <p><span className="text-accent-cyan">{">"}</span> STATUS: <span className="text-accent-cyan">ONLINE</span></p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-2xl border border-border" />
          <div className="absolute -inset-8 -z-20 rounded-2xl border border-border/50" />
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            <img src={wesleyAsset} alt="Wesley Henrique" className="aspect-square w-full object-cover" />
          </div>
          <div className="absolute -right-4 top-6 rounded-md border border-border bg-card px-3 py-2 shadow-lg">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">stack</p>
            <p className="font-mono text-xs font-semibold">Python · Go</p>
          </div>
          <div className="absolute -left-4 top-1/2 rounded-md border border-border bg-card px-3 py-2 shadow-lg">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">focus</p>
            <p className="font-mono text-xs font-semibold">IoT · WebGIS</p>
          </div>
          <div className="absolute -right-4 bottom-6 rounded-md border border-border bg-foreground px-3 py-2 text-background shadow-lg">
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-70">bolsista</p>
            <p className="font-mono text-xs font-semibold">CEAGRE</p>
          </div>
        </div>
      </div>

      <a href="#sobre" className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="block text-center">SCROLL</span>
        <ChevronDown className="mx-auto mt-1 h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

function BgGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
      }}
    />
  );
}

function SectionTitle({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="section-label text-accent-cyan">_{n}</p>
      <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-3 h-[2px] w-16 bg-accent-cyan" />
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="01" title="SOBRE" />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <IconBox><GraduationCap className="h-5 w-5" /></IconBox>
              <div>
                <h3 className="font-semibold">Formação Acadêmica</h3>
                <p className="font-mono text-xs text-muted-foreground">Estudante</p>
              </div>
            </div>
            <p className="font-semibold">Instituto Federal Goiano</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Campus Rio Verde — Desenvolvendo habilidades em tecnologia e inovação aplicada à agricultura e sustentabilidade.
            </p>
          </Card>

          {experiences.map((e) => (
            <Card key={e.org}>
              <div className="mb-4 flex items-center gap-3">
                <IconBox><Briefcase className="h-5 w-5" /></IconBox>
                <div>
                  <h3 className="font-semibold">Experiência Profissional</h3>
                  <p className="font-mono text-xs text-muted-foreground">{e.role}</p>
                </div>
              </div>
              <p className="font-semibold">
                <a href={e.orgHref} target="_blank" rel="noreferrer" className="hover-underline">
                  {e.org}
                </a>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["3+", "Anos de Experiência"],
            ["10+", "Projetos"],
            ["1", "Registro de Software"],
            ["∞", "Linhas de Código"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-lg border border-border bg-card p-5 text-center">
              <p className="font-display text-3xl font-bold">{v}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="habilidades" className="px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="02" title="HABILIDADES" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => {
            const Icon = s.icon ?? Cpu;
            return (
              <Card key={s.name}>
                <IconBox><Icon className="h-5 w-5" /></IconBox>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="03" title="PROJETOS" />
        <div className="space-y-4">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-5 rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-foreground sm:flex-row sm:items-start"
              >
                <span className="font-mono text-xs text-muted-foreground sm:pt-1">{p.id}</span>
                <IconBox><Icon className="h-5 w-5" /></IconBox>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">{p.sub}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Registry() {
  return (
    <section id="registros" className="px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="04" title="REGISTROS DE SOFTWARE" />
        <Card className="!p-8">
          <div className="flex flex-wrap items-start gap-4">
            <IconBox><FileBadge className="h-5 w-5" /></IconBox>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-[10px]">INPI</span>
                <span className="font-mono text-xs text-muted-foreground">BR 51 2025 000762-0</span>
                <span className="font-mono text-xs text-muted-foreground">· Código 730</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">IoTMonitor — VerticalFarm</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Expedição do Certificado de Registro de Programa de Computador junto ao INPI.
                Fui um dos <span className="font-medium text-foreground">criadores</span> do software.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Titular</p>
                  <p className="mt-1 text-sm">FAPEG; Instituto Federal Goiano</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Criadores</p>
                  <p className="mt-1 text-sm">
                    Alan Carlos da Costa; Daiane Alves da Silva; Daniel Jorge de Abreu; Leandro Rodrigues da Silva Souza;
                    Uender Carlos Barbosa;{" "}
                    <span className="font-semibold text-foreground">Wesley Henrique Macedo Cardoso</span>; Willian Marques Pires
                  </p>
                </div>
              </div>

              <a
                href="https://www.escavador.com/diarios/6035384/RPI-INPI/programa-de-computador/2025-03-11?page=7"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover-underline"
              >
                <ShieldCheck className="h-4 w-4" />
                Ver registro oficial
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionTitle n="05" title="CONTATO" />
        <Card className="!p-8 sm:!p-10 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-lg border border-border bg-background font-mono text-sm font-bold">
            WH
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold">Wesley Henrique</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Full Stack · IoT · WebGIS
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Rio Verde, GO — Brasil
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 font-mono text-sm text-foreground hover:text-accent-cyan"
          >
            <Phone className="h-4 w-4 text-accent-cyan" /> {WHATSAPP_DISPLAY}
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-accent-cyan/50 bg-accent-cyan-soft px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-accent-cyan transition-colors hover:bg-accent-cyan hover:text-background"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 font-mono text-xs uppercase tracking-widest hover:bg-muted">
              <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 font-mono text-xs uppercase tracking-widest hover:bg-muted">
              <Youtube className="h-4 w-4" /> YouTube <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <p>WH © 2026 · Wesley Henrique</p>
        <div className="flex gap-5">
          <a href="#sobre" className="hover-underline">Sobre</a>
          <a href="#habilidades" className="hover-underline">Stack</a>
          <a href="#projetos" className="hover-underline">Projetos</a>
          <a href="#registros" className="hover-underline">Registros</a>
          <a href="#contato" className="hover-underline">Contato</a>
        </div>
        <p>Built with <span className="text-foreground">code</span></p>
      </div>
    </footer>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-border bg-card p-6 transition-colors ${className}`}>
      {children}
    </div>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-grid h-10 w-10 place-items-center rounded-md border border-border bg-background">
      {children}
    </div>
  );
}
