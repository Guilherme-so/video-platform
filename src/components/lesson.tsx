import { CheckCircle } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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
    "EEEE ' ◦ ' d 'de' MMMM ' ◦ ' k'h'mm",{ 
      locale: ptBR
     }
  )

  return (
    <a href='#'>
      <span className='text-gray-300'>{formatedDate}</span>

      <div className='rouded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className=' flex gap-2 items-center text-sm text-blue-500 font-medium'>
              <CheckCircle size={20} />
              Conteudo Liberado
            </span>
          ) : (
            <span className=' flex gap-2 items-center text-sm text-orange-500 font-medium'>
              <CheckCircle size={20} />
              Em Breve
            </span>
          )}

          <span className='text-xs rounded-sm py-[2px] px-2 text-white border border-green-300 font-bold'>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
          </span>
        </header>

        <strong className='text-gray-200 mt-5 block'>{props.title}</strong>
      </div>
    </a>
  )
}

export default Lesson
