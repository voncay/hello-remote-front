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
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-default">
                <i className="bi-list" />
              </span>
              <span className="navbar-toggler-toggled">
                <i className="bi-x" />
              </span>
            </button>
            {/* End Toggler */}
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link " href="../demo-jobs/index.html">
                    Home
                  </a>
                </li>
                {/* Dropdown */}
                <li className="hs-has-sub-menu nav-item">
                  <a
                    id="listingsDropdown"
                    className="hs-mega-menu-invoker nav-link dropdown-toggle active"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Listings
                  </a>
                  <div
                    className="hs-sub-menu dropdown-menu"
                    aria-labelledby="listingsDropdown"
                    style={{ minWidth: "14rem" }}
                  >
                    <a
                      className="dropdown-item active"
                      href="../demo-jobs/job-list.html"
                    >
                      Listing
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/job-grid.html"
                    >
                      Listing (Grid)
                    </a>
                  </div>
                </li>
                {/* End Dropdown */}
                {/* Dropdown */}
                <li className="hs-has-sub-menu nav-item">
                  <a
                    id="pagesDropdown"
                    className="hs-mega-menu-invoker nav-link dropdown-toggle "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div
                    className="hs-sub-menu dropdown-menu"
                    aria-labelledby="listingsDropdown"
                    style={{ minWidth: "14rem" }}
                  >
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/job-overview.html"
                    >
                      Job Overview
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/apply-for-job.html"
                    >
                      Apply for Job
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/employee.html"
                    >
                      Employee (Applicant)
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/employer.html"
                    >
                      Employer (Company)
                    </a>
                  </div>
                </li>
                {/* End Dropdown */}
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="../demo-jobs/upload-resume.html"
                  >
                    Upload resume
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
