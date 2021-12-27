import React from 'react';
import CustomList from '../CustomList/CustomList';
import useFetch from '../Hooks/useFetch';

const Home = () => {

    const [foods, foodsFailed] = useFetch('/api/food/list');

    return (
        <div className='home'>
            {!foodsFailed &&
                <CustomList
                    items={
                        foods.map(food => {
                            return {
                                display: food.name,
                                key: food._id,
                                action: () => { console.log('Food clicked', food); }
                            }
                        })
                    }
                />
            }
        </div>
    )
}

export default Home;
