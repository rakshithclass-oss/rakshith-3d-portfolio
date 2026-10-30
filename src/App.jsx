import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity, ArrowDownRight, ArrowRight, Award, BrainCircuit, BriefcaseBusiness,
  Check, ChevronRight, Code2, Cpu, Download, ExternalLink, Github, GraduationCap,
  House, Mail, MapPin, Menu, Phone, RadioTower, Rocket, ShieldCheck, Sparkles,
  Terminal, X, Zap,
} from 'lucide-react'
import NeuralScene from './components/NeuralScene.jsx'

const navItems = [
  { id: 'overview', label: 'Overview', icon: House },
  { id: 'projects', label: 'Projects', icon: Rocket },
  { id: 'skills', label: 'Skills', icon: BrainCircuit },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail },
]

const projects = [
  {
    id: 'accident-alert-x',
    number: '01',
    title: 'Accident Alert X',
    type: 'Computer vision · Road safety',
    description: 'Real-time accident detection and notification system using a forward-facing dashcam.',
    details: [
      'Built a computer-vision application to detect road accidents in real time from a forward-facing dashcam using Python, YOLOv8, PyTorch, and OpenCV.',
      'Integrated GPS and map data to display nearby hospitals and help users identify care options after a detected incident.',
      'Designed automated notification workflows using Telegram Bot API and Pushbullet to deliver timely accident alerts.',
      'Combined accident detection, nearby-hospital context, and messaging alerts in one safety-focused workflow.',
    ],
    stack: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Telegram Bot API', 'Pushbullet'],
    icon: ShieldCheck,
    tone: 'violet',
  },
  {
    id: 'gun-detection',
    number: '02',
    title: 'Gun Detection & Notification System',
    type: 'Machine learning · Detection prototype',
    description: 'Detection-focused machine-learning prototype exploring automated firearm identification.',
    details: [
      'Explored automated firearm identification through a detection-focused machine-learning prototype.',
      'Considered notification workflows for detected objects to support timely awareness and handling.',
    ],
    stack: ['Machine Learning', 'Object Detection', 'Python'],
    icon: RadioTower,
    tone: 'teal',
  },
]

const skillGroups = [
  { title: 'Languages & web', icon: Code2, items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'HTML', 'SQL'] },
  { title: 'AI / ML & computer vision', icon: BrainCircuit, items: ['YOLOv8', 'OpenCV', 'PyTorch', 'TensorFlow Lite', 'Keras', 'Roboflow', 'Google Colab'] },
  { title: 'Frameworks & tools', icon: Terminal, items: ['Spring Boot', 'MongoDB', 'Selenium WebDriver', 'Power Automate Desktop', 'Git', 'Telegram Bot API'] },
]

const experiences = [
  { company: 'Mountra Success Solutions', role: 'Freelancer', duration: '8 months', note: 'Freelance development experience.' },
  { company: 'Dice Web Technologies', role: 'Freelancer', duration: '6 months', note: 'Project-based development, automation, and data-processing experience.' },
]

const education = [
  { course: 'Diploma in Computer Science', place: 'SNM Polytechnic, Moodbidri', result: 'Final year · Currently studying', current: true },
  { course: '2nd PUC', place: 'Jain PU College, Moodbidri', result: '2023–2024 · 84%' },
  { course: 'SSLC / 10th', place: 'St. Thomas, Alangar', result: '2022 · 66.4%' },
]

function Sidebar({ active, onChange, open, setOpen }) {
  return (
    <>
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="brand-lockup">
          <div className="brand-mark"><span>R</span><i /></div>
          <div><strong>RAKSHITH</strong><small>PERSONAL DASHBOARD</small></div>
          <button className="sidebar-close" onClick={() => setOpen(false)} aria-label="Close menu"><X size={18} /></button>
        </div>
        <div className="sidebar-label">WORKSPACE</div>
        <nav className="side-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button key={item.id} className={`nav-link ${active === item.id ? 'selected' : ''}`} onClick={() => { onChange(item.id); setOpen(false) }}>
                <Icon size={17} strokeWidth={1.8} /> <span>{item.label}</span>
                {active === item.id && <span className="nav-indicator" />}
              </button>
            )
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="availability-card">
            <div className="availability-icon"><Sparkles size={16} /></div>
            <div><strong>Career focus</strong><span>Machine Learning</span></div>
          </div>
          <div className="sidebar-foot"><span className="online-dot" /> PORTFOLIO / 2026</div>
        </div>
      </aside>
      {open && <button className="sidebar-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />}
    </>
  )
}

