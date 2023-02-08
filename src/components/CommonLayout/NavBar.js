import { Link } from 'react-router-dom'
import { useContext } from "react"

import { SessionContext } from '../../contexts/SessionContext'

const NavBar = () => {

  const [isLoggedin, setIsLoggedin, sessionUser, setSessionUser] = useContext(SessionContext);
  console.log(isLoggedin, "isLoggedin")
  console.log(sessionUser, "sessionUser")

  const handleLogout = () => {

  }

  return (
    <>
      {/* ========== HEADER ========== */}
      <header
        id="header"
        className="navbar navbar-expand-lg navbar-end navbar-light"
      >
        <div className="container">
          <nav className="navbar-nav-wrap">
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
                { isLoggedin ?
                  <>
                    {/* Dropdown */}
                    <li className="hs-has-sub-menu nav-item">
                      <a
                        id="listingsDropdown"
                        className="hs-mega-menu-invoker nav-link dropdown-toggle active"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {sessionUser.email}
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="listingsDropdown"
                        style={{ minWidth: "14rem" }}
                      >
                        <Link className="dropdown-item active" to={'/'} onClick={ handleLogout }>
                          Logout
                        </Link>
                        <Link className="dropdown-item" to={'/recruiter-profile'}>
                          Profile
                        </Link>
                      </div>
                    </li>
                    {/* End Dropdown */}
                  </>
                  :
                  <>
                    <li className="nav-item">
                      <Link className="nav-link " to={'/login'}>
                        Login
                      </Link>
                    </li>
                  </>
                }
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
