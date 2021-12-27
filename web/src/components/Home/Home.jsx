import React from 'react';
import AddFood from '../Food/AddFood';
import FoodList from '../Food/FoodList';
import useFetch from '../Hooks/useFetch';

const Home = () => {

    const [foods, failedFoods, loadFoods] = useFetch('/api/food/list');

    return (
        <div className='home'>
            { !failedFoods && <FoodList foods={foods} /> }
            <AddFood reloadFoods={loadFoods} />
        </div>
    )
}

export default Home;
