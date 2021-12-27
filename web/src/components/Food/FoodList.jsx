import React from 'react';
import CustomList from '../CustomList/CustomList';

const FoodList = ({ foods }) => {
    return (
        <div className='food-list'>
            <CustomList
                items={
                    foods?.map(food => {
                        return {
                            display: food.name,
                            key: food._id,
                            // TODO: Dialog box with food info
                            action: () => { console.log('Food clicked', food); }
                        }
                    })
                }
            />
        </div>
    );
}

export default FoodList;