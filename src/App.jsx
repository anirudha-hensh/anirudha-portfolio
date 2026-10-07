import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit,
  CheckCircle2, ChevronRight, Code2, Database, Download, ExternalLink, Github,
  GraduationCap, Layers3, Linkedin, Mail, Menu, MessageCircle, Moon, Sparkles,
  Sun, Terminal, X, Zap, Globe2
} from 'lucide-react'

const PROFILE = {
  name: 'Anirudha Hensh',
  title: 'Software Developer',
  subtitle: 'Java · MySQL · AI / NLP · Web',
  email: 'anirudhahensh2004@gmail.com',
  github: 'https://github.com/anirudha-hensh',
  linkedin: 'https://www.linkedin.com/in/anirudhahensh/',
  location: 'Hooghly, West Bengal, India',
  education: 'B.Tech — Computer Science & Engineering',
  university: 'University of Engineering & Management, Kolkata',
  graduation: '2026',
  cgpa: '7.94'
}

const skills = [
  { title:'Java', kicker:'CORE', icon:Code2, text:'Core Java, OOP, JDBC, exception handling and collections fundamentals.' },
  { title:'MySQL', kicker:'DATABASE', icon:Database, text:'SQL, CRUD operations, joins and relational database concepts.' },
  { title:'Web', kicker:'FRONTEND', icon:Globe2, text:'HTML, CSS and JavaScript for responsive browser experiences.' },
  { title:'AI / NLP', kicker:'INTELLIGENT SYSTEMS', icon:BrainCircuit, text:'Python, NLP and AI/ML fundamentals through academic work.' },
  { title:'Git & GitHub', kicker:'TOOLING', icon:Layers3, text:'Version control, repository workflows and project organization.' },
  { title:'DSA', kicker:'PROBLEM SOLVING', icon:Terminal, text:'Arrays, loops, searching, sorting and programming fundamentals.' },
]

