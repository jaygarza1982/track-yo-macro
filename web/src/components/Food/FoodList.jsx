import { IconButton } from '@mui/material';
import React from 'react';
import CustomList from '../CustomList/CustomList';
import { AddCircleOutline } from '@mui/icons-material';
import axios from 'axios';

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

    return (
        <div className='food-list'>
            <CustomList
                items={
                    foods?.map(food => {
                        return {
                            display: food.name,
                            key: food._id,
                            // TODO: Dialog box with food info
                            action: () => { console.log('Food clicked', food); },
                            secondaryAction: (
                                <IconButton onClick={() => { consumeFood(food); }}>
                                    <AddCircleOutline />
                                </IconButton>
                            ),
                        }
                    })
                }
            />
        </div>
    );
}

export default FoodList;