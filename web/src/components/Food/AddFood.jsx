import { AddCircleOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import FoodEdit from './FoodEdit';
import axios from 'axios';
import useDialog from '../Hooks/useDialog';

const AddFood = ({ reloadFoods }) => {

    const handleClose = () => { foodDialogOpen(false); }

    const foodEdit = (
        <FoodEdit
            submit={async values => {
                try {
                    await axios.post('/api/food/add', values, {
                        headers: {
                            'Authorization': window.localStorage.getItem('authToken')
                        }
                    });
                    if (reloadFoods) reloadFoods();
                } catch (error) {
                    console.log('Could not submit food edit', error);
                }
            }}
            submitCallback={handleClose}
        />
    )

    const [foodDialog, foodDialogOpen] = useDialog('Add Food', foodEdit);

    return (
        <div className='add-food-container'>
            <div className='add-food-button'>
                <IconButton onClick={() => { foodDialogOpen(true); }}>
                    <AddCircleOutline htmlColor='#0072e5' />
                </IconButton>
            </div>
            {foodDialog}
        </div>
    );
}

export default AddFood;