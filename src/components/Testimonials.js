import React, { useState } from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
    let reviews = props.reviews;
    let [index,setIndex] = useState(0);
   
    function shiftLeftHandler(){
      if(index - 1 < 0)
      {
        setIndex(reviews.length - 1)
      }
      else{
        setIndex(index-1)
      }
    }

    function shiftRightHandler(){
      if(index + 1 >= reviews.length)
      {
        setIndex(0)
      }
      else{
        setIndex(index + 1)
      }

    }

    function supriseHandler(){
      let randomHandler= Math.floor(Math.random() * reviews.length);
      setIndex(randomHandler)

    }


  return (
    <div className='w-[85vh] md:w=[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card review={reviews[index]}/>

        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
         <button className='cursor-poniter hover:text-violet-500' onClick={shiftLeftHandler}>
             <FiChevronLeft/>  
         </button>

         <button className='cursor-poniter hover:text-violet-500' onClick={shiftRightHandler}>
            <FiChevronRight/>
         </button>
            
         </div>

         <div >
            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 
            cursor-pointer px-10 py-2 rounded-md font-bold text-white text-left mt-5'onClick={supriseHandler} on>Suprise Me</button>
         </div>
       
    </div>
  )
}

export default Testimonials;