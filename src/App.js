import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
// import Secondary from './components/Secondary'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* <Secondary /> */}
    </>
  )
}

export default App;
