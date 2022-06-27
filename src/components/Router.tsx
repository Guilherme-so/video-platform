import { Route, Routes } from 'react-router-dom'
import Event from '../pages/event'
import { Subscribe } from '../pages/subscribe'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Subscribe />} />
      <Route path='/classroom' element={<Event />} />
      <Route path='/classroom/lesson/:slug' element={<Event />} />
    </Routes>
  )
}

export default Router
