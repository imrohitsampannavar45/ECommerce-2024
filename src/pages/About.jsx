// eslint-disable-next-line no-unused-vars
import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';  
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veritatis! Saepe nam reprehenderit soluta repellendus, numquam minus magni praesentium voluptas, eveniet dolorum tempore accusantium quos sint, sequi unde fuga quam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos quo molestiae ex autem labore distinctio optio nostrum architecto? Deserunt esse explicabo, amet nemo assumenda quasi dolor dolorem molestias ratione?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum modi odit qui magni animi tenetur optio corrupti repudiandae ratione. Labore cupiditate eaque repellendus sequi nulla maiores debitis incidunt consequatur.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance :</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus! Deleniti, sint dolorem esse error quasi nihil distinctio quaerat accusantium veniam molestias repellendus aut, quo fugit veritatis dignissimos dolorum! Perferendis!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience :</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus! Deleniti, sint dolorem esse error quasi nihil distinctio quaerat accusantium veniam molestias repellendus aut, quo fugit veritatis dignissimos dolorum! Perferendis!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus! Deleniti, sint dolorem esse error quasi nihil distinctio quaerat accusantium veniam molestias repellendus aut, quo fugit veritatis dignissimos dolorum! Perferendis!</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>


  );
};

export default About;
