import { DiscordLogo, Lightning } from 'phosphor-react'
import { useGetLessonsQuery } from '../graphql/generated'
import Lesson from './lesson'

function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className='sm:max-w-[90%] mx-auto  bg-gray-700 p-6 border-l border-gray-600 md:w-[348px]'>
      <span className='font-bold text-2xl pb-6 mb-4 flex mx-auto items-center justify-center border-b border-gray-500'>
      Content schedule
      </span>

      <div className='flex flex-col gap-8'>
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
      <div className='max-w-[80%] justify-center flex gap-2 mx-auto mt-6 md:flex md:flex-col md:gap-4'>
            <a
              href='https://discord.gg/Xm25tzzf' 
              rel="noreferrer" target='_blank'
              className='p-2 md:p-4 text-sm bg-purple-500 flex items-center rouded font-bold uppercase gap-2 justify-center hover:bg-purple-700 transition-colors'
            >
              <DiscordLogo size={24} />
              Discord
            </a>
            <a
              href=''
              className='p-2 md:p-4  text-sm border border-purple-500  flex items-center rouded font-bold uppercase gap-2 justify-center  hover:bg-purple-700 hover:text-color-gray-900 transition-colors'
            >
              <Lightning size={24} />
              {/* Acesse O Desafio */}
              Soon
            </a>
          </div>
    </aside>
  )
}

export default Sidebar
