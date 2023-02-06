const Navbar = () => {
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
            <a
              className="navbar-brand"
              href="../demo-jobs/index.html"
              aria-label="Front"
            >
              <img
                className="navbar-brand-logo"
                src="../assets/svg/logos/logo.svg"
                alt="Logo"
              />
            </a>
            {/* End Default Logo */}
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link " href="../demo-jobs/index.html">
                    Home
                  </a>
                </li>
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

export default Navbar
