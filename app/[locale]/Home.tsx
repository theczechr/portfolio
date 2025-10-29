"use client";

import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";

export type Locale = "en" | "cs";

type ResourceLink = { href: string; label: string };

type LocalizedContent = {
  name: string;
  title: string;
  tagline: string;
  nav: {
    about: string;
    experience: string;
    projects: string;
  };
  sections: {
    about: string;
    experience: string;
    projects: string;
  };
  resumeCta: string;
  languageToggle: {
    aria: string;
  };
  socialLabels: {
    github: string;
    facebook: string;
  };
  about: {
    paragraphs: string[];
  };
  experience: {
    items: Array<{
      id: string;
      period: string;
      role: string;
      company: string;
      companyUrl: string;
      description: string;
      tags: string[];
    }>;
  };
  projects: {
    plantifulDescription: string;
    plantifulLinks: ResourceLink[];
    ombraDescription: string;
    hyprfolioDescription: string;
    hyprfolioLinks: ResourceLink[];
    sentinelDescription: string;
    sentinelLinks: ResourceLink[];
    portfolioTitle: string;
    portfolioDescription: string;
    portfolioLinks: ResourceLink[];
  };
};

type HomeProps = {
  locale: Locale;
  content: LocalizedContent;
};

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
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.stopPropagation();
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="resource-link-icon"
            aria-hidden="true"
          >
            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3z" />
            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865z" />
          </svg>
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}

