//Source: https://www.hyperui.dev/components/marketing/cards

import * as React from 'react'
import { Link } from 'gatsby'


const GradientCard = ({ details, slug }) => {
  return (
    <div className="relative block p-6 overflow-hidden border border-gray-100 rounded-lg bg-neutral">
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />

      <div className="justify-between sm:flex">
        <div>
          <h5 className="text-xl font-bold text-gray-200 link link-hover">
            <Link to={`/projects/${slug}`}>
              {details.title}
            </Link>
          </h5>
          <p className="text-sm text-gray-500">
            {details.description}
          </p>
        </div>

        <div className="flex-shrink-0 hidden ml-3 sm:block">
          <img
            className="object-cover w-16 h-16 rounded-lg shadow-sm"
            src="https://www.hyperui.dev/photos/man-5.jpeg"
            alt=""
          />
        </div>
      </div>

      {/*<div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
          provident a, ipsa maiores deleniti consectetur nobis et eaque.
        </p>
      </div>*/}

      <dl className="flex mt-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Published</dt>
          <dd className="text-xs text-gray-500">{details.date}</dd>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-gray-600">Reading time</dt>
          <dd className="text-xs text-gray-500">3 minute</dd>
        </div>
      </dl>
    </div>

  )
}

export default GradientCard