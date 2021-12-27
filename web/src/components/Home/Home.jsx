import React from 'react';
import AddFood from '../Food/AddFood';
import FoodList from '../Food/FoodList';

const Home = () => {
    return (
        <div className='home'>
            <FoodList />
            <AddFood />
        </div>
    )
}

export default Home;
