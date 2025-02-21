import React from 'react'

const BlogHero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mt-10 leading-normal">
        <p className="font-bold text-7xl  text-amber-900">Blog</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center space-y-6 mt-8 px-6">
        <p className="text-2xl font-medium  text-gray-800 max-w-2xl leading-7">
          Tailwind CSS Blog with Tips and Tricks
        </p>
        <p className="text-black text-lg  max-w-2xl leading-7">
          Learn Tailwind CSS tips and tricks that you can use in your work to
          help write cleaner, more maintainable code and help you be more
          productive.
        </p>
        <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-700 to-amber-900 drop-shadow-lg">
          Let's Learn!
        </p>
      </div>
    </section>
  );
}

export default BlogHero
