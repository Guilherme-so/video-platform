import { gql, useQuery } from '@apollo/client'
import Lesson from './lesson'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(stage: PUBLISHED, orderBy: availableAt_ASC) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`

interface getLessonsResponse {
  lessons: {
    id: string
    slug: string
    title: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}

function Sidebar() {
  const { data } = useQuery<getLessonsResponse>(GET_LESSONS_QUERY)
  console.log(data)
  
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-4 mb-b border-b border-blue-600 block'>
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
