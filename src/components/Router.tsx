import { Route, Routes } from 'react-router-dom'
import Event from '../pages/event'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<h1>Index Page</h1>} />
      <Route path='/class' element={<Event />} />
      <Route path='/class/lesson/:slug' element={<Event />} />
    </Routes>
  )
}

export default Router
