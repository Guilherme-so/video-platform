import { getAuth, signOut } from 'firebase/auth'
import { ArrowFatLinesLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"

function Header() {
  const auth = getAuth()
  const navigate = useNavigate()

  const signOutFunc = async () => {
    auth
      .signOut()
      .then((res) => {
                toast.success("Logout succeded", {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <header className='w-full py-5 px-8 flex items-center justify-between bg-gray-700 border-b border-gray-600'>
      <a href='/' className='text-2xl text-purple-400'>
      <img src="/src/public/images/gui_logo.jpg" alt="" height={50} width={80} />
      </a>

      <button
        onClick={signOutFunc}
        className='p-3 rounded flex items-center justify-between gap-2 bg-purple-500 hover:bg-purple-700 '
      >
        <ArrowFatLinesLeft size={24} />
        Log Out
      </button>
    </header>
  )
}

export default Header
