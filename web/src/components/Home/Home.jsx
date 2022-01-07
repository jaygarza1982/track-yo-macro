import React, { useEffect, useState } from 'react';
import AddFood from '../Food/AddFood';
import FoodList from '../Food/FoodList';
import useFetch from '../Hooks/useFetch';
import FoodSearch from '../Search/FoodSearch';
import authGenerate from '../../services/auth-generator';

const Home = () => {

    const [foods, failedFoods, loadFoods] = useFetch('/api/food/list', {
        'Authorization': window.localStorage.getItem('authToken')
    });
    const [shownFoods, setShownFoods] = useState([]);

    // Generate an auth token to uniquely identify user without login
    useEffect(() => {
        authGenerate();
    }, []);

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
