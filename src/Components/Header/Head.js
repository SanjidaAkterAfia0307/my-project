import React from 'react';
import "./Head.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Head = () => {
    return (
        <div>
            <div className='flex items-center'>
            <FontAwesomeIcon icon={faGraduationCap} className="text-5xl text-teal-600"></FontAwesomeIcon>
            <p className='font-bold text-4xl text-slate-600 ml-6'>Study Table</p>
            </div>
            <p className='pt-12 text-xl font-semibold text-sky-600'>Today's routine</p>
        </div>
    );
};

export default Head;