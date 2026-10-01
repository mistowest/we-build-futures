import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Youtube,
  Instagram,
  BookOpen,
  Award,
  MapPin,
  ChevronDown,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Cpu,
  Globe,
  Server,
  ShieldCheck,
  FileBadge,
  ExternalLink,
  MessageCircle,
  Phone,
  Menu,
  X,
  Code2,
  Boxes,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import wesleyAsset from "@/assets/wesley.png";
import ceagre2024Asset from "@/assets/ceagre-2024-estacao-ciencias.png";
import campusParty2025Asset from "@/assets/campus-party-2025.jpeg";
import integraPalcoAsset from "@/assets/integra-2026-palco.jpeg";
import integraBannerAsset from "@/assets/integra-2026-banner.jpeg";
import integraRobotAsset from "@/assets/integra-2026-robot.jpeg";

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
const SOCIALS = {
  youtube: "https://www.youtube.com/mrwest",
  x: "https://x.com/mistowest",
  instagram: "https://www.instagram.com/mistowest",
  lattes: "http://lattes.cnpq.br/8252876271382452",
};

const skills = [
  {
    name: "Linguagens",
    desc: "Desenvolvimento e automação",
    tags: ["Python", "Go", "Lua", "C++"],
    icon: Code2,
  },
  {
    name: "Backend & APIs",
    desc: "Serviços, APIs REST e sistemas distribuídos",
    tags: ["FastAPI", "Flask", "Gin", "gRPC"],
    icon: Server,
  },
  {
    name: "Web & Frontend",
    desc: "Interfaces web e aplicações geográficas",
    tags: ["React", "TypeScript", "Leaflet", "WebGIS"],
    icon: Globe,
  },
  {
    name: "Dados & Geoprocessamento",
    desc: "Dados espaciais e bancos de dados",
    tags: ["PostgreSQL", "PostGIS", "GeoJSON", "Pandas"],
    icon: Boxes,
  },
  {
    name: "IoT & Embarcados",
    desc: "Sensoriamento, conectividade e automação",
    tags: ["ESP32", "MQTT", "LoRa", "Arduino"],
    icon: Cpu,
  },
  {
    name: "Infraestrutura",
    desc: "Ambientes, containers e serviços",
    tags: ["Docker", "Linux", "Redis", "DevOps"],
    icon: ShieldCheck,
  },
  {
    name: "IA & Agentes",
    desc: "Agentes de IA, contexto e automação inteligente",
    tags: ["AI Agents", "MCP", "Python", "Automação"],
    icon: Cpu,
  },
];

const FASTWOLF_LOGO = "data:image/webp;base64,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";
const FINALOSINT_LOGO = "data:image/webp;base64,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";

const projects = [
  {
    id: "SRC_01",
    title: "Sistema IoT ESP32",
    sub: "Monitoramento Ambiental",
    desc: "Soluções completas de IoT baseadas em ESP32 para monitoramento ambiental em tempo real.",
    tags: ["C++", "Arduino", "MQTT", "LoRa"],
    href: "https://wokwi.com/makers/mrwest",
    icon: Cpu,
  },
  {
    id: "SRC_02",
    title: "Robotec — Programação e Robótica",
    sub: "Coautor",
    desc: "Participação como coautor no livro Robotec — Programação e Robótica, em publicação vinculada ao CEAGRE.",
    tags: ["Robótica", "Programação", "CEAGRE"],
    href: "https://www.ceagre.com.br/PublicationDetail?id=ea1aba00-f15e-48c7-be2a-d6d3a7aada3d",
    icon: BookOpen,
  },
  {
    id: "SRC_03",
    title: "FastWolf",
    sub: "Plataforma de OSINT e Inteligência",
    desc: "Plataforma de OSINT para investigação e análise de informações, integrando coleta de dados, ferramentas de inteligência, APIs e recursos de Inteligência Artificial.",
    tags: ["Python", "OSINT", "AI Agents", "MCP"],
    href: "https://fastwolf.lat/",
    logo: FASTWOLF_LOGO,
  },
  {
    id: "SRC_04",
    title: "FinalOSINT",
    sub: "Plataforma de OSINT e Investigação Digital",
    desc: "Plataforma voltada à pesquisa, organização e análise de informações de fontes abertas, com APIs especializadas em OSINT fornecidas por mim para ampliar consultas e processos de investigação digital.",
    tags: ["Python", "OSINT", "APIs", "Automation"],
    href: "https://finalosint.lat/",
    logo: FINALOSINT_LOGO,
  },
];

