import { CheckCircle } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface lessonsProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

function Lesson(props: lessonsProps) {
  //isPast se o dia ja passou { availableAt } vai ta "true" disponivel se nao vai tar false
  const isLessonAvailable = isPast(props.availableAt)

  const formatedDate = format(
    props.availableAt,
    "EEEE ' ◦ ' d 'de' MMMM ' ◦ ' k'h'mm",
    {
      locale: ptBR,
    }
  )

  const { slug } = useParams<{ slug: string }>()

  const isActiveLesson = props.slug === slug

  return (
    <Link to={`/watch/video/${props.slug}`} className='group'>
      <span className='text-gray-300'>{formatedDate}</span>

      <div
        className={classNames(
          'rouded border border-gray-500 p-4 mt-2 group-hover:border-purple-500',
          {
            'bg-purple-800': isActiveLesson,
          }
        )}
      >
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span
              className={classNames(
                'flex gap-2 items-center text-sm text-blue-500 font-medium',
                {
                  'text-white': isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Content available
            </span>
          ) : (
            <span className=' flex gap-2 items-center text-sm text-orange-500 font-medium'>
              <CheckCircle size={20} />
              Soon
            </span>
          )}

          <span
            className={classNames(
              'text-xs rounded-sm py-[2px] px-2 text-white border border-green-400 font-bold',
              {
                'border-white': isActiveLesson,
              }
            )}
          >
            {/* {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'} */}
            {props.type === 'live' ? 'LIVE' : 'AVAILABLE'}

          </span>
        </header>

        <strong
          className={classNames(' mt-5 block', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  )
}

export default Lesson
