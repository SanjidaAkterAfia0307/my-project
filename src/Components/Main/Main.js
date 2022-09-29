import React, { useEffect, useState } from 'react';
import { getLocal, setLocalRest } from '../../utilities/localStorage';
import Aside from '../Aside/Aside';
import Card from '../CardContainer/Card';
import CardPiece from '../CardPiece/CardPiece';
import Head from '../Header/Head';
import Que from '../Que/Que';

const Main = () => {
 
  const [cards,setCards]=useState([])
  const [lists,setLists]=useState([])
  let localHour=getLocal("Study Hour")
  localHour=parseFloat(localHour)

  const [hour,setHour]=useState(localHour)

  
  useEffect(()=>{
      fetch("cards.json")
      .then(res=>res.json())
      .then(data=>setCards(data))
  },[])
 const  addList=(card)=>{
      
      const newHour=parseFloat(hour)+parseFloat(card.time)
      setHour(newHour)
      const newCard=[...lists,card]
      setLists(newCard)
      
  }
setLocalRest(hour ,"Study Hour")




    return (
       <div>
         <div className='block lg:grid lg:grid-cols-4 '>
          <div className='m-10 lg:mt-28 lg:ml-32 col-span-3'>
        <Head></Head>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 '>
          {
              cards.map(card=> <CardPiece card={card} key={card.id} addList={addList}></CardPiece>)
          }
      </div>
      <div>
          <Que></Que>
        </div>
      </div>

      <div>
      <Aside cards={lists} hour={hour}></Aside>
      </div>
      
        </div>
        
       </div>
    );
};

export default Main;