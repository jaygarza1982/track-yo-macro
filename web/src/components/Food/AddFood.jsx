import { AddCircleOutline } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import { useState } from 'react';

const AddFood = () => {

    const [addFoodOpen, setAddFoodOpen] = useState(false);

    return (
        <div className='add-food'>
            <IconButton onClick={() => { setAddFoodOpen(true); }}>
                <AddCircleOutline htmlColor='#0072e5' />
            </IconButton>
            <Dialog open={addFoodOpen} onClose={() => { setAddFoodOpen(false); }}>
                <DialogTitle>
                    Add Food
                </DialogTitle>
                <Paper>
                    {/* TODO: Food info goes here */}
                </Paper>
            </Dialog>
        </div>
    );
}

export default AddFood;