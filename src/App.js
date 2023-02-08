import { Routes, Route } from 'react-router-dom'

import { SessionController } from './contexts/SessionContext'

import NavBar   from './components/CommonLayout/NavBar'
import Main     from './components/CommonLayout/Main'
import Footer   from './components/CommonLayout/Footer'
import NotFound from './components/CommonLayout/NotFound'

import Signin   from './components/AuthLayout/Signin'
import Signup   from './components/AuthLayout/Signup'
// import SeekerForm from './components/AuthLayout/SeekerForm'
// import RecruiterForm from './components/AuthLayout/RecruiterForm'

import ResetPassword    from './components/SessionLayout/ResetPassword'
import SeekerProfile    from './components/SessionLayout/SeekerProfile'
import RecruiterProfile from './components/SessionLayout/RecruiterProfile'
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/seeker-profile" element={<SeekerProfile />} />
          <Route path="/recruiter-profile" element={<RecruiterProfile />} />
          <Route path="/test" element={<Test />}/>
        </Routes>
        <Footer />
      </SessionController>
    </>
  )
}

export default App
