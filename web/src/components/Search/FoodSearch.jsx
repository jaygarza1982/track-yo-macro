import { TextField } from '@mui/material';
import React, { useState } from 'react';

const FoodSearch = ({ foods, setShownFoods }) => {

    const [search, setSearch] = useState('');

    const foodSearch = value => {
        // Show all foods if empty search
        if (value?.trim() == '') {
            setShownFoods(foods);
            return;
        }

        const lowerValue = value?.toLowerCase();

        let matchedFoods = [];

        foods?.forEach(food => {
            if (food?.name?.toLowerCase()?.includes(lowerValue)) {
                matchedFoods.push(food);
            }
        });

        setShownFoods(matchedFoods);
    }

    const handleSearchChange = e => {
        const { value } = e.target;
        setSearch(value);
        foodSearch(value);
    }

    return (
        <div className='food-search'>
            <TextField
                label={'Search'}
                type={'text'}
                value={search}
                onChange={handleSearchChange}
                autoComplete='off'
                onFocus={e => e.target.select()}
            />
        </div>
    );
}

export default FoodSearch;