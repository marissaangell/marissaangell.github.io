import * as React from 'react'

const Heading = ({ text }) => {
  return (
    <header className="w-fit py-6">
        <h1 className="text-4xl font-bold text-gray-200">{text}</h1>
    </header>
  )
}

export default Heading
