import React from 'react';

const CardPiece = (props) => {
    const {img,sub,time}=props.card;
    return (
        
            <div className='w-72 h-96 shadow-md rounded-lg'>
                <img src={img} className="w-full h-56 p-4"></img>
                <h3 className='m-2 text-2xl font-semibold text-slate-700'>{sub}</h3>
                <p className='m-2 text-lg'>Needed to read: <span className='font-semibold'>{time}hour</span></p>
                <div className='text-center m-6'>
                <button onClick={()=>props.addList(sub)} className='rounded-2xl bg-cyan-600 py-2 px-10 text-white'>Add to Table</button>
                </div>
            </div>
     
    );
};

export default CardPiece;