const projects = [
  {
    title:'AI-Based ATS Resume Analysis System',
    cat:'AI / NLP',
    icon:BrainCircuit,
    gradient:'p-violet',
    description:'An AI-assisted system that extracts relevant skills from resumes and compares them with job descriptions to identify meaningful matches.',
    stack:['Python','NLP','AI','Gemini API'],
    details: `
The AI-Based ATS Resume Analysis System is an academic group project designed to analyze resumes against job descriptions and provide AI-assisted insights into candidate-job compatibility. The project focuses on processing resume and job-description content to identify relevant skills and compare candidate capabilities with the requirements of a particular role.

The system processes the information contained in resumes and job descriptions to identify relevant skills and generate structured analysis. NLP concepts are used to work with the textual content, while AI-assisted processing helps analyze and compare the extracted information.

As part of the project, prompt design was used to guide the AI in extracting relevant candidate skills and comparing them with the skills and requirements mentioned in job descriptions. The objective is to help understand how closely a candidate's profile aligns with a particular job description.

The project also involved testing different inputs, evaluating generated outputs, analyzing requirements, and documenting the system as part of a four-member academic team.

Key Features:
• Resume content analysis
• Job-description analysis
• Relevant skill identification
• Resume-to-job requirement comparison
• AI-assisted candidate/job analysis
• Prompt-based skill extraction and comparison
• Structured analysis of resume and job-description information
• Output testing and evaluation

My Contribution:
• Contributed to resume and job-description processing workflows
• Worked on prompt design for AI-assisted skill extraction and comparison
• Contributed to analysis of candidate skills against job requirements
• Participated in application testing and output evaluation
• Contributed to requirement analysis and project documentation

Technology Stack:
Python, NLP, AI, Google Gemini API.
`,
    github:'https://github.com/anirudha-hensh/ATS-Resume-Analyzer'
  },
  {
  title: 'Student Management System',
  cat: 'JAVA / DATABASE',
  icon: Database,
  gradient: 'p-cyan',

  description: 'A role-based web application with separate Admin and Student workflows, featuring student registration, approval-based onboarding, profile management, authentication, and centralized student administration.',

  stack: [
    'Java',
    'Spring Boot',
    'MySQL',
    'JDBC',
    'REST APIs',
    'JWT',
    'HTML',
    'CSS',
    'JavaScript'
  ],

  details: `
The Student Management System is a role-based web application designed to provide separate and controlled workflows for Students and Administrators. The system is built to simplify student registration, verification, information management, and administrative control through dedicated user panels.

Students can create their own accounts and securely log in using their individual credentials. After registration, students can provide and manage their personal information and submit a registration request for administrative verification. A student does not immediately become an approved user; the submitted request must first be reviewed by an administrator.

The Admin panel provides centralized control over the student management process. Administrators can view incoming student registration requests, review the submitted information, and decide whether to approve or reject each request. Once approved, the student can access the appropriate features of the system.

Administrators can also manage existing student information, including adding new student records, updating student details, and removing student records when required. The system also supports the creation of additional administrator accounts.

Separate authentication and access control are implemented for Students and Administrators so that each user type can access only the features relevant to their role. Students can manage their own account credentials, while administrators have access to administrative functions and student management features.

The application uses MySQL for persistent storage and JDBC for database connectivity, while Spring Boot and REST APIs support the web application architecture. JWT is used as part of the authentication and authorization mechanism.

Key Features:
• Separate Student and Admin panels
• Student account registration and login
• Student information management
• Registration request and approval workflow
• Admin approval/rejection of student requests
• Admin dashboard for centralized management
• Add, update and remove student information
• Additional administrator account creation
• Separate authentication and access control
• User profile and password management
• MySQL database integration
• REST API-based application architecture
• JWT-based authentication

Technology Stack:
Java, Spring Boot, MySQL, JDBC, REST APIs, JWT, HTML, CSS and JavaScript.
`,

  github: 'https://github.com/anirudha-hensh/student-management-system'
},
  // {
  //   title:'Attendance Management System',
  //   cat:'JAVA SWING',
  //   icon:Terminal,
  //   gradient:'p-pink',
  //   description:'Desktop application for maintaining attendance records through a Java Swing interface and MySQL database.',
  //   stack:['Java Swing','JDBC','MySQL'],
  //   details:'Combines a graphical desktop UI with relational data persistence.'
  // },
  {
    title:'Tic-Tac-Toe',
    cat:'WEB',
    icon:Zap,
    gradient:'p-orange',
    description:'Interactive browser game with JavaScript game logic, user interaction and responsive presentation.',
    stack:['HTML','CSS','JavaScript'],
    details:'A compact frontend project demonstrating DOM interaction and client-side game logic.'
  }
  // {
  //   title:'Blog Website',
  //   cat:'WEB',
  //   icon:Globe2,
  //   gradient:'p-blue',
  //   description:'Blog-style web project with a clean interface, navigation and JavaScript interactions.',
  //   stack:['HTML','CSS','JavaScript'],
  //   details:'Focused on building a straightforward, usable browser experience.'
  // },
  // {
  //   title:'Brain Tumor Detection',
  //   cat:'COMPUTER VISION',
  //   icon:BrainCircuit,
  //   gradient:'p-green',
  //   description:'Academic computer-vision project exploring MRI image processing and tumor detection using OpenCV.',
  //   stack:['Python','OpenCV','Computer Vision'],
  //   details:'Explores image processing techniques in an academic computer-vision context.'
  // }
]

const aiQuickPrompts = [
  'Summarize Anirudha’s strongest technical skills.',
  'Tell me about the ATS resume analysis project.',
  'What kind of software roles is Anirudha targeting?',
  'Give me a concise recruiter-style introduction.'
]

