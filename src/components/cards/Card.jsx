import React from 'react'

const Card = () => {
  return (
    <div className="bg-amber-100 mt-12 grid grid-cols-1 w-96 rounded-md shadow-lg overflow-hidden">
  <img src="./image/forms.webp" alt="image" className="w-full h-48 object-cover" />
  <div className="flex justify-between -mb-9 p-4 ">
    <a href="http://" className="text-lg font-semibold text-black hover:text-amber-800 transition">
      Name of component
    </a>
    <div className='bg-amber-300 rounded p-1 hover:transition-transform duration-300 hover:scale-110 '>
    <a href="http:// " className="text-sm text-amber-600 ">
        Type of UI
      </a>
      </div>
  </div>
   <div className='mt-0 p-4 '>
    <p className="text-black text-sm">No. of components</p>
    </div>
</div>

  )
}

export default Card
