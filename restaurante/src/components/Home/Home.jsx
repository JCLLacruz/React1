import './Home.css';

import React from 'react'

function Home(props) {
    const dishes = props.dishes;
    console.log('dishes',dishes);
    const printDish = dishes.map(dish => {
     return <div className='dish'>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <p><b>{dish.price}</b></p>
    </div>
    });

  return (
    <div>
        {printDish}
    </div>
  )
}

export default Home