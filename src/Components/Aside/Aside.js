import React, { useState } from 'react';
import {  getLocal, setLocalRest } from '../../utilities/localStorage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Aside = (props) => {
  const {cards,hour}=props



   const notify=()=>toast.success("Activity Successful!!!",{position:"top-center",theme:"colored"})

//   console.log(total)

  const [rest,setRest]=useState(getLocal("Rest"))
  const handleRest=(addRest)=>{

    const newRest=addRest;
    setRest(newRest)
    
  }
  
  setLocalRest(rest,"Rest")

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
                <div className='grid md:grid-cols-3 grid-cols-2 bg-slate-50 m-2 p-4 gap-6 justify-around rounded-3xl'>
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
                <div className='grid md:grid-cols-4 grid-cols-2 bg-slate-50 m-2 p-8 gap-6 justify-around rounded-xl'>
                    <div onClick={()=>handleRest(5)}  className='bg-gray-300 rounded-lg p-1 flex items-center hover:bg-purple-600'>
                        <p className='font-bold text-xl'>5<span>min</span></p>
                        
                    </div>
                    <div onClick={()=>handleRest(10)}  className='bg-gray-300 rounded-lg p-1 text-center hover:bg-purple-600'>
                        <p className='font-bold text-xl'>10<span>min</span></p>
                        
                    </div>
                    <div onClick={()=>handleRest(15)}  className='bg-gray-300 rounded-lg p-1 text-center hover:bg-purple-600'>
                        <p className='font-bold text-xl'>15<span>min</span></p>
                       
                    </div>
                    <div onClick={()=>handleRest(20)}  className='bg-gray-300 rounded-lg p-1 text-center hover:bg-purple-600'>
                        <p className='font-bold text-xl'>20<span>min</span></p>
                       
                    </div>
                </div>
                <div>
                <h2  className='font-bold text-2xl'>Time Calculate</h2>

                <div className='flex justify-around bg-slate-50 rounded-md p-2 font-semibold text-base m-4'>
                    <p>Study Time</p>
                    <p>{hour}<span>hours</span></p>
                </div>
                <div className='flex justify-around bg-slate-50 rounded-md p-2 font-semibold text-base m-4'>
                    <p>Rest</p>
                    <p >{rest}min</p>
                </div>
                </div>

                <div className='text-center my-10'>
                <button onClick={notify} className='font-semibold text-white rounded-2xl px-10 py-4 bg-teal-700'>Activity Completed</button>
                <ToastContainer></ToastContainer>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Aside;