const localAnswers = {
  skills: `Anirudha’s core technical areas are Java, MySQL/JDBC, HTML/CSS/JavaScript, Python/NLP, Git/GitHub and DSA fundamentals. His project work is especially centered on Java + databases and an AI/NLP-based ATS system.`,
  ats: `The AI-Based ATS Resume Analysis System is an academic group project. It uses Python and NLP to extract relevant resume skills and compare them against job descriptions. The project also used the Gemini API for AI-assisted analysis.`,
  roles: `He is targeting entry-level software development and system engineering opportunities, with a strong preference for roles where Java, databases, problem solving and practical project work are useful.`,
  intro: `Anirudha Hensh is a 2026 B.Tech Computer Science & Engineering graduate from the University of Engineering & Management, Kolkata. He has hands-on project experience across Java, MySQL/JDBC, web development and AI/NLP, and is looking for an entry-level software or system engineering opportunity.`
}

function classifyQuestion(q) {
  const s = q.toLowerCase()
  if (s.includes('ats') || s.includes('resume analysis')) return 'ats'
  if (s.includes('skill') || s.includes('technology') || s.includes('tech stack')) return 'skills'
  if (s.includes('role') || s.includes('job') || s.includes('target')) return 'roles'
  if (s.includes('intro') || s.includes('about anirudha') || s.includes('about him')) return 'intro'
  return null
}

function App() {
  const [theme, setTheme] = useState('dark')
  const [menu, setMenu] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [aiOpen, setAiOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role:'assistant', text:'Hi! I’m Anirudha’s portfolio AI. Ask me about his skills, projects, education or the kind of roles he is targeting.' }
  ])
  const [question, setQuestion] = useState('')
  const [aiBusy, setAiBusy] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme')
    if (stored === 'light' || stored === 'dark') setTheme(stored)
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const filters = ['All','Java / DB','Web','AI / NLP']
  const visibleProjects = useMemo(() => projects.filter(p => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Java / DB') return ['JAVA / DATABASE','JAVA SWING'].includes(p.cat)
    if (activeFilter === 'Web') return p.cat === 'WEB'
    return p.cat === 'AI / NLP' || p.cat === 'COMPUTER VISION'
  }), [activeFilter])

  const go = id => {
    setMenu(false)
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  }

  async function askAI(text) {
    const clean = text.trim()
    if (!clean || aiBusy) return
    setMessages(prev => [...prev, {role:'user', text:clean}])
    setQuestion('')
    setAiBusy(true)
    try {
      const response = await fetch('/api/chat', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ message: clean })
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data?.error || 'AI request failed')
      setMessages(prev => [...prev, {role:'assistant', text:data.reply, mode:data.mode}])
    } catch {
      const key = classifyQuestion(clean)
      const fallback = key ? localAnswers[key] :
        `I’m in demo mode right now. I can answer questions about Anirudha’s Java, MySQL/JDBC, web, AI/NLP, DSA and project experience. Try one of the suggested questions above.`
      setMessages(prev => [...prev, {role:'assistant', text:fallback, mode:'demo'}])
    } finally {
      setAiBusy(false)
    }
  }

  return (
    <div className="site">
      <div className="top-progress" style={{transform:`scaleX(${scrollProgress / 100})`}} />
      <div className="blob blob-a" /><div className="blob blob-b" />
      <header className="header">
        <button className="brand" onClick={() => go('home')}>
          <span className="brand-mark">AH</span><span>Anirudha Hensh<span className="dot">.</span></span>
        </button>
        <nav className={menu ? 'links open' : 'links'}>
          {['about','skills','projects','education'].map((id,i)=>
            <button key={id} onClick={() => go(id)}><span>0{i+1}</span>{id}</button>
          )}
        </nav>
        <div className="header-actions">
          <button className="round-btn" onClick={() => setTheme(theme === 'dark' ? 'light':'dark')}>
            {theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}
          </button>
          <button className="contact-mini" onClick={() => go('contact')}>Contact <ArrowUpRight size={15}/></button>
          <button className="round-btn mobile-toggle" onClick={() => setMenu(!menu)}>{menu?<X size={19}/>:<Menu size={19}/>}</button>
        </div>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <motion.div className="status" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}> <span/> OPEN TO ENTRY-LEVEL ROLES</motion.div>
            <motion.p className="eyebrow" {...fadeIn(0.1)}>B.TECH CSE · 2026 GRADUATE</motion.p>
            <motion.h1 {...fadeIn(0.18)}>Designing <em>useful</em><br/><b>software with intent.</b></motion.h1>
            <motion.p className="hero-lead" {...fadeIn(0.26)}>Java developer in the making, with hands-on projects across software development, databases, web technologies and AI/NLP.</motion.p>
            <motion.div className="hero-actions" {...fadeIn(0.34)}>
              <button className="btn primary" onClick={() => go('projects')}>Explore projects <ArrowRight size={17}/></button>
              <a className="btn secondary" href="resume/Anirudha_Hensh_Resume.pdf" download><Download size={16}/> Download CV</a>
            </motion.div>
            <motion.div className="hero-meta" {...fadeIn(0.42)}>
              <span><span className="meta-dot"/> {PROFILE.location}</span>
