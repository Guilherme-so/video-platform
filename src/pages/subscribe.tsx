import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateSubscriberMutation } from '../graphql/generated'

export function Subscribe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault()
    await createSubscriber({
      variables: {
        name,
        email,
      },
    })

    navigate('/classroom')
  }

  return (
    <div className='min-h-screen bg-blurGreen bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
        <div className='max-w-[660px]'>
          <h1 className='text-[2.5rem] leading-tight text-purple-500'>Logo</h1>
          <h1 className=' mt-8 text-[2.5rem] leading-tight'>
            Construa uma
            <strong className='text-purple-500'> aplicação completa</strong>, do
            zero, com <strong className='text-purple-500'>react</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            mollitia voluptatem provident ipsam dolorem voluptates cum pariatur
            beatae nulla facilis nisi dolore accusantium sit quia ipsum dicta,
            a, eaque natus?
          </p>
        </div>

        <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
          <strong className='text-2xl mb-6 block'>
            Escreva-se gratuitamente
          </strong>

          <form onSubmit={submitHandler} className='w-full flex flex-col gap-2'>
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='text'
              placeholder='Seu nome completo'
              required
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='email'
              placeholder='Digite seu e-mail'
              required
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              disabled={loading}
              type='submit'
              className='mt-4 py-4  rounded uppercase bg-purple-500 hover:bg-purple-700 transitio-colors disabled:opacity-50'
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      <img src='/src/assets/code-mockup.png' className='mt-10' alt='mockup' />
    </div>
  )
}
