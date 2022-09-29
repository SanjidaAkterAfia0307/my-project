import React, { useState } from 'react';
import {  getLocalRest, setLocalRest } from '../../utilities/localStorage';

const Aside = (props) => {
  const {cards}=props
  console.log(cards)
  let total=0;

  for (const card of cards) {
    total=total+parseFloat(card.time)
  }
  console.log(total)

  const [rest,setRest]=useState(getLocalRest())
  const handleRest=(addRest)=>{
    console.log(addRest)
    const newRest=parseInt(rest)+addRest;
    setRest(newRest)
    getLocalRest(newRest)
  }
  
  setLocalRest(rest)

    return (
        <div className='bg-gray-200 rounded-md static lg:fixed'>
           <div>
           <div className='p-6'>
                <div className='flex gap-6 p-12'>
                <img className='rounded-full w-16' src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg" alt="" />
                <div>
                    <h4 className='font-bold text-xl'>Paula Hawkins</h4>
                    <p className='font-semibold text-gray-600'>Chicago,US</p>
                </div>
                </div>
                <div className='flex bg-slate-50 m-2 p-4 gap-6 justify-around rounded-3xl'>
                    <div>
                        <p className='font-bold text-xl'>Profession</p>
                        <p className='font-semibold text-gray-600'>Student</p>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Grade</p>
                        <p className='font-semibold text-gray-600'>11th</p>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Age</p>
                        <p className='font-semibold text-gray-600'>16yrs</p>
                    </div>
                </div>
                <h2  className='font-bold text-2xl'>Add a break!</h2>
                <div className='flex bg-slate-50 m-2 p-4 gap-6 justify-around rounded-xl'>
                    <div onClick={()=>handleRest(5)}  className='bg-gray-300 rounded-full px-3 py-4 hover:bg-purple-600'>
                        <p className='font-bold text-xl'>5<span>min</span></p>
                        
                    </div>
                    <div onClick={()=>handleRest(10)}  className='bg-gray-300 rounded-full px-3 py-5 hover:bg-purple-600'>
                        <p className='font-bold text-xl'>10<span>min</span></p>
                        
                    </div>
                    <div onClick={()=>handleRest(15)}  className='bg-gray-300 rounded-full px-3 py-6 hover:bg-purple-600'>
                        <p className='font-bold text-xl'>15<span>min</span></p>
                       
                    </div>
                    <div onClick={()=>handleRest(20)}  className='bg-gray-300 rounded-full px-3 py-6 hover:bg-purple-600'>
                        <p className='font-bold text-xl'>20<span>min</span></p>
                       
                    </div>
                </div>
                <div>
                <h2  className='font-bold text-2xl'>Time Calculate</h2>

                <div className='flex justify-around bg-slate-50 rounded-md p-2 font-semibold text-base m-4'>
                    <p>Study Time</p>
                    <p>{total}<span>hours</span></p>
                </div>
                <div className='flex justify-around bg-slate-50 rounded-md p-2 font-semibold text-base m-4'>
                    <p>Rest</p>
                    <p >{rest}min</p>
                </div>
                </div>

                <div className='text-center my-10'>
                <button className='font-semibold text-white rounded-2xl px-10 py-4 bg-teal-700'>Activity Completed</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Aside;