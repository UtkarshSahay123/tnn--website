const highlights = [
  "Research publications",
  "Technical projects",
  "High-impact roles",
  "University events",
];

const thanks = [
  "Mohit Sir (Faculty Coordinator)",
  "Rahul Nayak (Ex-President)",
  "Pisapati Tejoram (Ex-President)",
];

function Page() {
  return (
    <main className="about-page-shell">
      <section className="about-hero">
        <div className="about-hero-field" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="about-kicker">Team Next Nexus</div>
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          A community of builders, researchers, and problem-solvers driven by
          curiosity, execution, and the habit of turning ideas into working
          products.
        </p>
      </section>

      <section className="about-story-grid">
        <article className="about-story-card">
          <div className="about-section-label">Our Origin Story</div>
          <p>
            Team Next Nexus is a community of builders, researchers, and
            problem-solvers driven by curiosity and execution. Over the years,
            our members have contributed to research publications, built
            impactful technical projects, and gone on to secure roles at leading
            high-paying companies. As a club, we continue to design, develop,
            and ship real-world solutions, and active participation in
            university level events. Our goal is to create a space where
            students learn by building, collaborate across domains, and turn
            ideas into working products.
          </p>
        </article>

        <aside className="about-signal-card" aria-label="Club highlights">
          {highlights.map((highlight, index) => (
            <div
              className="about-signal-row"
              key={highlight}
              style={{ animationDelay: `${index * 110 + 250}ms` }}
            >
              <span className="about-signal-dot" />
              <span>{highlight}</span>
            </div>
          ))}
        </aside>
      </section>

      <section className="about-thanks-section">
        <div>
          <div className="about-section-label">Special Thanks To</div>
          <p className="about-thanks-copy">
            The people who helped shape the club culture and kept the momentum
            alive.
          </p>
        </div>

        <div className="about-thanks-grid">
          {thanks.map((person, index) => (
            <div
              className="about-thanks-card"
              key={person}
              style={{ animationDelay: `${index * 120 + 400}ms` }}
            >
              {person}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Page;
