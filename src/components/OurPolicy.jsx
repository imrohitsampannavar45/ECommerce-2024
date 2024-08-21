// eslint-disable-next-line no-unused-vars
import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
        <div>
            <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy </p>
            <p className='text-gray-400'>We offer hasslefree exchange Policy</p>
        </div>

        <div>
            <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
            <p className='font-semibold'>7 Days Return Policy </p>
            <p className='text-gray-400'>We offer 7 Days free return Policy</p>
        </div>

        <div>
            <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
            <p className='font-semibold'>Best Customer Support </p>
            <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
        </div>


        

        
      
    </div>
  )
}

export default OurPolicy
