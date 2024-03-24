import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Icons } from './Icons'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16 '>
      <header className="relative bg-white">
        <MaxWidthWrapper>
            <div className="border-b border-gray-200">
              <div className="flex h16 items-center">
              <Link href='/'>
                <Icons.Logo className='h-10 w-10'/>
              </Link>
              </div>
              <div className=" z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems/>
              </div>
            </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar