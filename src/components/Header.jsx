import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg'>
  <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
    {/* logo */}
    <Link href='/' className='text-2xl font-extrabold group cursor-pointer'>
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600'>
        Auth
      </span>
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600'>
        App
      </span>
    </Link>

    {/* navigation */}
    <nav>
      <ul className='flex gap-4'>
        <li>
          <Link 
            href='/' 
            className='px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 shadow-md hover:shadow-lg'
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href='/about' 
            className='px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600 shadow-md hover:shadow-lg'
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href='/signin' 
            className='px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 shadow-md hover:shadow-lg'
          >
            Signin
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>

  )
}
