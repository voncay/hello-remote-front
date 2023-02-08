import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Main from './components/CommonLayout/Main'
import Footer from './components/CommonLayout/Footer'
import NotFound from './components/NotFound'
import Signin from './components/Signin'
import Signup from './components/Signup'
import ResetPassword from './components/SessionLayout/ResetPassword'
import RecruiterProfile from './components/SessionLayout/RecruiterProfile'
// import Test from './components/Test'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="recruiter-profile" element={<RecruiterProfile />} />
        {/* <Route path="/test" element={<Test />}/> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App;
