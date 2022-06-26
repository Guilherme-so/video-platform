import Header from '../components/header'
import Video from '../components/video'
import Sidebar from '../components/sidebar'
import { useParams } from 'react-router-dom'

function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className='flex-1 flex items-center justify-center'>
            <h1></h1>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  )
}

export default Event
