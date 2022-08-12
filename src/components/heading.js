import * as React from 'react'

const Heading = ({ text }) => {
  return (
    <header className="w-fit py-6">
        <h1 className="text-4xl font-bold text-gray-200">{text}</h1>
    </header>
  )
}

export default Heading

//       <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
