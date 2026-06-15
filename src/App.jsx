import Navbar from "./components/Navbar";
import users from "./data/users.json";

import alex from "./assets/alex.jpg";
import banner from "./assets/banner.jpg";
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";

import "./App.css";

function App() {
  const user = users[0];

  const projects = [
    {
      title: "Campus Map 3D",
      description:
        "An interactive 3D map of the campus built for incoming freshmen to find classes easily.",
      image: project1,
      tags: ["ThreeJS", "React"],
    },
    {
      title: "StudyBuddy App",
      description:
        "A matching platform that pairs students based on study habits and course load.",
      image: project2,
      tags: ["Flutter", "Firebase"],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="page">

        <div className="banner-wrapper">
          <img
            src={banner}
            alt="banner"
            className="banner"
          />
        </div>

        <div className="profile-section">

          <div className="profile-info">

            <img
              src={alex}
              alt="Alex"
              className="avatar"
            />

            <div>

              <h1 className="name">
                {user.name}
              </h1>

              <p className="subtitle">
                🎓 {user.title} | {user.university}
              </p>

            </div>

          </div>

          <div className="profile-actions">

            <button className="message-btn">
              📩 Direct Message
            </button>

            <button className="mentor-btn">
              🏆 Request Mentorship
            </button>

          </div>

        </div>

        <div className="content">

          <aside className="sidebar">

            <div className="card">

              <h2>Bio</h2>

              <hr />

              <p>{user.bio}</p>

            </div>

            <div className="card">

              <h2>Reputation</h2>

              <hr />

              <div className="stat-row">
                <span>⭐ Mentorships Given</span>
                <strong>
                  {user.reputation.mentorships}
                </strong>
              </div>

              <div className="stat-row">
                <span>👥 Teams Led</span>
                <strong>
                  {user.reputation.teamsLed}
                </strong>
              </div>

              <div className="stat-row">
                <span>🏆 Hackathons Won</span>
                <strong>
                  {user.reputation.hackathons}
                </strong>
              </div>

            </div>

            <div className="card">

              <div className="skills-header">

                <h2>Skills</h2>

                <span>Explore</span>

              </div>

              <div className="skills">

                {user.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </aside>

          <main>

            <h1 className="projects-title">
              Projects & Work
            </h1>

            <div className="projects-grid">

              {projects.map((project) => (
                <div
                  key={project.title}
                  className="project-card"
                >

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-body">

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="tags">

                      {project.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </main>

        </div>

        <footer className="footer">

          <div className="footer-logo">
            CampusConnect
          </div>

          <div className="footer-links">
            About &nbsp; Privacy &nbsp; Terms
            &nbsp; Support &nbsp; Twitter
          </div>

          <div>
            © 2024 CampusConnect
          </div>

        </footer>

      </div>
    </>
  );
}

export default App;