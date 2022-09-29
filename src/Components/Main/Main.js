import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import Card from '../CardContainer/Card';
import CardPiece from '../CardPiece/CardPiece';
import Head from '../Header/Head';

const Main = () => {
 
  const [cards,setCards]=useState([])
  const [lists,setLists]=useState([])
  
  useEffect(()=>{
      fetch("cards.json")
      .then(res=>res.json())
      .then(data=>setCards(data))
  },[])

 const  addList=(card)=>{
      console.log(card)
      
      const newCard=[...lists,card]
      setLists(newCard)
      
  }





    return (
        <div className='block lg:grid lg:grid-cols-4 '>
          <div className='m-10 lg:mt-28 lg:ml-32 col-span-3'>
        <Head></Head>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 '>
          {
              cards.map(card=> <CardPiece card={card} key={card.id} addList={addList}></CardPiece>)
          }
      </div>
      </div>

      <div>
      <Aside cards={lists}></Aside>
      </div>
        </div>
    );
};

export default Main;