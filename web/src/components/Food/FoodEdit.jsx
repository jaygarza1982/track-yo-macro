import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import FoodChart from './FoodChart';

const FoodEdit = ({ food, submit, submitCallback }) => {

    const formik = useFormik({
        initialValues: {
            name: food?.name || '',
            calories: food?.calories || 0,
            protein: food?.protein || 0,
            fat: food?.fat || 0,
            carbs: food?.carbs || 0,
            description: food?.description || '',
        },
        onSubmit: values => {
            console.log(values);
            if (submit) submit(values);
            if (submitCallback) submitCallback();
        }
    });

    const genTextfield = (label, name, type, autoSelect) => {
        return (
            <TextField
                name={name}
                label={label}
                type={type || 'text'}
                value={formik.values[name]}
                onChange={formik.handleChange}
                autoComplete='off'
                onFocus={autoSelect ? e => e.target.select() : undefined}
            />
        )
    }

    return (
        <div className='food-edit'>
            {genTextfield('Name', 'name', 'text', true)}
            {genTextfield('Calories', 'calories', 'number', true)}
            {genTextfield('Protein', 'protein', 'number', true)}
            {genTextfield('Fat', 'fat', 'number', true)}
            {genTextfield('Carbs', 'carbs', 'number', true)}

            <TextField
                name={'description'}
                label={'Description'}
                value={formik.values.description}
                onChange={formik.handleChange}
                multiline
                autoComplete='off'
            />

            <FoodChart food={food} />

            <Button onClick={formik.handleSubmit}>OK</Button>
        </div>
    );
}

export default FoodEdit;