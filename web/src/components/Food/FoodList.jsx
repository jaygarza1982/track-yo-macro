import React from 'react';
import useFetch from '../Hooks/useFetch';
import CustomList from '../CustomList/CustomList';

const FoodList = () => {

    const [foods, foodsFailed] = useFetch('/api/food/list');

    return (
        <div className='food-list'>
            {!foodsFailed &&
                <CustomList
                    items={
                        foods.map(food => {
                            return {
                                display: food.name,
                                key: food._id,
                                // TODO: Dialog box with food info
                                action: () => { console.log('Food clicked', food); }
                            }
                        })
                    }
                />
            }
        </div>
    );
}

export default FoodList;