import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <footer className=" mt-10 border-t border-gray-300 m">
    <div className='flex items-center justify-center  bg-gradient-to-r from-amber-200 to-white-400'>
    <div >
    <img src="/image/footerlogo.png" alt="" className="size-48  left-0 -top-[18px] ml-4" />
    </div>
    <div className='ml-9'>
  <div className="text-2xl font-serif text-orange-950 leading-relaxed">
    Powering the Web, <p> One <span className="font-bold">Component</span> at a Time</p>
  </div>
   <div className="inline-block">
  <Link to="https://github.com" target="_blank" className="mt-4 flex items-center gap-3 bg-amber-600 text-white  px-2 py-2 rounded-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 hover:bg-amber-700">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="w-4 h-4"/>
    Follow on GitHub
  </Link>
  </div>
</div>

  </div>
  
     <div className="flex items-center justify-start mt-2">
        <div className="relative">
          <img
            src="/image/logo.png"
            alt=""
            className="size-20 absolute left-0 -top-[18px]"
          />
          <p className="ml-14 lg:text-xl text-sm italic font-semibold">
            Cookie UI
          </p>
        </div> 
        </div>
       
        <div className=" text-end mt-0">
        &copy; {new Date().getFullYear()} Cookie UI. All Rights Reserved.
      </div>
      
     
      
     


    
   </footer>
  )
}

export default Footer;
