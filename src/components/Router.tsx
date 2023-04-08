import { Route, Routes } from 'react-router-dom'
import Event from '../pages/event'
import { Subscribe } from '../pages/subscribe'
import { initializeApp } from 'firebase/app'
import { config } from '../config/config'

initializeApp(config.firebaseConfig)

function Router() {
  return (
    <Routes>
      {/* <Route path='/' element={<Subscribe />} /> */}
      <Route path='/watch' element={<Event />} />
      <Route path='/watch/video/:slug' element={<Event />} />
    </Routes>
  )
}

export default Router
