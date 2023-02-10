import React, { useState } from "react"
// import { useContext } from "react"

import { login } from "../../logic/UserFunctions"
import { Link, useNavigate } from 'react-router-dom'
// import { SessionContext } from "../../contexts/SessionContext"


const Signin = () => {

  // const [isLoggedin, setIsLoggedin, sessionUser, setSessionUser] = useContext(SessionContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    const user = {
      email: email,
      password: password,
    }

/// fetch
    
    login(user).then((res) => {
      if (res) {
        // setIsLoggedin(true)
        // setSessionUser(user.email)
        console.log(res, "res from login")
        localStorage.setItem('sessionUser', user.email)
        localStorage.setItem('sessionUserType', res.type)
        // res.data.user_type === 'seeker' ? navigate('/seeker-profile') : navigate('/recruiter-profile')
        navigate('/')
        window.location.reload()
      }
    })

    setEmail('')
    setPassword('')
  }

  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Form */}
        <div className="container content-space-3 content-space-t-lg-4 content-space-b-lg-3">
          <div className="flex-grow-1 mx-auto" style={{ maxWidth: "28rem" }}>
            {/* Heading */}
            <div className="text-center mb-5 mb-md-7">
              <h1 className="h2">Welcome back</h1>
              <p>Login to manage your account.</p>
            </div>
            {/* End Heading */}
            {/* Form */}
            <form 
              className="needs-validation"
              noValidate
              onSubmit={ handleLogin }
            >
              {/* Form */}
              <div className="mb-4">
                <label 
                  className="form-label"
                  htmlFor="signupSimpleLoginEmail"
                >
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupSimpleLoginEmail"
                  placeholder="email@site.com"
                  aria-label="email@site.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <label
                    className="form-label"
                    htmlFor="signupSimpleLoginPassword"
                  >
                    Password
                  </label>
                  <Link
                    className="form-label-link"
                    to={'/reset-password'}
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div
                  className="input-group input-group-merge"
                >
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="signupSimpleLoginPassword"
                    placeholder="8+ characters required"
                    aria-label="8+ characters required"
                    required=""
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    id="changePassTarget"
                    className="input-group-append input-group-text"
                  >
                    <i id="changePassIcon" className="bi-eye" />
                  </span>
                </div>
                <span className="invalid-feedback">
                  Please enter a valid password.
                </span>
              </div>
              {/* End Form */}
              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary btn-lg">
                  Log in
                </button>
              </div>
              <div className="text-center">
                <p>
                  Don't have an account yet?
                </p>
                <p>
                  Sign up as a {' '}
                  <Link className="link" to={'/signup-candidat'}>
                    Candidat
                  </Link>
                </p>
                <p>
                  Or as a {' '}
                  <Link className="link" to={'/signup-recruiter'}>
                    Recruiter
                  </Link>
                </p>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
        {/* End Form */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </>
  )
}

export default Signin
