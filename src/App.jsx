import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { content } from './content.js';
import { AmbientCanvas } from './components/AmbientCanvas.jsx';

const ProfileBadge3D = lazy(() =>
  import('./components/ProfileBadge3D.jsx').then((module) => ({ default: module.ProfileBadge3D })),
);

const LANGS = ['zh', 'ja', 'en'];

const icons = {
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  book: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
};

function getInitialLanguage() {
  const stored = localStorage.getItem('preferred-language');
  if (LANGS.includes(stored)) return stored;
  const browser = (navigator.language || 'en').toLowerCase();
  if (browser.startsWith('zh')) return 'zh';
  if (browser.startsWith('ja')) return 'ja';
  return 'en';
}

function getInitialTheme() {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [lang, setLang] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const c = content[lang] || content.en;

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.documentElement.dataset.theme = theme;
    document.title =
      lang === 'en'
        ? 'Lixin Yin — Anesthesiologist & Medical AI Researcher'
        : lang === 'zh'
          ? '殷利鑫 — 麻醉医生与医疗人工智能实践者'
          : '殷 利鑫 — 麻酔科医・医療AI実践者';
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.hero.bio);
    localStorage.setItem('preferred-language', lang);
  }, [c.hero.bio, lang, theme]);

  const navItems = useMemo(
    () => [
      ['about', c.nav.about],
      ['competitions', c.nav.competitions],
      ['awards', c.nav.awards],
      ['projects', c.nav.projects],
      ['appointments', c.nav.appointments],
      ['skills', c.nav.skills],
      ['contact', c.nav.contact],
    ],
    [c.nav],
  );

  return (
    <>
      <AmbientCanvas />
      <nav>
        <div className="nav-inner">
          <span className="nav-brand">{c.brand}</span>
          <ul className="nav-links">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <div className="lang-switcher" role="group" aria-label="Language">
              <button className="lang-btn" type="button" data-lang="zh" aria-pressed={lang === 'zh'} onClick={() => setLang('zh')}>中文</button>
              <button className="lang-btn" type="button" data-lang="ja" aria-pressed={lang === 'ja'} onClick={() => setLang('ja')}>日本語</button>
              <button className="lang-btn" type="button" data-lang="en" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>English</button>
            </div>
            <button
              className="theme-toggle"
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section id="about">
          <div className="hero">
            <div className="hero-grid">
              <div className="hero-text">
                <h1 className="hero-name">{c.hero.name}</h1>
                <p className="hero-role">{c.hero.role}</p>
                <p className="hero-institution">{c.hero.institution}</p>
                <div className="hero-tags">
                  {c.hero.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <p className="hero-bio">{c.hero.bio}</p>
                <div className="hero-contact">
                  <a href="mailto:ylx3020129@gmail.com" className="btn-primary">
                    <MailIcon /> <span>{c.hero.email}</span>
                  </a>
                  <a href="mailto:yinlx@jyrmyy.com" className="btn-ghost">{c.hero.workEmail}</a>
                </div>
              </div>
              <Suspense fallback={<div className="badge-stage badge-stage-fallback">Loading 3D badge</div>}>
                <ProfileBadge3D theme={theme} />
              </Suspense>
            </div>
          </div>
        </section>

        <Section id="competitions" label={c.competitions.label} title={c.competitions.title}>
          <div className="medals-grid">
            {c.medals.map((item) => (
              <article className="medal-card tilt-card" key={item.title}>
                <div className="medal-header">
                  <div className={`medal-icon medal-${item.kind}`}>{item.icon}</div>
                  <h3 className="medal-title">{item.title}</h3>
                </div>
                <p className="medal-rank">{item.rank}</p>
                <p className="medal-org">{item.org}</p>
                <p className="medal-desc">{item.desc}</p>
                <p className="medal-date">{item.date}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="awards" label={c.awards.label} title={c.awards.title}>
          <div className="awards-list">
            {c.awardsList.map((item) => (
              <article className="award-item" key={item.title}>
                <span className="award-badge">{item.badge}</span>
                <div>
                  <h3 className="award-title">{item.title}</h3>
                  <p className="award-project">{item.project}</p>
                  <p className="award-meta">{item.meta}<br />{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" label={c.projects.label} title={c.projects.title}>
          <div className="projects-grid">
            {c.projectsList.map((item) => (
              <article className="project-card tilt-card" key={item.name}>
                <div className="project-top">
                  <h3 className="project-title">{item.name}</h3>
                  {item.stars > 0 && <span className="project-stars">{item.stars} {c.projects.stars}</span>}
                </div>
                <p className="project-desc">{item.desc}</p>
                <div className="project-tags">
                  {item.tags.map((tag) => <span className="project-tag" key={tag}>{tag}</span>)}
                </div>
                <a className="project-link" href={item.url} target="_blank" rel="noopener noreferrer">
                  {c.projects.link} <ExternalIcon />
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="appointments" label={c.appointments.label} title={c.appointments.title}>
          <div className="appt-list">
            {c.appointmentsList.map((item) => (
              <article className="appt-card" key={item.role}>
                <div className="appt-icon">{icons[item.icon] || icons.shield}</div>
                <h3 className="appt-role">{item.role}</h3>
                <p className="appt-org">{item.org}</p>
                <p className="appt-date">{item.date}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" label={c.skills.label} title={c.skills.title}>
          <div className="skills-grid">
            {c.skillsList.map((group) => (
              <article className="skill-card" key={group.cat}>
                <h3 className="skill-cat">{group.cat}</h3>
                <div className="skill-items">
                  {group.items.map((item) => <span className="skill-item" key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <h2 className="contact-title">{c.contact.title}</h2>
            <p className="contact-desc">{c.contact.desc}</p>
            <div className="contact-links">
              {['ylx3020129@gmail.com', 'yinlx@jyrmyy.com', '524607986@qq.com'].map((email) => (
                <a href={`mailto:${email}`} className="contact-link" key={email}>
                  <MailIcon /> {email}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>{c.footer}</footer>
    </>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-label">{label}</p>
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function MoonIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>;
}

function SunIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>;
}

function MailIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
}

function ExternalIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>;
}
