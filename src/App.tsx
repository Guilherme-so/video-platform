import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
        bio
      }
    }
  }
`

interface lesson {
  id: string
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: lesson[] }>(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <div>
      <ul>
        {data?.lessons.map((lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App