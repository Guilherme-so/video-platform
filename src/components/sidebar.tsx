import { useGetLessonsQuery } from '../graphql/generated'
import Lesson from './lesson'

function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className='sm:max-w-[90%] mx-auto  bg-gray-700 p-6 border-l border-gray-600 md:w-[348px]'>
      <span className='font-bold text-2xl pb-6 mb-4 flex mx-auto items-center justify-center border-b border-gray-500'>
        Cronograma de aulas
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
    </aside>
  )
}

export default Sidebar
