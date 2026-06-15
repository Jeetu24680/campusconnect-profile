export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CampusConnect</div>

      <ul className="nav-links">
        <li>Search</li>
        <li className="active">Mentors</li>
        <li>Teams</li>
        <li>Marketplace</li>
      </ul>

      <div className="nav-buttons">
        <button className="signin-btn">
          Sign In
        </button>

        <button className="start-btn">
          Get Started
        </button>
      </div>
    </nav>
  );
}