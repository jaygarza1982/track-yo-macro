import { AddCircleOutline } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import { useState } from 'react';
import FoodEdit from './FoodEdit';
import axios from 'axios';

const AddFood = ({ reloadFoods }) => {

    const [addFoodOpen, setAddFoodOpen] = useState(false);

    const handleClose = () => { setAddFoodOpen(false); }

    return (
        <div className='add-food'>
            <IconButton onClick={() => { setAddFoodOpen(true); }}>
                <AddCircleOutline htmlColor='#0072e5' />
            </IconButton>
            <Dialog open={addFoodOpen} onClose={handleClose}>
                <DialogTitle>
                    Add Food
                </DialogTitle>
                <Paper>
                    <FoodEdit
                        submit={async values => {
                            try {
                                await axios.post('/api/food/add', values);
                                if (reloadFoods) reloadFoods();
                            } catch (error) {
                                console.log('Could not submit food edit', error);
                            }
                        }}
                        submitCallback={handleClose}
                    />
                </Paper>
            </Dialog>
        </div>
    );
}

export default AddFood;