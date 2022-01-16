import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import CustomList from '../CustomList/CustomList';
import { AddCircleOutline, Delete } from '@mui/icons-material';
import axios from 'axios';
import useDialog from '../Hooks/useDialog';
import FoodEdit from './FoodEdit';
import useDeleteDialog from '../Hooks/useDeleteDialog';

const FoodList = ({ foods, reloadFoods }) => {

    const consumeFood = async food => {
        // TODO: Show snackbar of success
        try {
            const consumed = {
                foodId: food?._id,
                quantity: 1,
                timeConsumedEpoch: new Date().getTime(),
            }

            await axios.post('/api/consumed/add', consumed, {
                headers: {
                    'Authorization': window.localStorage.getItem('authToken')
                }
            });
        } catch (error) {
            console.log('Could not consume food', error);
        }
    }

    const closeFood = () => {
        setFoodInfoOpen(false);
    }

    const promptDeleteFood = food => {
        return () => {
            setSelectedFood(food);
            setFoodDeleteOpen(true);
        }
    }

    const deleteFood = async () => {
        try {
            await axios.post('/api/food/delete', { _id: selectedFood?._id }, {
                headers: {
                    'Authorization': window.localStorage.getItem('authToken')
                }
            });

            if (reloadFoods) reloadFoods();
            setFoodDeleteOpen(false);
        } catch (error) {
            console.log('Could not delete food', error);
        }
    }

    const [selectedFood, setSelectedFood] = useState({});
    const [foodInfoDialog, setFoodInfoOpen] = useDialog('Food Info', <FoodEdit submitCallback={closeFood} food={selectedFood} />);
    const [foodDeleteDialog, setFoodDeleteOpen] = useDeleteDialog(selectedFood?.name || 'N/A', deleteFood);

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
                                <>
                                    <IconButton onClick={promptDeleteFood(food)}>
                                        <Delete />
                                    </IconButton>
                                    <IconButton onClick={() => { consumeFood(food); }}>
                                        <AddCircleOutline />
                                    </IconButton>
                                </>
                            ),
                        }
                    })
                }
            />

            {foodInfoDialog}
            {foodDeleteDialog}
        </div>
    );
}

export default FoodList;