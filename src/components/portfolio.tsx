"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, BrainCircuit, Camera, Code2, CodeXml, GitBranch, LayoutGrid, Mail, Menu, MessageCircle, Network, Sparkles, X } from "lucide-react";
import { journeyItems, projects, siteData, skills } from "@/data/portfolio";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";

const navItems = [{ href: "#about", label: "ABOUT" }, { href: "#learning", label: "SKILLS" }, { href: "#work", label: "PROJECTS" }, { href: "#journey", label: "JOURNEY" }, { href: "#contact", label: "CONTACT" }];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 0, y: reduced ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: reduced ? 0.01 : 0.68, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionLabel({ number, children, light = false }: { number: string; children: React.ReactNode; light?: boolean }) {
  const reduced = useReducedMotion();
  return <motion.div className={`section-label ${light ? "section-label-light" : ""}`} initial={{ opacity: 0, x: reduced ? 0 : -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .7 }} transition={{ duration: reduced ? .01 : .5, ease: [0.22, 1, 0.36, 1] }}><span>{number}</span><i />{children}</motion.div>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.2, 0.5] });
    navItems.forEach(({ href }) => { const section = document.querySelector(href); if (section) observer.observe(section); });
    const hero = document.querySelector("#top");
    const navObserver = hero ? new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), { threshold: 0, rootMargin: "-90px 0px 0px 0px" }) : null;
    if (hero) navObserver?.observe(hero);
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onEscape);
    return () => { observer.disconnect(); navObserver?.disconnect(); window.removeEventListener("keydown", onEscape); };
  }, []);
  const close = () => setOpen(false);
  return <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
    <a className="nav-mark" href="#top" aria-label="Khan Kainat, back to top">K</a>
    <a href="#top" className="wordmark"><span>Khan Kainat</span><small>AI &amp; DATA SCIENCE STUDENT</small></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(item => <a className={active === item.href ? "active" : ""} key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <button className="mobile-menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    <AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav glass-surface" aria-label="Mobile navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .2 }}>{navItems.map((item, index) => <a key={item.href} href={item.href} aria-current={active === item.href ? "location" : undefined} onClick={close}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={15} /></a>)}</motion.nav>}</AnimatePresence>
  </header>;
}

