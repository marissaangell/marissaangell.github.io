//Adapted from: https://daisyui.com/components/footer/

import * as React from 'react'
import { Link } from 'gatsby'

import { MarkGithubIcon, LogoGithubIcon, LinkExternalIcon } from '@primer/octicons-react'

const links = [
  { name: 'About', href: '/about'},
  { name: 'Portfolio', href: '/projects'},
]

export default function Footer(){
  return(
    <footer className="footer footer-center pt-6 pb-4 bg-base-200 text-base-content rounded">

      {/* Footer Top Row */}
      <div className="grid grid-flow-col gap-1">
        <p className="">Made by Marissa Angell</p>
        <div className="divider divider-horizontal"></div>

        <div className="grid grid-flow-col gap-6">
          {links.map((item) => (
            <Link key={item.name} to={item.href} className="link link-hover">
              {item.name}
            </Link>
          ))}
        </div> 
      </div>

      {/* Footer Bottom Row */}
      <div>
        <div className="grid grid-flow-col gap-4 -mt-6">

            {/* Github - External Link */}
            <div className="hover:bg-gray-700 hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium">
              <a href="https://github.com/marissaangell">
                <MarkGithubIcon size={16}/> <LogoGithubIcon size={16}/> <LinkExternalIcon size={16}/>
              </a>
            </div>

            {/* itch.io - External Link */}
            <div className="hover:bg-gray-700 hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium">
              <a href="https://marissaangell.itch.io/">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="20" viewBox="0 0 774.7776 198.92646" className="inline-block fill-current mb-[4px]">
                  <path d="M253.95 174.12V70.95h34.81v103.17h-34.81zm17.614-111.56q-8.808 0-13.63-4.404-4.614-4.403-4.614-11.743 0-6.92 4.613-11.743 4.823-4.823 13.63-4.823 8.808 0 13.422 4.823 4.823 4.823 4.823 11.743 0 7.34-4.823 11.743-4.613 4.404-13.42 4.404zM340.7 176.22q-15.1 0-22.86-7.97-7.548-8.177-7.548-22.647v-48.86h-13.84V70.948h13.84V45.784h34.81V70.95h22.65v25.79H345.1v43.828q0 4.824 1.888 6.92 2.097 1.888 6.29 1.888 5.663 0 12.373-5.033l7.97 22.858q-6.08 4.2-13.84 6.71-7.76 2.31-19.08 2.31zm85.62 0q-23.907 0-37.747-13.63-13.63-13.632-13.63-39.635 0-18.873 7.758-31.665 7.97-13.21 19.93-17.825 12.58-4.823 23.28-4.823 13.42 0 22.44 5.452 9.02 5.243 13.21 11.534 4.41 6.29 6.29 9.856l-24.11 15.518q-3.35-6.92-7.34-10.905-3.98-3.984-9.64-3.984-7.97 0-12.58 6.29-4.61 6.292-4.61 19.084 0 13.84 5.45 20.34 5.45 6.502 15.52 6.502 7.97 0 13.21-2.94 5.45-2.94 10.277-7.55l11.115 26q-5.034 4.19-14.89 8.39-9.856 3.98-23.906 3.98zm50.65-2.1V34.04h35.02v42.57q4.403-3.146 10.694-5.452 6.29-2.517 15.1-2.517 18.453 0 27.47 10.49 9.227 10.49 9.227 29.57v65.43h-35.02v-61.24q0-8.8-3.35-12.79-3.35-4.19-8.81-4.19-4.61 0-8.6 2.1-3.98 2.1-6.71 4.41v71.72h-35.02zm124.4 2.1q-8.39 0-13.212-4.823-4.823-4.823-4.823-12.372 0-7.55 4.823-12.582 4.823-5.033 13.21-5.033 7.97 0 12.793 5.033 4.83 5.033 4.83 12.582 0 7.55-4.82 12.372-4.61 4.823-12.79 4.823zm25.75-2.1V70.95h34.81v103.17h-34.81zm17.61-111.54q-8.81 0-13.632-4.404-4.613-4.404-4.613-11.743 0-6.92 4.613-11.743 4.823-4.823 13.63-4.823 8.808 0 13.422 4.823 4.823 4.823 4.823 11.743 0 7.34-4.823 11.743-4.613 4.404-13.42 4.404zm78.67 113.64q-12.164 0-21.6-3.984-9.437-4.194-16.147-11.324-6.5-7.34-10.066-17.196-3.355-10.066-3.355-21.81 0-17.404 7.55-30.406 7.758-12.792 19.292-17.825 11.743-5.033 24.325-5.033 18.03 0 29.77 8.388 11.95 8.388 16.78 20.97 4.82 12.582 4.82 23.906 0 11.743-3.57 21.81-3.35 9.855-10.07 17.195-6.5 7.13-16.15 11.33-9.435 3.99-21.6 3.99zm0-26.842q8.807 0 12.79-7.34 3.985-7.55 3.985-20.13 0-11.954-4.194-19.084-4.19-7.13-12.58-7.13-8.18 0-12.37 7.13-4.19 7.13-4.19 19.083 0 12.582 3.99 20.13 4.2 7.34 12.58 7.34z"/>
                  <path d="M28.832 1.228C19.188 6.954.186 28.785.004 34.51v9.478c0 12.014 11.23 22.572 21.424 22.572 12.24 0 22.44-10.146 22.442-22.187 0 12.04 9.85 22.187 22.093 22.187 12.242 0 21.776-10.146 21.776-22.187 0 12.04 10.47 22.187 22.71 22.187h.22c12.24 0 22.72-10.146 22.72-22.187 0 12.04 9.53 22.187 21.77 22.187s22.09-10.146 22.09-22.187c0 12.04 10.2 22.187 22.44 22.187 10.19 0 21.42-10.557 21.42-22.572V34.51c-.19-5.725-19.19-27.556-28.83-33.282-29.97-1.053-50.76-1.234-81.73-1.23C79.59 0 37.36.483 28.83 1.228zm58.753 59.674c-1.166 2.046-2.627 3.903-4.308 5.546-4.62 4.52-10.956 7.32-17.94 7.32-6.985 0-13.356-2.8-17.976-7.322-1.67-1.64-2.94-3.394-4.11-5.436v.004c-1.16 2.046-2.79 3.798-4.46 5.44-4.62 4.52-10.99 7.317-17.97 7.317-.84 0-1.71-.23-2.42-.47-.982 10.25-1.4 20.04-1.545 27.19v.04c-.02 3.63-.035 6.61-.054 10.75.19 21.51-2.13 69.7 9.48 81.54 17.99 4.2 51.094 6.11 84.31 6.12h.003c33.214-.01 66.32-1.92 84.31-6.11 11.61-11.843 9.29-60.033 9.48-81.536-.017-4.14-.034-7.122-.053-10.75v-.04c-.15-7.142-.565-16.935-1.55-27.183-.71.24-1.587.473-2.43.473-6.98 0-13.354-2.797-17.975-7.316-1.675-1.644-3.3-3.396-4.463-5.44l-.005-.006c-1.166 2.04-2.437 3.797-4.112 5.436-4.62 4.522-10.99 7.322-17.973 7.322s-13.32-2.8-17.94-7.32c-1.68-1.644-3.14-3.5-4.31-5.547-1.163 2.04-2.59 3.907-4.266 5.546-4.62 4.52-10.99 7.32-17.98 7.32-.244 0-.49-.01-.73-.02h-.008c-.243.01-.486.02-.73.02-6.986 0-13.357-2.8-17.978-7.32-1.678-1.64-3.106-3.503-4.27-5.544zM69.123 84.775l-.002.008h.02c7.31.016 13.81 0 21.85 8.783 6.34-.663 12.95-.996 19.58-.985h.01c6.63-.01 13.24.33 19.58.99 8.05-8.78 14.54-8.76 21.85-8.78h.02v-.01c3.458 0 17.27 0 26.9 27.04l10.347 37.1c7.665 27.6-2.453 28.28-15.073 28.3-18.72-.69-29.08-14.29-29.08-27.88-10.36 1.7-22.45 2.55-34.535 2.55h-.005c-12.086 0-24.172-.85-34.53-2.55 0 13.59-10.36 27.18-29.078 27.88-12.62-.02-22.74-.7-15.073-28.29l10.34-37.1c9.63-27.04 23.45-27.04 26.9-27.04zm41.44 21.25v.007c-.017.017-19.702 18.096-23.24 24.526l12.89-.516v11.24c0 .527 5.174.313 10.35.074h.007c5.177.24 10.35.453 10.35-.073v-11.24l12.89.514c-3.538-6.43-23.24-24.525-23.24-24.525v-.006l-.002.002z"/>
                </svg>
                <LinkExternalIcon size={16} className="ml-1"/>
              </a>
            </div>

        </div>
      </div> 

    </footer>
  )
}