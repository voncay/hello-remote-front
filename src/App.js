import { Routes, Route } from 'react-router-dom'
import { SessionController } from './contexts/SessionContext'

import NavBar   from './components/CommonLayout/NavBar'
import Main     from './components/CommonLayout/Main'
import Footer   from './components/CommonLayout/Footer'
import NotFound from './components/CommonLayout/NotFound'

import Signin   from './components/AuthLayout/Signin'
import SignupSeeker     from './components/AuthLayout/SignupSeeker'
import SignupRecruiter  from './components/AuthLayout/SignupRecruiter'
// import ResetPassword    from './components/SessionLayout/ResetPassword' 

import SeekerProfile    from './components/SessionLayout/SeekerProfile'
import RecruiterProfile from './components/SessionLayout/RecruiterProfile' // and company profile merge as one

import PostJob from './components/SessionLayout/PostJob'  // form
import ApplyJob from './components/SessionLayout/ApplyJob'  // form
import JobDetails from './components/CommonLayout/JobDetails'

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
          <Route path='/apply-job' element={<ApplyJob />} />
          <Route path='/job-details' element={<JobDetails />} />
        </Routes>
        <Footer />
      </SessionController>
    </>
  )
}

export default App
