import { Player, Youtube, DefaultUi } from '@vime/react'
import '@vime/core/themes/default.css'
import { toast } from 'react-toastify'

import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  CaretRight,
} from 'phosphor-react'
import { useGetLessonBySlugQuery } from '../graphql/generated'

interface videoProps {
  lessonSlug: string
}

function Video(props: videoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  })

  if (!data || !data.lesson) {
    return (
      <div className='flex-1 flex items-center justify-center'>
        <div className='loading' />
      </div>
    )
  }

  return (
    <div className='flex-1'>
      <div className=' flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[50vh] aspect-video bg-black'>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className='p-4 md:p-8 max-w-[1100px] mx-auto'>
        <div className='md:flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='md:text-2xl font-bold'>{data.lesson.title}</h1>
            <p className='mt-2 leading-tight text-gray-400 md:mt-4 text-gray-200 leading-relaxed'>
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className='mt-4 flex items-center gap-4 md:mt-6'>
                <img
                  className='w-16 h-16 rounded-full border-2 border-purple-700'
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                />
                <div className='leading-relaxed'>
                  <strong className='font-bold text-2xl block'>
                    {data.lesson.teacher.name}
                  </strong>
                  <span className='text-gray-400 text-sm block'>
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className='max-w-[80%] flex gap-2 mx-auto mt-6 md:flex md:flex-col md:gap-4'>
            <a
              href=''
              className='p-2 md:p-4 text-sm bg-purple-500 flex items-center rouded font-bold uppercase gap-2 justify-center hover:bg-purple-700 transition-colors'
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href=''
              className='p-2 md:p-4  text-sm border border-purple-500  flex items-center rouded font-bold uppercase gap-2 justify-center  hover:bg-purple-700 hover:text-color-gray-900 transition-colors'
            >
              <Lightning size={24} />
              Acesse O Desafio
            </a>
          </div>
        </div>

        <div className='mt-8 gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:mt-10'>
          <a
            href=''
            className='flex items-center justify-center mb-6 bg-gray-700 rounded overflow-hidden max-w-[400px] mx-auto  md:items-stretch gap-6 hover:bg-gray-600 transition-colors'
          >
            <div className='bg-purple-700 h-full flex items-center p-6'>
              <FileArrowDown size={48} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong>Arquivos da aula</strong>
              <p className='text-sm text-gray-200 mt-2'>
                Acesse o arquivo da aula!
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Video