function Hero() {
  const reduced = useReducedMotion();
  return <section id="top" className="hero">
    <div className="hero-glow hero-glow-one" aria-hidden="true" /><div className="hero-glow hero-glow-two" aria-hidden="true" />
    <div className="hero-copy">
      <motion.p className="hero-kicker" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .5 }}>FY AI &amp; DATA SCIENCE STUDENT <i /> MUMBAI, INDIA</motion.p>
      <motion.h1 className="hero-title" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { delayChildren: .22, staggerChildren: reduced ? 0 : .16 } } }}><motion.span variants={{ hidden: { opacity: 0, y: reduced ? 0 : 32, filter: reduced ? "none" : "blur(5px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: reduced ? .01 : .72, ease: [0.22, 1, 0.36, 1] } } }}>KHAN</motion.span><motion.span className="hero-title-last" variants={{ hidden: { opacity: 0, y: reduced ? 0 : 32, filter: reduced ? "none" : "blur(5px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: reduced ? .01 : .72, ease: [0.22, 1, 0.36, 1] } } }}>KAINAT<span className="hero-period">.</span></motion.span></motion.h1>
      <motion.p className="hero-intro" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45, duration: .55 }}>Hello! I&apos;m Khan Kainat, a first-year AI &amp; Data Science student passionate about technology, programming, UI/UX design, and exploring creative digital experiences.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .62, duration: .55 }}><LiquidGlassButton variant="primary" size="lg" asChild><a href="#work">EXPLORE MY WORK <ArrowDownRight size={16} /></a></LiquidGlassButton><LiquidGlassButton variant="glass" size="lg" asChild><a href="#about">MORE ABOUT ME</a></LiquidGlassButton></motion.div>
      <div className="hero-meta"><span>PORTFOLIO / {siteData.year}</span><span>STUDENT · LEARNING IN PUBLIC</span></div>
    </div>
    <motion.div className="hero-visual" initial={reduced ? false : { opacity: 0, scale: .96, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: reduced ? .01 : .8, delay: .2 }} aria-label="Editable profile image placeholder">
      <div className="profile-panel glass-surface"><div className="profile-orbit orbit-one" /><div className="profile-orbit orbit-two" /><div className="profile-core"><span>KK</span><small>ADD YOUR<br />PHOTO HERE</small></div><div className="profile-corner profile-corner-top" /><div className="profile-corner profile-corner-bottom" /><span className="profile-caption">PROFILE IMAGE · EDITABLE PLACEHOLDER</span></div>
      <motion.div className="float-chip chip-ai" animate={reduced ? undefined : { y: [0, -5, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}><BrainCircuit size={16} /><span>AI &amp; DATA SCIENCE</span></motion.div>
      <motion.div className="float-chip chip-python" animate={reduced ? undefined : { y: [0, 5, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}><Code2 size={16} /><span>PYTHON</span></motion.div>
      <motion.div className="float-chip chip-design" animate={reduced ? undefined : { y: [0, -4, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}><LayoutGrid size={16} /><span>UI / UX DESIGN</span></motion.div>
    </motion.div>
  </section>;
}

function About() {
  const details = [{ label: "NAME", value: siteData.name }, { label: "EDUCATION", value: siteData.degree }, { label: "INSTITUTE", value: siteData.institute }, { label: "LOCATION", value: siteData.location }, { label: "INTERESTS", value: "AI · PROGRAMMING · UI/UX DESIGN" }];
  return <section id="about" className="about section-pad"><SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel><div className="section-heading about-heading"><motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>CURIOUS ABOUT<br /><em>WHAT&apos;S POSSIBLE.</em></motion.h2><motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .6, delay: .12, ease: [0.22, 1, 0.36, 1] }}>{siteData.aboutParagraph}</motion.p></div>
    <div className="about-grid"><Reveal className="about-note-reveal"><div className="about-note glass-surface"><span className="note-index">A NOTE FROM KAINAT</span><p>“I enjoy learning how technology works, exploring programming, experimenting with creative designs, and developing my skills through practical projects.”</p><div className="note-signature">K<span>·</span></div></div></Reveal><div className="profile-details">{details.map((item, index) => <Reveal key={item.label} delay={index * .04}><div className="detail-row"><span>{item.label}</span><strong>{item.value}</strong></div></Reveal>)}</div></div>
  </section>;
}

const skillIcons = [Code2, CodeXml, Code2, LayoutGrid, LayoutGrid, Sparkles, BrainCircuit, BrainCircuit];
function Skills() {
  return <section id="learning" className="skills section-pad"><SectionLabel number="02">WHAT I&apos;M LEARNING</SectionLabel><div className="section-heading skills-heading"><motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>BUILDING SKILLS,<br /><em>STEP BY STEP.</em></motion.h2><motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .6, delay: .12 }}>{"These are learning areas, not claims of mastery. I'm building understanding through practice and small experiments."}</motion.p></div><div className="skill-grid">{skills.map((item, index) => { const Icon = skillIcons[index % skillIcons.length]; return <Reveal key={item.number} delay={(index % 4) * .07}><article className="skill-card glass-surface"><span className="skill-card-index">{item.number}</span><div className="skill-icon"><Icon size={20} strokeWidth={1.6} /></div><h3>{item.title}</h3><p>{item.description}</p><span className="learning-tag">CURRENTLY LEARNING</span></article></Reveal>; })}</div></section>;
}

function Projects() {
  return <section id="work" className="projects section-pad"><SectionLabel number="03">STUDENT PROJECTS &amp; IDEAS</SectionLabel><div className="section-heading projects-title"><motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>MY CREATIVE<br /><em>EXPLORATIONS.</em></motion.h2><motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .6, delay: .12 }}>Concepts and personal experiments from a student still finding her way. Each one is a chance to learn by making.</motion.p></div><div className="project-grid">{projects.map((project, index) => <div key={project.id} className={`project-wrap project-wrap-${index + 1}`}><article className="project-card glass-surface"><figure className="project-image"><Image src={project.image} alt={project.alt} fill unoptimized sizes="(max-width: 680px) 92vw, (max-width: 1000px) 45vw, 40vw" style={{ objectFit: "cover" }} /><span className="project-preview-label">CONCEPT PREVIEW</span></figure><div className="project-info"><div className="project-topline"><span>{project.number} / {project.category}</span><ArrowUpRight size={17} /></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-link-placeholder">PROJECT LINK · ADD WHEN AVAILABLE</span></div></article></div>)}</div></section>;
}

function Journey() {
  return <section id="journey" className="journey section-pad"><SectionLabel number="04">MY LEARNING JOURNEY</SectionLabel><div className="section-heading journey-heading"><motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>ONE STEP<br /><em>AT A TIME.</em></motion.h2><motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .6, delay: .12 }}>There&apos;s a lot to discover. Here&apos;s where my curiosity is taking me so far.</motion.p></div><div className="timeline">{journeyItems.map((item, index) => <Reveal key={item.number} delay={index * .08}><article className="timeline-row"><span className="timeline-index">{item.number}</span><div className="timeline-marker" /><h3>{item.title}</h3><p>{item.description}</p></article></Reveal>)}</div><p className="journey-note">STILL LEARNING. STILL MAKING. <span>✳</span></p></section>;
}

