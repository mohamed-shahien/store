import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Icons } from './Icons'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  const user = null;
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16 '>
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200 " >
            <div className="flex h-16 items-center">

              <div className="ml-4 flex lg:ml-0">
                <Link href='/'>
                  <Icons.Logo className='h-10 w-10' />
                </Link>
              </div>
              
              <div className=" z-50 lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6">
                {user ? null : (<Link href='/sign-in' className={buttonVariants({
                  variant: 'ghost'
                })}>Sign in</Link>
                )}
                {user ? null : (
                  <span className=' bg-gray-200 h-6 w-px' aria-hidden="true" />
                )}
                {user ? <p></p> : (
                  <Link href='/sign-up'
                    className={buttonVariants({
                      variant: 'ghost'
                    })}>Create account</Link>
                )}
                {user ? (<span className=' bg-gray-200 h-6 w-px' aria-hidden="true" />) : null}
                {user ? null : (
                  <div className="flex lg:ml-6">
                    <span className=' bg-gray-200 h-6 w-px' aria-hidden="true" />
                  </div>
                )}
              </div>
            </div>
            </div>



          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar