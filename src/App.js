import { Routes, Route } from 'react-router-dom'
import { SessionController } from './contexts/SessionContext'

import NavBar   from './components/CommonLayout/NavBar'
import Main     from './components/CommonLayout/Main'
import Footer   from './components/CommonLayout/Footer'
import NotFound from './components/CommonLayout/NotFound'

import Signin   from './components/AuthLayout/Signin'
import SignupSeeker     from './components/AuthLayout/SignupSeeker'
import SignupRecruiter  from './components/AuthLayout/SignupRecruiter'

import SeekerProfile    from './components/SessionLayout/SeekerProfile'
import RecruiterProfile from './components/SessionLayout/RecruiterProfile'

import PostJob from './components/AuthLayout/PostJob'

import Test from './components/Test'

function App() {

  return (
    <>
      <SessionController>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup-candidat" element={<SignupSeeker />} />
          <Route path="/signup-recruiter" element={<SignupRecruiter />} />
          <Route path="/seeker-profile" element={<SeekerProfile />} />
          <Route path="/recruiter-profile" element={<RecruiterProfile />} />
          <Route path="/post-job" element={<PostJob/>} />
          <Route path="/test" element={<Test />}/>
        </Routes>
        <Footer />
      </SessionController>
    </>
  )
}

export default App
