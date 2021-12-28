import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import CustomList from '../CustomList/CustomList';
import { AddCircleOutline } from '@mui/icons-material';
import axios from 'axios';
import useDialog from '../Hooks/useDialog';
import FoodEdit from './FoodEdit';

const FoodList = ({ foods }) => {

    const consumeFood = async food => {
        try {
            const consumed = {
                foodId: food?._id,
                quantity: 1,
                timeConsumedEpoch: new Date().getTime(),
            }

            await axios.post('/api/consumed/add', consumed);
        } catch (error) {
            console.log('Could not consume food', error);
        }
    }

    const [selectedFood, setSelectedFood] = useState({});
    const [foodInfoDialog, setFoodInfoOpen] = useDialog('Food Info', <FoodEdit food={selectedFood} />);

    const showFood = food => {
        return () => {
            setSelectedFood(food);
            setFoodInfoOpen(true);
        }
    }

    return (
        <div className='food-list'>
            <CustomList
                items={
                    foods?.map(food => {
                        return {
                            display: food.name,
                            key: food._id,
                            action: showFood(food),
                            secondaryAction: (
                                <IconButton onClick={() => { consumeFood(food); }}>
                                    <AddCircleOutline />
                                </IconButton>
                            ),
                        }
                    })
                }
            />

            {foodInfoDialog}
        </div>
    );
}

export default FoodList;