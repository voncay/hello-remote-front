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
              aria-label="Hello Remote"
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
                  <Link className="nav-link " to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-primary btn-transition"
                    to={'/'}
                  >
                    Post a job
                  </Link>
                </li>
              </ul>
            </div>
            {/* End Collapse */}
          </nav>
        </div>
      </header>
      {/* ========== END HEADER ========== */}
    </>
  )
}

export default NavBar
