import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="hero" id="top">
        <nav className="navbar">
          <div className="container nav-content">
            <a href="#top" className="brand"  rel="noopener noreferrer">
              Xavier Caldwell
            </a>

            <div className="nav-links">
              <a href="#top" >Home</a>
              <a href="#about">About Me</a>
              <a href="#skills">Languages & Skills</a>
              <a href="#projects">My Work</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>

        <div className="container hero-content">
          <div className="hero-text">
            <h1>Software Developer</h1>

            <p>
              Developer focused on building practical software, learning new
              technologies, and solving real-world problems.
            </p>

            <a href="#contact" className="text-link">
              Contact Me
            </a>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/xavier-caldwell/"
                target="_blank"
                 rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://github.com/xaviercaldwell" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="/xaviercaldwell2026/xavierResume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <a href="mailto:xvrianreed@gmail.com" target="_blank" rel="noopener noreferrer">
                Email
              </a>
            </div>
          </div>

          <div className="hero-image">
            <Image
              src="/xaviercaldwell2026/headshot.png"
              alt="Myself, Xavier Caldwell"
              width={500}
              height={500}
            />
          </div>
        </div>
      </header>

      <section className="section section-accent" id="about">
        <div className="container two-column">
          <div>
            <span className="eyebrow">About</span>
            <h2>About Me</h2>

            <p>
              Hi, my name is Xavier. I am an entry-level software developer with
              professional experience building internal applications, web
              applications, and cloud-based solutions.
            </p>

            <p>
              I have a strong passion for service and building technology that
              solves practical problems for real people. That interest in
              service extends beyond software as well; I am an Air Force veteran
              and currently serve in the Army Reserve.
            </p>

            <p>
              I enjoy working across the stack, from designing interfaces to
              building APIs, databases, authentication systems, and deployment
              infrastructure.
            </p>
          </div>

          <div className="about-image">
            <Image
              src="/xaviercaldwell2026/aamRecipient.jpeg"
              alt="Xavier Caldwell receiving an Army Achievement Medal"
              width={1356}
              height={2048}
            />
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <span className="eyebrow">Skills</span>
          <h2>Languages and Tools</h2>

          <div className="skills-grid">
            <div className="skill-column">
              <h3>Languages</h3>

              <ul>
                <li>C#</li>
                <li>Python</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>

            <div className="skill-column">
              <h3>Frameworks</h3>

              <ul>
                <li>Next.js</li>
                <li>React</li>
                <li>ASP.NET Core</li>
                <li>Entity Framework Core</li>
              </ul>
            </div>

            <div className="skill-column">
              <h3>Tools</h3>

              <ul>
                <li>Azure</li>
                <li>Azure API Management</li>
                <li>Microsoft Entra ID</li>
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>SQL Server</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <span className="eyebrow">Portfolio</span>
          <h2>My Projects</h2>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>AssetTrac screenshot</span>
                </div>
              </div>

              <div className="project-content">
                <span className="project-number">01</span>

                <h3>AssetTrac</h3>

                <p>
                  Asset management application built to track organizational
                  assets and users through a modern web interface.
                </p>

                <p className="technologies">
                  Next.js · TypeScript · ASP.NET Core · Azure SQL
                </p>

                <a
                  href="https://github.com/xaviercaldwell/AssetTrac"
                  target="_blank"
                  className="text-link" rel="noopener noreferrer"
                >
                  View Repository
                </a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Project screenshot</span>
                </div>
              </div>

              <div className="project-content">
                <span className="project-number">02</span>

                <h3>Project Two</h3>

                <p>
                  Brief description of another project and what problem it was
                  created to solve.
                </p>

                <p className="technologies">React · C# · Azure · SQL</p>

                <a href="#" className="text-link">
                  View Project
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-content">
          <div>
            <span className="eyebrow">Work</span>

            <h2>
              Interested In
              <br />
              My Work?
            </h2>
          </div>

          <a href="#contact" className="button">
            Get In Touch
          </a>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s talk</h2>

          <div className="contact-grid">
            <div>
              <span>Email</span>
              <a href="mailto:xvrianreed@gmail.com">xvrianreed@gmail.com</a>
            </div>

            {/*Removed the phone number section i put at first as per I dont trust the fucking internet
            but who knows maybe my heart will change
             */}

            <div>
              <span>Location</span>
              <p>Boise, Idaho</p>
            </div>

            <div>
              <span>Profiles</span>

              <div className="contact-links">
                <a
                  href="https://www.linkedin.com/in/xavier-caldwell/"
                  target="_blank" rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a href="https://github.com/xaviercaldwell" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <p>&copy; 2026 Xavier Caldwell</p>
          <p>Made with Next.js</p>

          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