function Contact() {
  const contactItems = [
    { label: "LINKEDIN", href: siteData.contacts.linkedin, Icon: Network },
    { label: "GITHUB", href: siteData.contacts.github, Icon: GitBranch },
    { label: "WHATSAPP", href: siteData.contacts.whatsapp, Icon: MessageCircle },
    { label: "INSTAGRAM", href: siteData.contacts.instagram, Icon: Camera },
    { label: "EMAIL", href: siteData.contacts.email ? `mailto:${siteData.contacts.email}` : "", Icon: Mail },
  ];
  return <footer id="contact" className="contact section-pad"><SectionLabel number="05" light>LET&apos;S CONNECT</SectionLabel><div className="contact-main"><div><motion.p className="contact-eyebrow" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }}>OPEN TO IDEAS, QUESTIONS &amp; CONVERSATION</motion.p><motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}>LET&apos;S BUILD<br /><em>SOMETHING <span>GOOD.</span></em></motion.h2><motion.p className="contact-copy" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: .13 }}>I&apos;m always happy to meet people who love learning, making things, and exploring thoughtful digital experiences.</motion.p></div><Reveal delay={.12}><div className="contact-panel glass-surface"><span className="contact-panel-label">FIND ME AROUND THE WEB</span><div className="contact-links">{contactItems.map(({ label, href, Icon }) => href ? <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer"><Icon size={17} /><span>{label}</span><ArrowUpRight size={14} /></a> : <span className="contact-link-placeholder" key={label}><Icon size={17} /><span>{label}</span><small>ADD PROFILE LINK</small></span>)}</div></div></Reveal></div><Reveal className="footer-reveal"><div className="footer-bottom"><a className="footer-mark" href="#top" aria-label="Back to top">K</a><span>KHAN KAINAT · STUDENT PORTFOLIO · {siteData.year}</span><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={14} /></a></div></Reveal><div className="footer-ornament" aria-hidden="true">KK</div></footer>;
}

export default function Portfolio() {
  return <MotionConfig reducedMotion="user"><Navigation /><main><Hero /><About /><Skills /><Projects /><Journey /></main><Contact /></MotionConfig>;
}
