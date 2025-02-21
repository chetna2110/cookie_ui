import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Sign = () => {
  return (
    <div className='flex items-center justify-center mt-5'>
      <SignIn/>
    </div>
  )
}

export default Sign
