import React, { useEffect, useRef } from 'react';
import { Briefcase, BookOpen, Award, Mail, Phone, MapPin, Code, Layers } from 'lucide-react';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('scroll-hidden');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('scroll-visible'), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
};

const Portfolio = () => {
  const cvData = {
    name: "Rai Ammad Khan",
    title: "Full Stack Developer | 11+ Years Experience",
    location: "Lahore, Pakistan",
    contact: {
      phone: "+92 323 5354125",
      email: "raiammadkhan@gmail.com",
      linkedin: "https://linkedin.com/in/rai-ammad-khan"
    },
    summary: "Dedicated and results-driven Full Stack Developer with over 11 years of experience in building scalable, high-performance web applications. Skilled in both frontend and backend technologies with a strong focus on clean architecture, performance optimization, and team leadership.",
    skills: ["React JS", "Node JS", "Next JS", "Python/Django", "FastAPI", "GraphQL", "AWS"],
    experience: [
      {
        company: "NorthBay Solutions, Lahore",
        role: "Associate Architect",
        period: "March 2021 - Present",
        projects: [
          {
            name: "Intelligize - Protege (AI Chatbot)",
            details: [
              "Built an AI chatbot to enhance user interaction and automate responses.",
              "Led and mentored a frontend team, ensuring clean, maintainable code. Conducted code reviews and optimized performance for scalability.",
              "Collaborated with backend and product teams on AI integrations.",
              "Played a key role in designing system architecture, ensuring scalability, performance, and seamless AI integration."
            ]
          },
          {
            name: "Ejada - Alrajhi Capital App (Fintech)",
            details: [
              "Mentored junior engineers, improved code quality through reviews and design guidance.",
              "Developed reusable, high-performance React dashboards for fintech use cases.",
              "Integrated secure payment and financial APIs ensuring reliability and compliance.",
              "Partnered with backend and product teams to deliver scalable frontend solutions."
            ]
          },
          {
            name: "Spark Neuro Patient Portal App",
            details: [
              "Led frontend development from scratch using React.js and Ant Design.",
              "Managed and mentored a team of frontend engineers.",
              "Collaborated with backend teams using Flask-based APIs."
            ]
          },
          {
            name: "Lobby CRE (Commercial Real Estate Analytics Platform)",
            details: [
              "Worked on the 'Balance Sheet' and 'Documents' modules.",
              "Responsibilities included database schema design, API development, writing unit tests, and reviewing pull requests.",
              "Stack: Django, Django REST Framework, RabbitMQ, PostgreSQL."
            ]
          }
        ]
      },
      {
        company: "Fiverivers Technologies, Lahore",
        role: "Senior Software Engineer",
        period: "Nov 2020 - May 2021",
        projects: [
          {
            name: "DeepArmor - Cybersecurity App",
            details: [
              "Contributed to bug fixes and feature enhancements on a mature Django-based platform."
            ]
          }
        ]
      },
      {
        company: "Intech Process Automation, Lahore",
        role: "Software Engineer",
        period: "Aug 2019 - Nov 2020",
        projects: [
          {
            name: "CMS (Conditional Monitoring System)",
            details: [
              "Built React-based UI components to visualize sensor data via charts.",
              "Wrote unit tests and participated in code reviews.",
              "Stack: React.js, GraphQL, Node.js, PostgreSQL."
            ]
          }
        ]
      },
      {
        company: "Crewlogix Technologies, Lahore",
        role: "Python Developer",
        period: "Mar 2019 - Aug 2019",
        projects: [
          {
            name: "StatMetrix - Football Analytics Platform",
            details: [
              "Developed new features, handled database design, and implemented REST APIs."
            ]
          },
          {
            name: "Vanguard - School Attendance Management System",
            details: [
              "Designed and implemented APIs, role-based access, and test cases.",
              "Stack: Python, Django REST Framework, PostgreSQL/MySQL."
            ]
          }
        ]
      },
      {
        company: "NGNware, Lahore",
        role: "Software Engineer",
        period: "Nov 2013 - Feb 2018",
        projects: [
          {
            name: "HEAT Migration Tool for AT&T",
            details: [
              "Built a Python-based migration tool to convert Contrail 2.x HEAT templates to 3.x.",
              "Integrated OpenStack and Contrail APIs."
            ]
          },
          {
            name: "NFVgrid Charm Deployment",
            details: [
              "Developed a JUJU Charm to enable 1-click deployment of NFVgrid."
            ]
          },
          {
            name: "Cloud Manager",
            details: [
              "Created a web-based GUI for VM lifecycle management and monitoring.",
              "Stack: Python, Django, JavaScript, Linux, Xen, MySQL."
            ]
          },
          {
            name: "KickIn (Social Platform for Football Community)",
            details: [
              "Designed a blogging website with features like club tagging, reactions, and advanced comment filtering."
            ]
          }
        ]
      }
    ],
    education: {
      school: "LUMS - Lahore University of Management Sciences",
      degree: "BS in Computer Science & Electrical Engineering",
      period: "Aug 2009 - Jun 2013"
    },
    certifications: [
      { name: "AWS Certified Cloud Practitioner", url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/e8c0be0580964635ab9cfd99971b5634" }
    ],
    interests: ["Chess", "Premier League", "Cricket"],
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQHvZcchNRBCqA/profile-displayphoto-scale_200_200/B4DZyG6fmFIwAY-/0/1771790008657?e=1780531200&v=beta&t=tl-wMRxaYFnJS6_GM0VXW_IHV6C_xDzv9Ort5aJKZF8"
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header / Hero Section */}
      <header className="bg-slate-900 text-white py-16 px-6 shadow-md">
        <div className="max-w-5xl mx-auto text-center md:text-left md:flex justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 animate-fade-in-down">
            <img
              src={cvData.photo}
              alt={cvData.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg flex-shrink-0"
            />
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">{cvData.name}</h1>
              <p className="text-xl text-blue-400 mt-2 font-medium animate-fade-in-down delay-200">{cvData.title}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm text-slate-300 animate-fade-in-down delay-300">
                <span className="flex items-center gap-1"><MapPin size={16} /> {cvData.location}</span>
                <span className="flex items-center gap-1"><Phone size={16} /> {cvData.contact.phone}</span>
                <span className="flex items-center gap-1"><Mail size={16} /> {cvData.contact.email}</span>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0 animate-fade-in-down delay-400">
            <a 
              href={cvData.contact.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> Connect on LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Summary & Skills */}
        <div className="space-y-8">
          {/* Summary */}
          <AnimatedSection delay={0}>
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold flex items-center gap-2 border-b pb-2 mb-4 text-slate-900">
              <Layers className="text-blue-600" size={20} /> Professional Summary
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">{cvData.summary}</p>
          </section>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection delay={100}>
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold flex items-center gap-2 border-b pb-2 mb-4 text-slate-900">
              <Code className="text-blue-600" size={20} /> Core Expertise
            </h2>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.map((skill, index) => (
                <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </section>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={200}>
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold flex items-center gap-2 border-b pb-2 mb-4 text-slate-900">
              <BookOpen className="text-blue-600" size={20} /> Education
            </h2>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">{cvData.education.school}</h3>
              <p className="text-xs text-blue-600 font-medium mt-0.5">{cvData.education.degree}</p>
              <p className="text-xs text-slate-400 mt-1">{cvData.education.period}</p>
            </div>
          </section>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={300}>
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold flex items-center gap-2 border-b pb-2 mb-4 text-slate-900">
              <Award className="text-blue-600" size={20} /> Certifications
            </h2>
            <ul className="space-y-2">
              {cvData.certifications.map((cert, index) => (
                <li key={index} className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  <a href={cert.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{cert.name}</a>
                </li>
              ))}
            </ul>
          </section>
          </AnimatedSection>
        </div>

        {/* Right Column: Experience */}
        <div className="md:col-span-2 space-y-8">
          <AnimatedSection delay={0}>
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-3 mb-6 text-slate-900">
              <Briefcase className="text-blue-600" size={22} /> Professional Experience
            </h2>

            <div className="space-y-8 border-l-2 border-slate-100 pl-4 ml-2">
              {cvData.experience.map((exp, expIdx) => (
                <AnimatedSection key={expIdx} delay={expIdx * 100}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-2">
                    <h3 className="font-bold text-lg text-slate-900">{exp.company}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-500 mb-4">{exp.role}</p>

                  <div className="space-y-4">
                    {exp.projects.map((project, projIdx) => (
                      <div key={projIdx} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <h4 className="font-bold text-sm text-slate-800 mb-2">{project.name}</h4>
                        <ul className="list-disc list-outside space-y-1.5 text-xs text-slate-600 tracking-wide ml-4">
                          {project.details.map((detail, detIdx) => (
                            <li key={detIdx} className="leading-relaxed text-left">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
          </AnimatedSection>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs mt-12 border-t border-slate-800">
        <p>© {new Date().getFullYear()} {cvData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;