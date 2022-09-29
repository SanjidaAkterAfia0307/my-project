import React, { useEffect, useState } from 'react';
import CardPiece from '../CardPiece/CardPiece';

const Card = () => {
    const [cards,setCards]=useState([])

    useEffect(()=>{
        fetch("cards.json")
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 '>
            {
                cards.map(card=> <CardPiece card={card}></CardPiece>)
            }
        </div>
    );
};

export default Card;