const experiences = [
  {
    role: "Bolsista de Iniciação Científica",
    org: "CEAGRE",
    orgHref: "https://www.ceagre.com.br/Services",
    desc: "Participação ativa na Iniciação Científica, desenvolvendo soluções tecnológicas para monitoramento ambiental.",
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
      <Career />
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
    ["Carreira", "#carreira"],
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
            em Iniciação Científica.
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
              href="https://github.com/mistowest"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/mrwest"
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
            <p><span className="text-accent-cyan">{">"}</span> STACK: Python, Go, TypeScript, IoT, WebGIS</p>
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
            const Icon = p.icon ?? Cpu;
            return (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-5 rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-foreground sm:flex-row sm:items-start"
              >
                <span className="font-mono text-xs text-muted-foreground sm:pt-1">{p.id}</span>
                {p.logo ? (
                  <span className="inline-grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-md border border-border bg-background">
                    <img src={p.logo} alt={`${p.title} logo`} className="h-8 w-8 object-contain" />
                  </span>
                ) : (
                  <IconBox><Icon className="h-5 w-5" /></IconBox>
                )}
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

function Career() {
  return (
    <section id="carreira" className="px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="04" title="CARREIRA" />
        <div className="relative ml-2 border-l border-border pl-7 sm:ml-6 sm:pl-10">
          <CareerEntry
            year="2024"
            title="Estação Ciências CEAGRE"
            subtitle="Apresentação de trabalhos"
            description="Participação na apresentação e divulgação de trabalhos científicos e tecnológicos durante a Estação Ciências do CEAGRE."
            image={
              <PhotoViewer
                src={ceagre2024Asset}
                alt="Apresentação de trabalhos na Estação Ciências do CEAGRE em 2024"
              />
            }
          />

          <CareerEntry
            year="2025"
            title="Campus Party"
            subtitle="Automação Geoespacial com n8n"
            description="Apresentação do projeto Automação Geoespacial com n8n no palco GOV GO, com participação na apresentação dos slides e apoio do Arthur."
            image={
              <PhotoViewer
                src={campusParty2025Asset}
                alt="Apresentação do projeto Automação Geoespacial com n8n no Campus Party 2025"
              />
            }
          />

          <CareerEntry
            year="2026"
            title="8º Integra — IF Goiano"
            subtitle="Publicações — Resumos de Iniciação Científica + apresentação tecnológica"
            description="Participação no evento Integra, apresentando banners e trabalhos de Iniciação Científica. O projeto Vitrine Tecnológica do Cão Robô Unitree Go2 conquistou o 3º lugar."
            href="https://eventos.ifgoiano.edu.br/integra2026/"
            image={
              <div className="grid h-full grid-cols-2 gap-2 sm:grid-cols-3">
                <PhotoViewer src={integraPalcoAsset} alt="Participação e premiação no 8º Integra 2026" className="h-48 w-full rounded-md object-cover sm:h-56" />
                <PhotoViewer src={integraBannerAsset} alt="Banner científico apresentado no 8º Integra 2026" className="h-48 w-full rounded-md object-cover sm:h-56" />
                <PhotoViewer src={integraRobotAsset} alt="Vitrine tecnológica do cão-robô Unitree Go2" className="col-span-2 h-48 w-full rounded-md object-cover sm:col-span-1 sm:h-56" />
              </div>
            }
          >
            <div className="mt-5 rounded-md border border-border bg-background/60 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-accent-cyan" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-accent-cyan">Publicações — Resumos de Iniciação Científica</p>
              </div>
              <ul className="space-y-2 text-xs leading-relaxed text-muted-foreground">
                <li>GEON8N ALERTAS: automação de avisos agronômicos a partir de índices espectrais Sentinel-2 integrados a fluxos n8n.</li>
                <li>A TABELA AO TERRITÓRIO: interface web em Leaflet para exploração espaço-temporal de queimadas, desmatamento e erosão em Rio Verde – GO.</li>
                <li>MAPEAMENTO DE ZONAS DE RISCO DE EROSÃO NO ESTADO DE GOIÁS UTILIZANDO ANÁLISE GEOESPACIAL MULTICRITÉRIO.</li>
                <li>SISTEMA AUTOMATIZADO PARA COLETA DE DOCUMENTOS CIENTÍFICOS VIA WEB SCRAPING E RECUPERAÇÃO AUMENTADA POR GERAÇÃO (RAG).</li>
              </ul>
              <div className="mt-5 border-t border-border pt-4">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-accent-cyan">Apresentação tecnológica</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">VITRINE TECNOLÓGICA DO CÃO ROBÔ UNITREE GO2: recursos de sensoriamento e navegação autônoma aplicados à agricultura de precisão. Demonstração e apresentação tecnológica, não publicação.</p>
              </div>
              <a href="https://eventos.ifgoiano.edu.br/media/arquivos/RELA%C3%87%C3%83O_DE_TRABALHOS_APROVADOS_DO_CAMPUS_RIO_VERDE.pdf" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest hover-underline">
                Relação oficial de trabalhos aprovados <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </CareerEntry>
        </div>
      </div>
    </section>
  );
}

function PhotoViewer({
  src,
  alt,
  className = "h-full w-full object-cover",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group/photo relative block h-full w-full cursor-zoom-in text-left"
        aria-label={`Ampliar imagem: ${alt}`}
      >
        <img src={src} alt={alt} className={className} />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-8 text-xs font-mono text-white opacity-0 transition-opacity group-hover/photo:opacity-100 group-focus-visible/photo:opacity-100">
          Clique para ampliar
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${alt}`}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Fechar imagem ampliada"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-h-[92vh] max-w-[94vw] rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function CareerEntry({
  year,
  title,
  subtitle,
  description,
  image,
  href,
  children,
}: {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="relative mb-10 last:mb-0">
      <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent-cyan ring-1 ring-accent-cyan/40 sm:-left-[2.7rem]" />
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-mono text-sm font-bold text-accent-cyan">{year}</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ carreira</span>
      </div>
      <Card className="!p-5 sm:!p-7">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-bold">{title}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{subtitle}</p>
              </div>
              {href && <ArrowUpRight className="h-5 w-5 text-muted-foreground" />}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
            {children}
            {href && (
              <a href={href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest hover-underline">
                Ver evento Integra 2026 <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-background">{image}</div>
        </div>
      </Card>
    </article>
  );
}

function Registry() {
  return (
    <section id="registros" className="px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="05" title="REGISTROS DE SOFTWARE" />
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
        <SectionTitle n="06" title="CONTATO" />

        <Card className="!p-8 text-center sm:!p-10">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-lg border border-border bg-background font-mono text-sm font-bold">
            WH
          </div>

          <h3 className="mt-5 font-display text-2xl font-bold">
            Wesley Henrique
          </h3>

          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Full Stack · IoT · WebGIS
          </p>

          {/* Informações de contato */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Rio Verde, GO — Brasil</span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-foreground transition-colors hover:text-accent-cyan"
            >
              <Phone className="h-4 w-4 shrink-0 text-accent-cyan" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          {/* Redes e contatos */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-accent-cyan/50 bg-accent-cyan-soft px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-accent-cyan transition-colors hover:bg-accent-cyan hover:text-background"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <a
              href={SOCIALS.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-muted"
            >
              <Youtube className="h-4 w-4" />
              YouTube
            </a>

            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-muted"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>

            <a
              href={SOCIALS.x}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-muted"
            >
              <span className="font-semibold">𝕏</span>
              X
            </a>

            <a
              href={SOCIALS.lattes}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-muted"
            >
              <span className="grid h-4 w-4 place-items-center rounded-sm border border-current text-[7px] font-bold">
                CNPq
              </span>
              Lattes
            </a>

            <a
              href="https://github.com/mistowest"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-muted"
            >
              <Github className="h-4 w-4" />
              GitHub
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
          <a href="#carreira" className="hover-underline">Carreira</a>
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
