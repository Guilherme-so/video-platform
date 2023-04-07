import Header from '../components/header'
import Video from '../components/video'
import Sidebar from '../components/sidebar'
import { useParams } from 'react-router-dom'

function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 md:flex'>
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className='flex-1 flex text-xl text-gray-400 items-center justify-center'>
            <h1>Click on a video to start.</h1>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  )
}

export default Event
