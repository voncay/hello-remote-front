import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      {/* ========== HEADER ========== */}
      <header
        id="header"
        className="navbar navbar-expand-lg navbar-end navbar-light"
      >
        <div className="container">
          <nav className="js-mega-menu navbar-nav-wrap">
            {/* Default Logo */}
            <Link to={'/'}
              className="navbar-brand"
              href="../demo-jobs/index.html"
              aria-label="Front"
            >
              <img
                style={{ width: '50px', height: 'auto' }}
                // className="navbar-brand-logo"
                src="../assets/svg/logos/android-chrome-192x192.png"
                alt="Logo"
              />
            </Link>
            <div>
              <span><b>H</b>ello <b>R</b>emote</span>
            </div>
            {/* End Default Logo */}
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="btn btn-primary btn-transition"
                    href="../demo-jobs/post-job.html"
                  >
                    Post a job
                  </a>
                </li>
              </ul>
            </div>
            {/* End Collapse */}
          </nav>
        </div>
      </header>
      {/* ========== END HEADER ========== */}
    </>
  );
};

export default NavBar
