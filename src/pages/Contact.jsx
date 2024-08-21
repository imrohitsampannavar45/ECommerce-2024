// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
<div className='flex flex-col justify-center items-start gap-6'>
  <p className='font-semibold text-xl text-gray-600'>Our Store</p>
  <p className='text-gray-500'>560078 JP Nagar <br /> Suite, Bangalore  Karnataka,India </p>
  <p className='text-gray-500'>Tel: (843) 415-5095</p>
  <p className='font-semibold text-xl text-gray-600'>Careers at Forever </p>
  <p className='text-gray-500'>Learn more about our Teams and Job Openings </p>
  <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all dur'>Explore Jobs</button>

 
  <p></p> 

</div>

      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