export default function Home({ locale, content }: HomeProps) {
  const [activeSection, setActiveSection] = useState("about");
  const lenis = useLenis();
  const nextLocale: Locale = locale === "en" ? "cs" : "en";

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"] as const;
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    if (lenis) {
      lenis.scrollTo(section, { offset: -32 });
      return;
    }

    window.scrollTo({ top: section.offsetTop - 32, behavior: "smooth" });
  };

  const handleCardActivation = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <ReactLenis root>
      <div className="main-container">
        <div className="left-sidebar">
          <div>
            <header>
              <h1 className="text-name">{content.name}</h1>
              <p className="text-title">{content.title}</p>
              <p className="text-bio" style={{ whiteSpace: "nowrap" }}>
                {content.tagline}
              </p>
            </header>

            <nav className="navigation">
              <a
                className={`nav-item ${activeSection === "about" ? "active" : ""}`}
                onClick={() => scrollToSection("about")}
              >
                {content.nav.about}
              </a>
              <a
                className={`nav-item ${
                  activeSection === "experience" ? "active" : ""
                }`}
                onClick={() => scrollToSection("experience")}
              >
                {content.nav.experience}
              </a>
              <a
                className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
                onClick={() => scrollToSection("projects")}
              >
                {content.nav.projects}
              </a>
            </nav>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/theczechr"
              className="social-icon social-bubble"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.socialLabels.github}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/spacegliderobin"
              className="social-icon social-bubble"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.socialLabels.facebook}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <Link
              href={`/${nextLocale}`}
              className="language-toggle social-bubble"
              aria-label={content.languageToggle.aria}
              role="button"
            >
              {nextLocale}
            </Link>
          </div>
        </div>

        <div className="right-content">
          <section id="about" className="section">
            <h2 className="section-title-mobile">{content.sections.about}</h2>
            <section style={{ padding: "12px" }}>
              {content.about.paragraphs.map((paragraph, index) => (
                <p
                  key={`about-${index}`}
                  className="card-description"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </section>
          </section>

          <section id="experience" className="section">
            <h2 className="section-title-mobile">{content.sections.experience}</h2>
            {content.experience.items.map((item) => (
              <div
                key={item.id}
                className="card"
                role="link"
                tabIndex={0}
                style={{ cursor: "pointer" }}
                onClick={() => handleCardActivation(item.companyUrl)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleCardActivation(item.companyUrl);
                  }
                }}
              >
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
                    {item.period}
                  </div>
                  <div style={{ flex: 1 }}>
                    <a
                      href={item.companyUrl}
                      className="title-row cta-link"
                      style={{
                        marginBottom: item.id === "kyndryl" ? "0" : "0.3rem",
                        gap: 0,
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.stopPropagation();
                        }
                      }}
                    >
                      <h3
                        className="card-title"
                        style={{ marginBottom: 0, color: "inherit" }}
                      >
                        {item.role}
                      </h3>
                      <span
                        className="card-title"
                        style={{
                          marginBottom: 0,
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ margin: "0 0.5rem" }}>·</span>
                        {item.company}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="16"
                          height="16"
                          className="arrow"
                          aria-hidden="true"
                          style={{
                            marginLeft: "0.4rem",
                            position: "relative",
                            top: "1px",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                    <p
                      className="card-description"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />

                    <div>
                      {item.tags.map((tag) => (
                        <span key={`${item.id}-${tag}`} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

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
                {content.resumeCta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="16"
                  height="16"
                  className="arrow"
                  aria-hidden="true"
                  style={{ position: "relative", top: "1px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </section>

          <section id="projects" className="section">
            <h2 className="section-title-mobile">{content.sections.projects}</h2>
            <div
              className="card"
              role="link"
              tabIndex={0}
              style={{ cursor: "pointer" }}
              onClick={(event) => {
                const target = event.target as HTMLElement | null;
                if (target?.closest("a")) return;
                window.open(
                  "https://www.plantiful.cz",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  const target = event.target as HTMLElement | null;
                  if (target?.closest("a")) return;
                  event.preventDefault();
                  window.open(
                    "https://www.plantiful.cz",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }
              }}
            >
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
                  <div className="project-header">
                    <div className="project-icon-mobile plantiful-icon">
                      <Image
                        src="/adaptive-icon.png"
                        alt="Plantiful App Icon"
                        width={36}
                        height={36}
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                    <a
                      href="https://www.plantiful.cz"
                      className="cta-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.stopPropagation();
                        }
                      }}
                    >
                      <h3
                        className="card-title"
                        style={{ marginBottom: 0, color: "inherit" }}
                      >
                        Plantiful
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width="16"
                        height="16"
                        className="arrow"
                        aria-hidden="true"
                        style={{ position: "relative", top: "1px" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <p
                    className="card-description"
                    dangerouslySetInnerHTML={{
                      __html: content.projects.plantifulDescription,
                    }}
                  />
                  <ResourceLinks links={content.projects.plantifulLinks} />
                  <div>
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Expo</span>
                    <span className="tech-tag">Figma</span>
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
                  <Image
                    src="/logo-dark.svg"
                    alt="Plantiful App Icon"
                    width={120}
                    height={120}
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="project-header">
                    <div className="project-icon-mobile">
                      <Image
                        src="/logo-dark.svg"
                        alt="Ombra Logo"
                        width={36}
                        height={36}
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                    <h3 className="card-title">Ombra</h3>
                  </div>
                  <p
                    className="card-description"
                    dangerouslySetInnerHTML={{
                      __html: content.projects.ombraDescription,
                    }}
                  />

                  <div>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Flask</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">SQL</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card"
              role="link"
              tabIndex={0}
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("/hyprfolio", "_blank", "noopener,noreferrer");
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  window.open("/hyprfolio", "_blank", "noopener,noreferrer");
                }
              }}
            >
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
                  <div className="project-header">
                    <div className="project-icon-mobile">
                      <Image
                        src="/hyprfolio.svg"
                        alt="Hyprfolio Logo"
                        width={36}
                        height={36}
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                    <a
                      href="/hyprfolio"
                      className="cta-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.stopPropagation();
                        }
                      }}
                    >
                      <h3
                        className="card-title"
                        style={{ marginBottom: 0, color: "inherit" }}
                      >
                        Hyprfolio
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width="16"
                        height="16"
                        className="arrow"
                        aria-hidden="true"
                        style={{ position: "relative", top: "1px" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <p
                    className="card-description"
                    dangerouslySetInnerHTML={{
                      __html: content.projects.hyprfolioDescription,
                    }}
                  />
                  <ResourceLinks links={content.projects.hyprfolioLinks} />
                  <div>
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">JavaScript</span>
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
                  <div className="project-header">
                    <div className="project-icon-mobile">
                      <Image
                        src="/drogon.png"
                        alt="Sentinel Logo"
                        width={36}
                        height={36}
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                    <h3 className="card-title">Sentinel</h3>
                  </div>
                  <p
                    className="card-description"
                    dangerouslySetInnerHTML={{
                      __html: content.projects.sentinelDescription,
                    }}
                  />
                  <ResourceLinks links={content.projects.sentinelLinks} />
                  <div>
                    <span className="tech-tag">C++</span>
                    <span className="tech-tag">Drogon</span>
                    <span className="tech-tag">SQLite</span>
                    <span className="tech-tag">WebSockets</span>
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
                  <div className="project-header">
                    <div className="project-icon-mobile">
                      <Image
                        src="/portfolio.svg"
                        alt="Portfolio Logo"
                        width={36}
                        height={36}
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                    <h3 className="card-title">{content.projects.portfolioTitle}</h3>
                  </div>
                  <p
                    className="card-description"
                    dangerouslySetInnerHTML={{
                      __html: content.projects.portfolioDescription,
                    }}
                  />
                  <ResourceLinks links={content.projects.portfolioLinks} />
                  <div>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Lenis</span>
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

