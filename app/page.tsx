"use client";

import { useState, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Image from "next/image";

type ResourceLink = { href: string; label: string };

function ResourceLinks({ links }: { links: ResourceLink[] }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="resource-links">
      {links.map((link, index) => (
        <a
          key={`${link.label}-${index}`}
          href={link.href}
          className="resource-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const lenis = useLenis();

  // Scroll spy functionality with Lenis
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section with Lenis
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    if (lenis) {
      lenis.scrollTo(section, { offset: -32 });
      return;
    }

    window.scrollTo({ top: section.offsetTop - 32, behavior: "smooth" });
  };

  return (
    <ReactLenis root>
      <div className="main-container">
        {/* Left Sidebar - Sticky */}
        <div className="left-sidebar">
          <div>
            {/* Header Section */}
            <header>
              <h1 className="text-name">Robin Jarůšek</h1>
              <p className="text-title">AI | Fullstack Engineer</p>
              <p className="text-bio" style={{ whiteSpace: "nowrap" }}>
                I like to build cool stuff that works.
              </p>
            </header>

            {/* Navigation Menu */}
            <nav className="navigation">
              <a
                className={`nav-item ${
                  activeSection === "about" ? "active" : ""
                }`}
                onClick={() => scrollToSection("about")}
              >
                About
              </a>
              <a
                className={`nav-item ${
                  activeSection === "experience" ? "active" : ""
                }`}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </a>
              <a
                className={`nav-item ${
                  activeSection === "projects" ? "active" : ""
                }`}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://github.com/theczechr"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/spacegliderobin"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content - Scrollable */}
        <div className="right-content">
          {/* About Section */}
          <section id="about" className="section" style={{ paddingLeft: 24 }}>
            <h2 className="section-title-mobile">About</h2>
            <p className="card-description">
              I'm a developer who loves experimenting with new technology and
              building cool, nerdy projects. I mainly work with Python and
              JavaScript (especially React). I've been coding since 2020,
              starting out in Python, and I'm always eager to pick up new skills
              and tools.
            </p>
            <p className="card-description">
              Currently, I'm working as an AI Software Engineer at{" "}
              <a href="https://apertia.ai/">Apertia</a> while studying Computer
              Science in my second year at{" "}
              <a href="https://fit.vut.cz/">VUT FIT</a> in Brno. I'm passionate
              about AI, machine learning, and large language models. I also
              enjoy exploring blockchain, cybersecurity, and game development. I
              value open-source software and try to publish most of my projects
              publicly.
            </p>
            <p className="card-description">
              Outside of work and studies, I like to challenge myself with side
              projects that blend my interests and tech. I enjoy learning by
              doing and sharing what I create openly.
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section">
            <h2 className="section-title-mobile">Experience</h2>
            {/* Experience Card 1 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="card-meta"
                  style={{ minWidth: "140px", marginBottom: 0 }}
                >
                  2024 — Present
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 0,
                      marginBottom: "0.3rem",
                    }}
                  >
                    <h3 className="card-title" style={{ marginBottom: 0 }}>
                      AI Software Engineer
                    </h3>
                    <span
                      className="card-title"
                      style={{
                        marginBottom: 0,
                        color: "var(--text-primary)",
                        fontWeight: "var(--font-normal)",
                        display: "flex",
                        alignItems: "baseline",
                      }}
                    >
                      <span style={{ margin: "0 0.5rem" }}>·</span>
                      Apertia tech
                    </span>
                  </div>
                  <p className="card-description">
                    Designing and building Agentic AI, chatbots, custom AI data
                    analysis, browser automation and various internal tools to
                    accelerate company processes. Heavily utilizing cutting edge
                    open-source projects, LLMs, APIs and tools.
                  </p>
                  <ResourceLinks
                    links={[
                      {
                        href: "https://apertia.ai/",
                        label: "Website",
                      },
                    ]}
                  />

                  <div>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">LangChain</span>
                    <span className="tech-tag">RAG</span>
                    <span className="tech-tag">LLMs</span>
                    <span className="tech-tag">Vector DBs</span>
                    <span className="tech-tag">SQL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="card-meta"
                  style={{ minWidth: "140px", marginBottom: 0 }}
                >
                  2023 — 2024
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 0,
                      marginBottom: 0,
                    }}
                  >
                    <h3 className="card-title" style={{ marginBottom: 0 }}>
                      Intern Mobile Developer
                    </h3>
                    <span
                      className="card-title"
                      style={{
                        marginBottom: 0,
                        color: "var(--text-primary)",
                        fontWeight: "var(--font-normal)",
                        display: "flex",
                        alignItems: "baseline",
                      }}
                    >
                      <span style={{ margin: "0 0.5rem" }}>·</span>
                      Kyndryl
                    </span>
                  </div>
                  <p className="card-description">
                    Developed Plantiful, a plant-care app designed to help users
                    manage and care for their plants in a small 3-person team.
                    Handled the entire development process, from planning and
                    design to implementation and testing, while balancing work
                    and resources. Implemented features such as plant
                    recognition, watering reminders, room layouts, and care
                    tips.
                  </p>
                  <ResourceLinks
                    links={[
                      {
                        href: "https://www.kyndryl.com/cz/cs",
                        label: "Website",
                      },
                    ]}
                  />

                  <div>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">Expo</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Resume */}
            <div
              className="cta-container"
              style={{
                paddingLeft: "2.2rem",
                marginBottom: "2rem",
              }}
            >
              <a
                href="/jarusek_cv_en.pdf"
                className="cta-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Résumé <span className="arrow">↗</span>
              </a>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <h2 className="section-title-mobile">Projects</h2>
            {/* Project Card 1 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="card-meta"
                  style={{ minWidth: "140px", marginBottom: 0 }}
                >
                  <Image
                    src="/adaptive-icon.png"
                    alt="Plantiful App Icon"
                    width={120}
                    height={120}
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="card-title">Plantiful</h3>
                  <p className="card-description">
                    A cross-platform mobile application designed to help users
                    take care of their plants utilizing AI, image recognition
                    APIs and algorithmization. With features such as flower
                    recognition through AI, watering reminders, room layouts,
                    and all the important information about your plants.
                    Completely open-sourced.
                  </p>
                  <ResourceLinks
                    links={[
                      {
                        href: "/Plantiful.pdf",
                        label: "Research",
                      },
                      {
                        href: "https://github.com/plantiful/app",
                        label: "App",
                      },
                      {
                        href: "https://github.com/plantiful/website",
                        label: "Website",
                      },
                      {
                        href: "https://www.purkynka.cz/aktualne/dostali-jsme-se-do-top-desitky-ja-studentskych-firem-letosniho-roku/",
                        label: "Article",
                      },
                      {
                        href: "https://www.youtube.com/watch?v=zZ-SUUvdznc",
                        label: "Video",
                      },
                    ]}
                  />
                  <div>
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Expo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="card-meta"
                  style={{ minWidth: "140px", marginBottom: 0 }}
                >
                  <Image
                    src="/logo-dark.svg"
                    alt="Plantiful App Icon"
                    width={120}
                    height={120}
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="card-title">Ombra</h3>
                  <p className="card-description">
                    A full-stack admin panel for a game development company to
                    manage products and subscriptions, built with React,
                    Tailwind CSS, shadcn/ui, and Flask with SQLAlchemy.
                  </p>

                  <div>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Flask</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">SQL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="card-meta"
                  style={{ minWidth: "140px", marginBottom: 0 }}
                >
                  <Image
                    src="/hyprfolio.svg"
                    alt="Hyprfolio Logo"
                    width={120}
                    height={120}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="card-title">Hyprfolio</h3>
                  <p className="card-description">
                    An interactive portfolio website that simulates an Arch
                    Linux environment with the Hyprland window manager written
                    in pure JavaScript with no external dependencies or
                    frameworks.
                  </p>
                  <ResourceLinks
                    links={[
                      {
                        href: "https://github.com/theczechr/hyprfolio",
                        label: "GitHub",
                      },
                    ]}
                  />
                  <div>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "flex-start",
                }}
              >
                <div className="card-meta meta-col" style={{ marginBottom: 0 }}>
                  <Image
                    src="/drogon.png"
                    alt="Hyprfolio Logo"
                    width={120}
                    height={120}
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="card-title">Sentinel</h3>
                  <p className="card-description">
                    Sentinel is a proof-of-concept, privacy and security-focused
                    messaging application I co-created with my friend Karlos. It
                    features end-to-end encryption and utilizes WebSockets, the
                    Drogon HTTP web framework, and an SQL database to provide a
                    secure and efficient communication platform. After
                    completing the text-based user interface and proof of
                    concept, we open-sourced it and moved on to other projects.
                  </p>
                  <ResourceLinks
                    links={[
                      {
                        href: "https://github.com/theczechr/Sentinel-server",
                        label: "Server",
                      },
                      {
                        href: "https://github.com/theczechr/Sentinel-client",
                        label: "Client",
                      },
                    ]}
                  />
                  <div>
                    <span className="tech-tag">C++</span>
                    <span className="tech-tag">Drogon</span>
                    <span className="tech-tag">SQLite</span>
                    <span className="tech-tag">WebSockets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "flex-start",
                }}
              >
                <div className="card-meta meta-col" style={{ marginBottom: 0 }}>
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/portfolio.svg"
                      alt="Portfolio Logo"
                      width={120}
                      height={120}
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="card-title">This portfolio</h3>
                  <p className="card-description">
                    Built with Next.js 15 and React 19, featuring Lenis-powered
                    smooth scrolling and Tailwind CSS. Clean, responsive layout
                    for About, Experience, and Projects; open source.
                  </p>
                  <ResourceLinks
                    links={[
                      {
                        href: "https://github.com/theczechr/portfolio",
                        label: "GitHub",
                      },
                    ]}
                  />
                  <div>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ReactLenis>
  );
}