function Topbar({ active, setOpen }) {
  const current = navItems.find((item) => item.id === active)?.label ?? 'Overview'
  return (
    <header className="topbar">
      <button className="mobile-menu" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
      <div className="breadcrumb"><span>PORTFOLIO</span><ChevronRight size={13} /><strong>{current.toUpperCase()}</strong></div>
      <div className="topbar-right"><span className="topbar-status"><i /> ASPIRING MACHINE LEARNING ENGINEER</span><div className="avatar-small">R</div></div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, subtitle, action }) {
  return (
    <div className="section-heading">
      <div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>
      {action}
    </div>
  )
}

function ProjectCard({ project, onOpen }) {
  const Icon = project.icon
  return (
    <motion.article className={`project-card ${project.tone}`} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <div className="project-top"><span className="project-number">PROJECT / {project.number}</span><div className="project-icon"><Icon size={20} /></div></div>
      <div className="project-content"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p></div>
      <div className="project-tags">{project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
      <button className="project-open" onClick={() => onOpen(project)}>Explore project <ArrowUpRightIcon /></button>
    </motion.article>
  )
}

function ArrowUpRightIcon() { return <ArrowDownRight size={16} className="diagonal-arrow" /> }

function Overview({ setActive, onOpenProject }) {
  return (
    <motion.div className="page-content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <div className="welcome-line"><div><span className="eyebrow">CREATIVE MINDSET</span><h1>Hey, I’m <em>Rakshith.</em></h1><p className="welcome-subtitle">Aspiring Machine Learning Engineer <span className="divider-dot">·</span> Computer Science</p></div><a className="resume-button" href="/Rakshith_Resume.docx" download><Download size={15} /> Download CV</a></div>
      <section className="hero-panel">
        <div className="hero-copy"><div className="hero-kicker"><span className="kicker-line" /> BUILDING WITH INTELLIGENCE</div><h2>Turning real-world<br /><span>problems into</span><br /><strong>AI solutions.</strong></h2><p>Focused on computer vision, object detection, and automation workflows that make technology useful in the real world.</p><div className="hero-actions"><button className="primary-button" onClick={() => setActive('projects')}>Explore my work <ArrowRight size={16} /></button><button className="text-button" onClick={() => setActive('contact')}>Let’s connect <ArrowUpRightIcon /></button></div><div className="hero-index"><span>01</span><i /> <span>PERSONAL PORTFOLIO</span></div></div>
        <div className="hero-visual"><NeuralScene /><div className="orbit-label orbit-label-top">AI / ML</div><div className="orbit-label orbit-label-bottom">COMPUTER VISION</div></div>
        <div className="hero-glow" />
      </section>
      <section className="stat-grid">
        <div className="stat-card"><div className="stat-icon purple"><Rocket size={17} /></div><div className="stat-value">02</div><div className="stat-label">Selected projects</div><div className="stat-foot">AI & computer vision</div></div>
        <div className="stat-card"><div className="stat-icon mint"><BriefcaseBusiness size={17} /></div><div className="stat-value">02</div><div className="stat-label">Freelance roles</div><div className="stat-foot">Development & automation</div></div>
        <div className="stat-card"><div className="stat-icon amber"><Award size={17} /></div><div className="stat-value">2<sup>nd</sup></div><div className="stat-label">Koushalam 2025</div><div className="stat-foot">Accident Alert X project</div></div>
        <div className="stat-card"><div className="stat-icon blue"><Cpu size={17} /></div><div className="stat-value">AI<span className="stat-plus">+</span></div><div className="stat-label">Technical focus</div><div className="stat-foot">ML · CV · Automation</div></div>
      </section>
      <div className="overview-lower">
        <section className="panel featured-panel"><SectionHeading eyebrow="SELECTED WORK" title="Featured projects" action={<button className="subtle-link" onClick={() => setActive('projects')}>View all <ArrowRight size={14} /></button>} /><div className="mini-projects">{projects.map((project) => <button key={project.id} className="mini-project" onClick={() => onOpenProject(project)}><span className={`mini-project-symbol ${project.tone}`}><project.icon size={17} /></span><span className="mini-project-info"><strong>{project.title}</strong><small>{project.type}</small></span><ArrowRight size={16} className="mini-arrow" /></button>)}</div></section>
        <section className="panel focus-panel"><SectionHeading eyebrow="WHAT I WORK WITH" title="Technical focus" /><div className="focus-list"><div><span className="focus-icon"><Activity size={16} /></span><span><strong>Object detection</strong><small>YOLOv8 · OpenCV</small></span></div><div><span className="focus-icon"><BrainCircuit size={16} /></span><span><strong>Model experimentation</strong><small>Roboflow · Colab · TFLite</small></span></div><div><span className="focus-icon"><Zap size={16} /></span><span><strong>Backend fundamentals</strong><small>Java · Spring Boot · MongoDB</small></span></div></div></section>
      </div>
    </motion.div>
  )
}

function ProjectsPage({ onOpenProject }) {
  return <motion.div className="page-content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><SectionHeading eyebrow="MY WORK / 02 ITEMS" title="Projects & experiments" subtitle="A selection of projects focused on detection, automation, and practical problem-solving." /><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />)}</div><div className="note-strip"><Sparkles size={17} /><span>My goal is to build reliable AI tools that solve real-world safety and automation problems.</span></div></motion.div>
}

function SkillsPage() {
  return <motion.div className="page-content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><SectionHeading eyebrow="TOOLKIT / TECHNICAL STACK" title="Skills & technologies" subtitle="Tools and technologies listed in my current learning and project portfolio." /><div className="skills-grid">{skillGroups.map((group, index) => { const Icon = group.icon; return <section className="panel skill-panel" key={group.title}><div className="skill-heading"><span className={`skill-icon skill-${index}`}><Icon size={19} /></span><div><span className="eyebrow">0{index + 1} / TOOLSET</span><h3>{group.title}</h3></div></div><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></section> })}</div><section className="panel strengths-panel"><SectionHeading eyebrow="WORKING STYLE" title="Professional strengths" /><div className="strengths-list">{['Practical prototyping', 'Problem-solving', 'Automation workflows', 'Learning new technologies', 'Focus on real-world impact'].map((item) => <span key={item}><Check size={14} />{item}</span>)}</div></section></motion.div>
}

function ExperiencePage() {
  return <motion.div className="page-content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><SectionHeading eyebrow="CAREER / EXPERIENCE" title="Experience timeline" subtitle="Freelance and project-based development experience." /><div className="timeline">{experiences.map((item, index) => <div className="timeline-item" key={item.company}><div className="timeline-marker"><BriefcaseBusiness size={16} /></div><div className="panel timeline-card"><div className="timeline-top"><span className="eyebrow">EXPERIENCE / 0{index + 1}</span><span className="duration-pill">{item.duration}</span></div><h3>{item.company}</h3><div className="timeline-role">{item.role}</div><p>{item.note}</p></div></div>)}</div><div className="experience-caption"><span className="online-dot" /> Hands-on development, automation, and data-processing experience.</div></motion.div>
}

function EducationPage() {
  return <motion.div className="page-content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><SectionHeading eyebrow="ACADEMIC JOURNEY" title="Education" subtitle="My academic background in computer science and foundational studies." /><div className="education-list">{education.map((item, index) => <div className={`panel education-card ${item.current ? 'current' : ''}`} key={item.course}><div className="education-symbol"><GraduationCap size={20} /></div><div className="education-main"><div className="eyebrow">EDUCATION / 0{index + 1}</div><h3>{item.course}</h3><p>{item.place}</p><span className="education-result">{item.result}</span></div>{item.current && <span className="current-pill">CURRENT</span>}</div>)}</div><div className="panel award-panel"><div className="award-icon"><Award size={22} /></div><div><span className="eyebrow">RECOGNITION</span><h3>2nd Place — Koushalam 2025</h3><p>Recognised for the Accident Alert X project.</p></div><span className="award-year">2025</span></div></motion.div>
}

function ContactPage() {
  const [copied, setCopied] = useState(false)
  const email = 'rakshith.raksh64@gmail.com'
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 1800) }
    catch { window.location.href = `mailto:${email}` }
  }
  return <motion.div className="page-content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><SectionHeading eyebrow="GET IN TOUCH" title="Let’s build something useful." subtitle="Have a project idea, collaboration, or opportunity? Reach out through any of these channels." /><div className="contact-layout"><div className="contact-main"><div className="contact-orb"><div className="contact-orb-inner"><Mail size={32} /></div></div><h3>Open to conversations<br /><em>and new ideas.</em></h3><p>Interested in AI-powered software, computer vision, and practical automation projects.</p><button className="primary-button" onClick={() => window.location.href = `mailto:${email}`}>Send an email <ArrowRight size={16} /></button></div><div className="contact-details panel"><div className="eyebrow">CONTACT DETAILS</div><button className="contact-row" onClick={copyEmail}><span className="contact-icon"><Mail size={17} /></span><span><small>EMAIL ADDRESS</small><strong>{email}</strong></span><span className="contact-action">{copied ? <Check size={16} /> : <span className="copy-label">Copy</span>}</span></button><a className="contact-row" href="tel:+918123730885"><span className="contact-icon"><Phone size={17} /></span><span><small>PHONE</small><strong>+91 8123730885</strong></span><ExternalLink size={15} className="contact-action" /></a><a className="contact-row" href="https://github.com/rakshithclass-oss" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={17} /></span><span><small>GITHUB</small><strong>rakshithclass-oss</strong></span><ExternalLink size={15} className="contact-action" /></a><div className="contact-row static"><span className="contact-icon"><MapPin size={17} /></span><span><small>LOCATION</small><strong>Kukudel, Belvai</strong></span></div></div></div></motion.div>
}

