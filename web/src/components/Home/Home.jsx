import React, { useEffect, useState } from 'react';
import AddFood from '../Food/AddFood';
import FoodList from '../Food/FoodList';
import useFetch from '../Hooks/useFetch';
import FoodSearch from '../Search/FoodSearch';

const Home = () => {

    const [foods, failedFoods, loadFoods] = useFetch('/api/food/list');
    const [shownFoods, setShownFoods] = useState([]);

    // Show all foods on load
    useEffect(() => {
        setShownFoods(foods);
    }, [foods]);

    return (
        <div className='home'>
            <FoodSearch foods={foods} setShownFoods={setShownFoods} />
            { !failedFoods && <FoodList foods={shownFoods} /> }
            <AddFood reloadFoods={loadFoods} />
        </div>
    )
}

export default Home;
