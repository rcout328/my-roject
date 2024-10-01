import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Harekrishnall mall Dinesh israni new number
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-xl text-gray-200">
            Add our updated contact information with just one click!
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/contact.vcf"
            download="contact.vcf"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-8 transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default App