import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className='flex items-center justify-center mt-8'>
            <p className="font-extrabold  text-8xl bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 bg-clip-text text-transparent leading-normal">COOKIE-UI</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-2 leading-normal">  
            <p  className="font-bold text-5xl  text-amber-900"> Ready-to-Use,</p><p className='text-amber-900 text-5xl font-bold'> Easy-to-Customize</p>
        </div>
       <div className="flex flex-col items-center justify-center text-center space-y-6 mt-8 px-6">
  <p className="text-2xl font-medium  text-gray-800 max-w-2xl leading-7">
    Your search ends here! 
    <span className="text-black-600">
      Discover the power of an easy-to-use, user-friendly component library. 
      Ready to elevate your experience?
    </span>
  </p> 
  <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-700 to-amber-900 drop-shadow-lg">
    The journey starts now!
  </p>
</div>


    </section>
  )
}

export default Hero
