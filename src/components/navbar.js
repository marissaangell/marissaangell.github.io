//Adapted from: https://tailwindui.com/components/application-ui/navigation/navbars

import * as React from 'react'

import { Link } from 'gatsby'

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { MarkGithubIcon, LogoGithubIcon, LinkExternalIcon } from '@primer/octicons-react'

import icon from '../assets/whiteWoman4.png'


const navigation = [
  { name: 'About Me', href: '/about'    },
  { name: 'Projects', href: '/projects' },
]

const links = [
  { name: 'GitHub', href: 'https://github.com/marissaangell'},
  { name: 'Itch.io', href: 'https://marissaangell.itch.io/' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({ current }) => {
  return (
    <Disclosure as="nav" className="fixed w-full bg-neutral" style={{zIndex: 99}}>
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">

              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Left side of the navbar */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="flex-shrink-0 flex items-center">
                  <img className="block h-8 w-auto mr-2" src={icon} alt="Site Icon" />
                  
                  <Link to="/" className="block w-auto text-xl text-gray-200 font-semibold mx-2 link link-hover">Marissa Angell</Link>
                </div>

                <div className="hidden sm:inline-flex divider divider-horizontal"></div>

                <div className="hidden sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          current === item.href ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap'
                        )}
                        aria-current={current === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side of navbar */}
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 right-0 inline-flex space-x-2 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  
                  {/* itch.io - External Link */}
                  <div className="hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-semibold">
                    <a href="https://marissaangell.itch.io/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 20 230 198.92646" className="inline-block fill-current mr-1 mb-[1px]">
                        <path d="M28.832 1.228C19.188 6.954.186 28.785.004 34.51v9.478c0 12.014 11.23 22.572 21.424 22.572 12.24 0 22.44-10.146 22.442-22.187 0 12.04 9.85 22.187 22.093 22.187 12.242 0 21.776-10.146 21.776-22.187 0 12.04 10.47 22.187 22.71 22.187h.22c12.24 0 22.72-10.146 22.72-22.187 0 12.04 9.53 22.187 21.77 22.187s22.09-10.146 22.09-22.187c0 12.04 10.2 22.187 22.44 22.187 10.19 0 21.42-10.557 21.42-22.572V34.51c-.19-5.725-19.19-27.556-28.83-33.282-29.97-1.053-50.76-1.234-81.73-1.23C79.59 0 37.36.483 28.83 1.228zm58.753 59.674c-1.166 2.046-2.627 3.903-4.308 5.546-4.62 4.52-10.956 7.32-17.94 7.32-6.985 0-13.356-2.8-17.976-7.322-1.67-1.64-2.94-3.394-4.11-5.436v.004c-1.16 2.046-2.79 3.798-4.46 5.44-4.62 4.52-10.99 7.317-17.97 7.317-.84 0-1.71-.23-2.42-.47-.982 10.25-1.4 20.04-1.545 27.19v.04c-.02 3.63-.035 6.61-.054 10.75.19 21.51-2.13 69.7 9.48 81.54 17.99 4.2 51.094 6.11 84.31 6.12h.003c33.214-.01 66.32-1.92 84.31-6.11 11.61-11.843 9.29-60.033 9.48-81.536-.017-4.14-.034-7.122-.053-10.75v-.04c-.15-7.142-.565-16.935-1.55-27.183-.71.24-1.587.473-2.43.473-6.98 0-13.354-2.797-17.975-7.316-1.675-1.644-3.3-3.396-4.463-5.44l-.005-.006c-1.166 2.04-2.437 3.797-4.112 5.436-4.62 4.522-10.99 7.322-17.973 7.322s-13.32-2.8-17.94-7.32c-1.68-1.644-3.14-3.5-4.31-5.547-1.163 2.04-2.59 3.907-4.266 5.546-4.62 4.52-10.99 7.32-17.98 7.32-.244 0-.49-.01-.73-.02h-.008c-.243.01-.486.02-.73.02-6.986 0-13.357-2.8-17.978-7.32-1.678-1.64-3.106-3.503-4.27-5.544zM69.123 84.775l-.002.008h.02c7.31.016 13.81 0 21.85 8.783 6.34-.663 12.95-.996 19.58-.985h.01c6.63-.01 13.24.33 19.58.99 8.05-8.78 14.54-8.76 21.85-8.78h.02v-.01c3.458 0 17.27 0 26.9 27.04l10.347 37.1c7.665 27.6-2.453 28.28-15.073 28.3-18.72-.69-29.08-14.29-29.08-27.88-10.36 1.7-22.45 2.55-34.535 2.55h-.005c-12.086 0-24.172-.85-34.53-2.55 0 13.59-10.36 27.18-29.078 27.88-12.62-.02-22.74-.7-15.073-28.29l10.34-37.1c9.63-27.04 23.45-27.04 26.9-27.04zm41.44 21.25v.007c-.017.017-19.702 18.096-23.24 24.526l12.89-.516v11.24c0 .527 5.174.313 10.35.074h.007c5.177.24 10.35.453 10.35-.073v-11.24l12.89.514c-3.538-6.43-23.24-24.525-23.24-24.525v-.006l-.002.002z"/>
                      </svg>
                      <div className="inline-block -mt-1">
                        Itch.io
                      </div>
                    </a>
                  </div>

                  {/* Github - External Link */}
                  <div className="hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-semibold">
                    <a href="https://github.com/marissaangell">
                      <MarkGithubIcon size={16} className="mr-1 mb-[1px]" /> 
                      {/* <LogoGithubIcon size={16}/> */}
                      GitHub
                    </a>
                  </div>

                </div>
              </div>


            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    current === item.href ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={current === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {links.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    current === item.href ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={current === item.href ? 'page' : undefined}
                >
                  {item.name}
                  <LinkExternalIcon size={16} className="ml-1"/>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  )
}

export default Navbar