<a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
<a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
            </motion.div>
          </div>

          <motion.div className="hero-visual" initial={{opacity:0,scale:.88}} animate={{opacity:1,scale:1}} transition={{duration:1.05,delay:.15}}>
            <div className="hero-gridlines"/>
            <div className="sun-glow"/>
            <div className="hero-orb"><span>AH<span className="pink">.</span></span></div>
            <div className="orb-ring ring1"/><div className="orb-ring ring2"/><div className="orb-ring ring3"/>
            <motion.div className="float-card java" animate={{y:[0,-10,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}><span>☕</span><b>Java</b><small>Core + JDBC</small></motion.div>
            <motion.div className="float-card ai" animate={{y:[0,10,0]}} transition={{duration:4.6,repeat:Infinity,ease:'easeInOut'}}><BrainCircuit size={18}/><b>AI / NLP</b><small>Academic project</small></motion.div>
            <motion.div className="float-card db" animate={{y:[0,-7,0]}} transition={{duration:3.7,repeat:Infinity,ease:'easeInOut'}}><Database size={18}/><b>MySQL</b><small>JDBC + SQL</small></motion.div>
            <div className="terminal-card">
              <div className="terminal-head"><span/><span/><span/><label>developer.java</label></div>
              <pre><i>public class</i> <b>Developer</b> {'{'}{'\n'}  String focus = <em>"Software"</em>;{'\n'}  String stack = <em>"Java + AI"</em>;{'\n'}{'\n'}  <strong>build();</strong>{'\n'}  <strong>learn();</strong>{'\n'}{'}'}</pre>
            </div>
          </motion.div>
          <button className="scroll-cue" onClick={() => go('about')}><span/> SCROLL TO EXPLORE <ArrowDown size={14}/></button>
        </section>

        <section className="metric-bar">
          <div><b>2026</b><small>Graduation</small></div>
          <div><b>7.94</b><small>CGPA</small></div>
          <div><b>3</b><small>Projects</small></div>
          <div><b>Java</b><small>Core focus</small></div>
        </section>

        <section className="section container" id="about">
          <SectionHeader no="01" eyebrow="ABOUT ME" title={<>A developer who likes to <em>understand the problem</em> before writing the code.</>} />
          <div className="two-col">
            <motion.p className="pull-quote" {...reveal}>“I enjoy taking a real problem, breaking it into smaller pieces, and turning those pieces into working software.”</motion.p>
            <motion.div className="copy" {...reveal}>
              <p>I’m a B.Tech Computer Science & Engineering graduate from the University of Engineering & Management, Kolkata.</p>
              <p>My project work covers Java desktop applications, database-driven systems, browser applications, computer vision and an AI/NLP-based ATS resume analysis system.</p>
              <div className="mini-points"><span><CheckCircle2 size={15}/> Practical project experience</span><span><CheckCircle2 size={15}/> Strong Java + database foundation</span><span><CheckCircle2 size={15}/> Comfortable learning new tools</span></div>
            </motion.div>
          </div>
        </section>

        <section className="section dark-band" id="skills">
          <div className="container">
            <SectionHeader no="02" eyebrow="TECH STACK" title={<>A focused toolkit for <em>building, connecting and solving.</em></>} />
            <div className="skill-grid">
              {skills.map((s,i) => {
                const Icon=s.icon
                return <motion.article className="skill" key={s.title} {...reveal} transition={{delay:i*.05}}>
                  <div className="skill-top"><span>{s.kicker}</span><b>0{i+1}</b></div><div className="skill-icon"><Icon size={20}/></div>
                  <h3>{s.title}</h3><p>{s.text}</p>
                </motion.article>
              })}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="projects-heading">
            <SectionHeader no="03" eyebrow="SELECTED PROJECTS" title={<>Work that turns <em>ideas into applications.</em></>} />
            <button className="ai-launch" onClick={() => setAiOpen(true)}><Sparkles size={16}/> Ask my AI <ArrowUpRight size={15}/></button>
          </div>
          <div className="filter-row">{filters.map(f => <button key={f} className={activeFilter===f?'active':''} onClick={()=>setActiveFilter(f)}>{f}</button>)}</div>
          <motion.div layout className="project-grid">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((p,i)=>{
                const Icon=p.icon
                return <motion.article layout key={p.title} className={`project ${p.gradient}`} initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} exit={{opacity:0,y:22}} transition={{duration:.4,delay:i*.04}}>
                  <button className="project-visual" onClick={() => setSelectedProject(p)}>
                    <div className="visual-halo"/><Icon size={51}/><span className="project-cat">{p.cat}</span><b>0{i+1}</b><span className="view-mark"><ArrowUpRight size={17}/></span>
                  </button>
                  <div className="project-body">
                    <h3>{p.title}</h3><p>{p.description}</p>
                    <div className="tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div>
                    <button className="text-link" onClick={() => setSelectedProject(p)}>View case note <ChevronRight size={15}/></button>
                  </div>
                </motion.article>
              })}
            </AnimatePresence>
          </motion.div>
        </section>

        <section className="section education" id="education">
          <div className="container">
            <SectionHeader no="04" eyebrow="EDUCATION" title={<>The foundation behind the <em>projects.</em></>} />
            <motion.div className="edu-card" {...reveal}>
              <div className="edu-icon"><GraduationCap size={28}/></div>
              <div><small>2022 — 2026</small><h3>{PROFILE.education}</h3><p>{PROFILE.university}</p></div>
              <div className="edu-score"><b>{PROFILE.cgpa}</b><span>CGPA</span></div>
            </motion.div>
            <div className="edu-row"><div><b>95.2%</b><span>Class XII · WBCHSE</span></div><div><b>81.57%</b><span>Class X · WBBSE</span></div></div>
          </div>
        </section>

        <section className="ai-section" id="ai">
          <div className="ai-backdrop"/>
          <div className="container ai-layout">
            <div>
              <p className="eyebrow">AI-ENABLED PORTFOLIO</p>
              <h2>Don’t just browse my work.<br/><em>Ask about it.</em></h2>
              <p className="ai-copy">A portfolio assistant is built into this site so recruiters can ask plain-language questions about my projects, stack and education.</p>
              <button className="btn primary" onClick={() => setAiOpen(true)}><MessageCircle size={17}/> Open AI assistant</button>
            </div>
            <div className="ai-preview">
              <div className="ai-preview-top"><Sparkles size={17}/><span>ANIRUDHA AI</span><i>Portfolio Copilot</i></div>
              <div className="ai-bubble">What are Anirudha’s strongest technical areas?</div>
              <div className="ai-answer"><span className="ai-dot"/><p>Java, MySQL/JDBC, web technologies and AI/NLP are the main areas represented in his project work.</p></div>
              <div className="ai-chips"><span>Projects</span><span>Skills</span><span>Education</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-radial"/>
          <div className="container contact-inner">
            <p className="eyebrow">05 · CONTACT</p>
            <h2>Let’s connect and talk<br/><em>about the work.</em></h2>
            <p>I’m open to entry-level software, Java and system engineering opportunities.</p>
            <div className="contact-buttons">
              <a className="btn primary" href={`mailto:${PROFILE.email}`}><Mail size={17}/> Email me</a>
              <a className="btn secondary" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a className="btn secondary" href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            </div>
            
          </div>
        </section>
      </main>

      <footer className="footer container"><span>© 2026 Anirudha Hensh</span><span>React · Framer Motion · AI Portfolio Assistant</span><button onClick={() => go('home')}><ArrowUpRight size={14}/> Back to top</button></footer>

      <AnimatePresence>
        {selectedProject && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelectedProject(null)}>
          <motion.div className={`project-modal ${selectedProject.gradient}`} initial={{opacity:0,y:30,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:30,scale:.96}} onClick={e=>e.stopPropagation()}>
            <button className="close" onClick={() => setSelectedProject(null)}><X size={19}/></button>
            <div className="modal-visual"><ModalIcon selectedProject={selectedProject}/><span>{selectedProject.cat}</span></div>
            <p className="eyebrow">PROJECT CASE NOTE</p><h3>{selectedProject.title}</h3>
            <p className="modal-text">{selectedProject.description}</p>
            <p className="modal-detail">{selectedProject.details}</p>
            <div className="tags">{selectedProject.stack.map(t=><span key={t}>{t}</span>)}</div>
<a
  href={selectedProject.github}
  target="_blank"
  rel="noreferrer"
  className="modal-link"
>
  Open GitHub repository <ExternalLink size={15}/>
</a>          </motion.div>
        </motion.div>}
      </AnimatePresence>

      <AnimatePresence>
        {aiOpen && <motion.div className="chat-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setAiOpen(false)}>
          <motion.aside className="chat-panel" initial={{x:40,opacity:0}} animate={{x:0,opacity:1}} exit={{x:40,opacity:0}} onClick={e=>e.stopPropagation()}>
            <div className="chat-header"><div><span className="chat-icon"><Sparkles size={17}/></span><div><b>Anirudha AI</b><small>Portfolio Copilot</small></div></div><button onClick={()=>setAiOpen(false)}><X size={19}/></button></div>
            <div className="chat-note">Ask about projects, Java, MySQL/JDBC, AI/NLP, education or target roles.</div>
            <div className="suggestions">{aiQuickPrompts.map(q=><button key={q} onClick={()=>askAI(q)}>{q}</button>)}</div>
            <div className="messages">{messages.map((m,i)=><div key={i} className={m.role==='user'?'msg user':'msg'}><div className="msg-label">{m.role==='user'?'YOU':'AI'} {m.mode==='demo' && <span>demo mode</span>}</div><p>{m.text}</p></div>)}{aiBusy && <div className="msg"><div className="msg-label">AI</div><p className="typing"><i/><i/><i/></p></div>}</div>
            <form className="chat-form" onSubmit={e=>{e.preventDefault();askAI(question)}}><input value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Ask something about Anirudha…" maxLength={500}/><button disabled={!question.trim() || aiBusy}><ArrowUpRight size={17}/></button></form>
          </motion.aside>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

function SectionHeader({no,eyebrow,title}) {
  return <div className="section-header"><div className="section-no">{no}</div><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div></div>
}
const fadeIn = d => ({initial:{opacity:0,y:22},animate:{opacity:1,y:0},transition:{duration:.7,delay:d}})
const reveal = {initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.15},transition:{duration:.65}}

export default App

function ModalIcon({selectedProject}) {
  const Icon = selectedProject?.icon
  return Icon ? <Icon size={62}/> : null
}
