import React from 'react';
import CustomList from '../CustomList/CustomList';
import useDialog from '../Hooks/useDialog';
import ConsumedInfo from './ConsumedInfo';
import FoodEdit from '../Food/FoodEdit';
import { useState } from 'react';

const ConsumedList = ({ foods, consumed }) => {

    const [selectedFood, setSelectedFood] = useState({});
    const [foodInfoDialog, setFoodInfoOpen] = useDialog('Food Info', <FoodEdit food={selectedFood} />);

    const showFood = food => {
        return () => {
            setSelectedFood(food);
            setFoodInfoOpen(true);
        }
    }

    return (
        <div className='consumed-list'>
            <CustomList
                items={
                    consumed?.map(c => {
                        const mappedFood = foods?.find(food => food._id == c.foodId);

                        return {
                            display: mappedFood?.name,
                            key: c._id,
                            action: showFood(mappedFood),
                            secondaryAction: <ConsumedInfo food={mappedFood} />
                        }
                    })
                }
            />

            {foodInfoDialog}
        </div>
    );
}

export default ConsumedList;