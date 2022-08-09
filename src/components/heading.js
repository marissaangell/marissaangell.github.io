import * as React from 'react'

const Heading = ({ text }) => {
  return (
    <header className="-mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-200">{text}</h1>
      </div>
    </header>
  )
}

export default Heading

// <main>
//       <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         {/* Replace with your content */}
//         <div className="px-4 py-6 sm:px-0">
//           <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
//         </div>
//         {/* /End replace */}
//       </div>
//     </main>