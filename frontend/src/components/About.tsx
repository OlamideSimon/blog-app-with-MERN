import React from 'react'
import user from '../imgs/user.jpg'

const About = () => {
  return (
    <div className='grid gap-3'>
        <div className=''>
            <img src={user} alt='' className='rounded-full w-80 h-80' draggable={false} />
        </div>
        <div>
            Chingili Sa'adatu is the CEO of 
        </div>
    </div>
  )
}

export default About