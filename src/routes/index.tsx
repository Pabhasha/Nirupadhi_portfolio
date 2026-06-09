import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Instagram, Facebook, Youtube, Award, Music, Mic, Radio, ArrowUpRight, Disc3 } from "lucide-react";

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import songs from "@/assets/songs.jpg";
import songObaAmma from "@/assets/song-oba-amma.jpg";
import songAmaliya from "@/assets/song-amaliya.jpg";
import songDanga from "@/assets/song-danga.jpg";
import songKollane from "@/assets/song-kollane.jpg";
import yn1 from "@/assets/yn-1.jpg";
import ynElanthani from "@/assets/yn-elanthani.jpg";
import ynNadatheertha from "@/assets/yn-nadatheertha.jpg";
import ynBadun from "@/assets/yn-badun.jpg";
import ynNilahas from "@/assets/yn-nilahas.jpg";
import tv1 from "@/assets/tv-1.jpg";
import tv2 from "@/assets/tv-2.jpg";
import tv3 from "@/assets/tv-3.jpg";
import tv4 from "@/assets/tv-4.jpg";
import concerts from "@/assets/concerts.jpg";
import concert1 from "@/assets/concert-1.jpg";
import concert2 from "@/assets/concert-2.jpg";
import perth1 from "@/assets/perth-1.jpg";
import online1 from "@/assets/online-1.jpg";
import workshop from "@/assets/workshop.jpg";
import memory1 from "@/assets/memory-1.jpg";
import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";
import closing from "@/assets/closing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nirupadhi Perera — Composer, Singer & Sound Designer" },
      { name: "description", content: "Official portfolio of Nirupadhi Perera — award-winning Sri Lankan musician, composer, singer and sound designer." },
      { property: "og:title", content: "Nirupadhi Perera — Composer, Singer & Sound Designer" },
      { property: "og:description", content: "Award-winning Sri Lankan musician, composer, singer and sound designer." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Craft" },
  { id: "songs", label: "Songs" },
  { id: "yasharu", label: "Yasharu & Nirupadhi" },
  { id: "tv", label: "TV" },
  { id: "concerts", label: "Concerts" },
  { id: "outreach", label: "Outreach" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="text-gradient-gold font-display text-xl tracking-wider">N · P</span>
          </a>
          <ul className="hidden lg:flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm border border-gold/40 text-gold px-4 py-2 rounded-full hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            className="lg:hidden text-foreground"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-px w-6 bg-current transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-6 bg-current transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </nav>
        {open && (
          <div className="lg:hidden bg-ink/95 backdrop-blur-xl border-t border-border animate-fade-in">
            <ul className="px-6 py-6 space-y-4">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="block text-lg text-muted-foreground hover:text-gold transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="Nirupadhi Perera performing on stage with an orchestra" className="w-full h-full object-cover object-top opacity-40" />
          <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/70 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 animate-fade-in">
            <span className="section-label">Signature Portfolio · Sri Lanka</span>
            <h1 className="mt-6 font-display text-[15vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.9] tracking-tight">
              Nirupadhi
              <br />
              <span className="text-gradient-gold italic font-light">Perera</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl font-serif italic">
              Composer · Singer · Foley & Sound Designer
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Composer", "Vocalist", "Foley", "Sound Design", "Trombone", "Piano", "Guitar", "Drums"].map((t) => (
                <span key={t} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-border bg-card/40 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 lg:text-right text-sm text-muted-foreground font-serif">
            <p className="border-l-2 lg:border-l-0 lg:border-r-2 border-gold/60 pl-4 lg:pl-0 lg:pr-4">
              A dedicated musician with a rich musical heritage —
              award-winning singer, versatile instrumentalist and storyteller.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">Pic · Dayan Witharana</p>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" label="About">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative group">
              <img src={about} alt="Nirupadhi Perera singing into a microphone" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-ink p-5 max-w-[14rem]">
              <p className="font-display text-2xl leading-tight">Born into music.</p>
              <p className="text-xs mt-2 uppercase tracking-widest">A family legacy</p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 lg:pl-10">
            <h2 className="font-display text-5xl lg:text-6xl leading-[1.05]">
              A dedicated musician with a <span className="text-gradient-gold italic">rich heritage</span>.
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed font-serif">
              <p>
                Coming from a family deeply immersed in music, I have had the privilege of being
                born into this art. My father, <span className="text-foreground">Samarage Samantha Perera</span>, is a well-known
                musician in Sri Lanka and the Secretary of the Sri Lanka Music Directors Association
                (SLAMCADA).
              </p>
              <p>
                My musical journey began early. I have had the honor of being an award-winning singer
                as well as a versatile instrumentalist and actor — performing across tenor trombone,
                guitar, piano, percussion and drums.
              </p>
              <p>
                I approach music with genuine passion, drawing from my background and experiences.
                My goal is to keep creating, performing, and sharing the beauty of music with others.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" label="The Craft">
        <h2 className="font-display text-5xl lg:text-6xl mb-12 max-w-3xl">
          Many instruments. <span className="text-gradient-gold italic">One voice.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { icon: Mic, title: "Vocals", body: "Award-winning vocalist with a tenor range trained for stage and studio." },
            { icon: Music, title: "Composition", body: "Original melodies, arrangements and music direction for screen and stage." },
            { icon: Radio, title: "Sound Design & Foley", body: "Texture, atmosphere and detail crafted for film and television." },
            { icon: Disc3, title: "Multi-Instrumentalist", body: "Tenor trombone, guitar, piano, percussion and drums." },
          ].map((s) => (
            <div key={s.title} className="bg-background p-8 group hover:bg-card transition-colors duration-500">
              <s.icon className="h-8 w-8 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SELF-PRODUCED SONGS */}
      <Section id="songs" label="Self-Produced Songs" tone="dark">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-5xl lg:text-6xl max-w-2xl">
            Original melodies, <span className="text-gradient-gold italic">crafted and released.</span>
          </h2>
          <p className="text-muted-foreground max-w-md font-serif">
            A growing catalogue of self-produced songs spanning teledrama themes,
            independent singles and collaborative releases.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: songObaAmma, title: "Oba Amma Wagemai", sinhala: "ඔබ අම්මා වගේමයි", role: "Melody · Music" },
            { img: songAmaliya, title: "Amaliya Theme Song", sinhala: "අමාලියා තේමා ගීතය", role: "Composition" },
            { img: songDanga, title: "Danga Kella", sinhala: "Artist: Dilara Sesadi Gunawardane", role: "Music & Melody" },
            { img: songKollane, title: "Kollane Warella", sinhala: "Artist: Ravindu Ekanayake", role: "Melody & Music" },
          ].map((s) => (
            <ProjectCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      {/* YASHARU & NIRUPADHI */}
      <Section id="yasharu" label="Duo Project">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-6xl lg:text-7xl leading-[0.95]">
              Yasharu <span className="text-gradient-gold italic">&</span> Nirupadhi
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-serif max-w-2xl">
              A musical partnership releasing original songs and visuals — a YouTube channel
              with a growing community of listeners across Sri Lanka and the diaspora.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <a
              href="https://www.youtube.com/@YasharuNirupadhi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gold border-b border-gold/40 hover:border-gold pb-1 transition-colors"
            >
              <Youtube className="h-5 w-5" /> @YasharuNirupadhi · 2.36K subscribers
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden group relative">
            <img src={yn1} alt="Yasharu and Nirupadhi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Featured</p>
              <h3 className="font-display text-3xl">The Duo</h3>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {[
              { img: ynElanthani, title: "Elanthani", sinhala: "එලන්තානී" },
              { img: ynNadatheertha, title: "Nadatheertha", sinhala: "නාදතීර්ථ" },
              { img: ynBadun, title: "Badun Piri", sinhala: "Original Release" },
              { img: ynNilahas, title: "Nil Ahas Thale", sinhala: "නිල් අහස් තලේ" },
            ].map((y) => (
              <div key={y.title} className="aspect-square overflow-hidden relative group">
                <img src={y.img} alt={y.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="font-display text-lg">{y.title}</p>
                  <p className="text-xs text-muted-foreground">{y.sinhala}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground font-serif italic">
          Lyrics & Melody: U.D. Perera · Arrangement: Samantha Perera · Mix & Mastering: Tharindu Jayathilaka
        </p>
      </Section>

      {/* TV PROGRAMS */}
      <Section id="tv" label="TV Programs" tone="dark">
        <h2 className="font-display text-5xl lg:text-6xl mb-12 max-w-3xl">
          Featured on <span className="text-gradient-gold italic">national television.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: tv1, title: "Jeewithayata Ida Denna", note: "Happy Family" },
            { img: tv2, title: "Youth Art Beat", note: "Featured artist" },
            { img: tv3, title: "Sihinayaki Re", note: "Parts 01 – 04" },
            { img: tv4, title: "Sandaru Suyamaya", note: "සඳරු සුයාමය" },
          ].map((t) => (
            <div key={t.title} className="group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.img} alt={t.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="pt-4">
                <p className="text-xs uppercase tracking-widest text-gold/80">{t.note}</p>
                <h3 className="font-display text-2xl mt-1">{t.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONCERTS */}
      <Section id="concerts" label="Concerts & Live Shows">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl lg:text-6xl leading-[1.05]">
              On stage, <span className="text-gradient-gold italic">in front of the orchestra.</span>
            </h2>
            <p className="mt-6 text-muted-foreground font-serif text-lg">
              From flagship Sri Lankan concerts to international tours, the stage has
              been home since childhood.
            </p>
            <ul className="mt-8 space-y-4 font-serif">
              {[
                { name: "Naadhathirtha 2017", note: "Featured vocalist with orchestra" },
                { name: "Crossroads '19", note: "Live concert series" },
                { name: "Dialog Ridma Reyak 2017", note: "Featured performance" },
                { name: "Samantha & Yasharu Perera Live in Perth", note: "Australia · April 2015 · featuring Nirupadhi Thishakya" },
              ].map((c) => (
                <li key={c.name} className="border-l border-gold/40 pl-4">
                  <p className="text-foreground text-lg">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 grid grid-cols-6 gap-3 auto-rows-[100px] sm:auto-rows-[140px]">
            <img src={concerts} alt="Naadhathirtha 2017" className="col-span-6 row-span-2 object-cover w-full h-full" />
            <img src={concert1} alt="Crossroads" className="col-span-3 row-span-2 object-cover w-full h-full" />
            <img src={concert2} alt="Live show" className="col-span-3 row-span-2 object-cover w-full h-full" />
            <img src={perth1} alt="Perth Live" className="col-span-6 row-span-2 object-cover w-full h-full" />
          </div>
        </div>
      </Section>

      {/* OUTREACH */}
      <Section id="outreach" label="Outreach & Education" tone="dark">
        <div className="grid lg:grid-cols-2 gap-10">
          <article className="group">
            <div className="aspect-[16/10] overflow-hidden mb-6">
              <img src={online1} alt="Online lockdown live shows" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="font-display text-3xl mb-3">Online Live Shows</h3>
            <p className="text-muted-foreground font-serif">
              Took part in a series of impactful online live shows during the lockdown
              period — using creativity and music to restore a sense of normalcy and connection.
              Featured in initiatives by the Leo Club of D.S. Senanayake College and Rotaract
              Clubs across Sri Lanka.
            </p>
          </article>
          <article className="group">
            <div className="aspect-[16/10] overflow-hidden mb-6">
              <img src={workshop} alt="Perth Sinhala School workshop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="font-display text-3xl mb-3">Perth Sinhala School Workshop & Concert</h3>
            <p className="text-muted-foreground font-serif">
              A 10-day workshop dedicated to teaching Sinhala children in Perth, Australia,
              various music instruments, dance and acting — guiding them collaboratively
              to showcase their newfound talents in a dedicated concert. A volunteer teacher
              alongside my family, nurturing young artists in their creative journey.
            </p>
          </article>
        </div>
        <div className="mt-14">
          <p className="section-label mb-6">Down the Memory Lane</p>
          <div className="aspect-[21/9] overflow-hidden">
            <img src={memory1} alt="Down the memory lane" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      {/* AWARDS */}
      <Section id="awards" label="Awards & Recognition">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-display text-5xl lg:text-6xl leading-[1.05]">
              Recognized for the <span className="text-gradient-gold italic">work and the voice.</span>
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {[
                { year: "2018", title: "Best Background Singer", org: "Ministry of Cultural, Internal Affairs and Regional Development" },
                { year: "2019", title: "Best Song of the Year", org: "Ministry of Cultural, Internal Affairs and Regional Development" },
                { year: "2022", title: "Nominee — Best Teledrama Singer (Male)", org: "Raigam Tele's The Nation's Tele Awards" },
              ].map((a) => (
                <li key={a.title} className="py-6 flex gap-6 items-start group">
                  <Award className="h-6 w-6 text-gold flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-display text-3xl text-gradient-gold">{a.year}</span>
                      <h3 className="font-display text-2xl">{a.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 font-serif italic">{a.org}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 content-start">
            <img src={award1} alt="Award ceremony" className="aspect-[3/4] object-cover w-full" />
            <img src={award2} alt="Award trophy" className="aspect-[3/4] object-cover w-full mt-10" />
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={closing} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-linear-to-b from-background via-ink/90 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <span className="section-label justify-center">Get in touch</span>
          <h2 className="font-display text-6xl lg:text-8xl mt-6 leading-[0.95]">
            Let's make
            <br />
            <span className="text-gradient-gold italic">something timeless.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            Open to collaborations across composition, performance, foley and sound design —
            for film, television, stage and independent releases.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nirupadhi.perera@gmail.com"
              className="inline-flex items-center gap-3 bg-gold text-ink px-6 py-3 rounded-full hover:bg-foreground transition-colors group"
            >
              <Mail className="h-4 w-4" />
              <span>Send an email</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://instagram.com/nirupadhi_perera"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-border px-6 py-3 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="h-4 w-4" /> @nirupadhi_perera
            </a>
            <a
              href="https://www.youtube.com/@YasharuNirupadhi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-border px-6 py-3 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <Youtube className="h-4 w-4" /> YouTube
            </a>
            <a
              href="https://facebook.com/Yasharu.n.Nirupadhi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-border px-6 py-3 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p className="font-serif italic">© {new Date().getFullYear()} Nirupadhi Perera · Composer · Singer · Sound Design</p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gold/70">Ayubowan 🙏</p>
      </footer>
    </div>
  );
}

function Reveal({ children, delay = 0, as: As = "div" }: { children: React.ReactNode; delay?: number; as?: React.ElementType }) {
  const [visible, setVisible] = useState(false);
  const ref = (node: HTMLElement | null) => {
    if (!node || visible) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(node);
  };
  return (
    <As
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-[2px]"
      }`}
    >
      {children}
    </As>
  );
}

function Section({
  id,
  label,
  children,
  tone = "default",
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  tone?: "default" | "dark";
}) {
  return (
    <section id={id} className="relative py-28 lg:py-40">
      {tone === "dark" && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 bottom-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 50%, oklch(0.22 0.03 50 / 0.55), transparent 70%)",
          }}
        />
      )}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="section-label mb-10">{label}</p>
        </Reveal>
        <Reveal delay={120}>{children}</Reveal>
      </div>
    </section>
  );
}

function ProjectCard({
  img,
  title,
  sinhala,
  role,
}: {
  img: string;
  title: string;
  sinhala?: string;
  role: string;
}) {
  return (
    <article className="group relative overflow-hidden bg-card rounded-sm transition-transform duration-500 hover:-translate-y-1">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gold mb-2">{role}</p>
        <h3 className="font-display text-2xl leading-tight">{title}</h3>
        {sinhala && <p className="text-xs text-muted-foreground mt-1 font-serif italic">{sinhala}</p>}
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/30 transition-all duration-500 pointer-events-none rounded-sm" />
    </article>
  );
}

