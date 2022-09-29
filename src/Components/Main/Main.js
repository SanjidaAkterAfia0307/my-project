import React from 'react';
import Aside from '../Aside/Aside';
import Card from '../CardContainer/Card';
import Head from '../Header/Head';

const Main = () => {
    return (
        <div className='block lg:grid lg:grid-cols-4 '>
          <div className='m-10 lg:mt-28 lg:ml-32 col-span-3'>
        <Head></Head>
        <Card></Card>
      </div>

      <div>
      <Aside></Aside>
      </div>
        </div>
    );
};

export default Main;