function ProjectModal({ project, onClose }) {
  if (!project) return null
  const Icon = project.icon
  return <AnimatePresence><motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}><motion.div className="project-modal panel" initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose} aria-label="Close project details"><X size={18} /></button><div className={`modal-project-icon ${project.tone}`}><Icon size={24} /></div><span className="eyebrow">PROJECT / {project.number}</span><h2>{project.title}</h2><p className="modal-intro">{project.description}</p><div className="modal-divider" /><div className="eyebrow">PROJECT DETAILS</div><ul className="detail-list">{project.details.map((detail) => <li key={detail}><span><Check size={13} /></span>{detail}</li>)}</ul><div className="eyebrow stack-label">TECHNOLOGIES</div><div className="project-tags modal-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></motion.div></motion.div></AnimatePresence>
}

export default function App() {
  const [active, setActive] = useState('overview')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const content = useMemo(() => {
    switch (active) {
      case 'projects': return <ProjectsPage onOpenProject={setSelectedProject} />
      case 'skills': return <SkillsPage />
      case 'experience': return <ExperiencePage />
      case 'education': return <EducationPage />
      case 'contact': return <ContactPage />
      default: return <Overview setActive={setActive} onOpenProject={setSelectedProject} />
    }
  }, [active])

  return <div className="app-shell"><div className="ambient ambient-one" /><div className="ambient ambient-two" /><Sidebar active={active} onChange={setActive} open={menuOpen} setOpen={setMenuOpen} /><main className="main-area"><Topbar active={active} setOpen={setMenuOpen} />{content}<footer className="footer"><span>© 2026 RAKSHITH</span><span>DESIGNED WITH <b>✳</b> & BUILT WITH REACT</span><span>ASPIRING ML ENGINEER</span></footer></main><ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /></div>
}
