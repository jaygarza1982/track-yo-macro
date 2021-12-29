import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';

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
            if (submit) submit(values);
            if (submitCallback) submitCallback();
        }
    });

    return (
        <div className='food-edit'>
            {/* TODO: Function to generate a textfield for reuse and cleaner code
            So genText('Name') would make a textfield with the required formik as well as autocomplete off and onFocus set */}
            <TextField
                name={'name'}
                label={'Name'}
                value={formik.values.name}
                onChange={formik.handleChange}
                autoComplete='off'
                onFocus={e => e.target.select()}
            />
            <TextField
                name={'calories'}
                label={'Calories'}
                type={'number'}
                value={formik.values.calories}
                onChange={formik.handleChange}
                autoComplete='off'
                onFocus={e => e.target.select()}
            />
            <TextField
                name={'protein'}
                label={'Protein'}
                type={'number'}
                value={formik.values.protein}
                onChange={formik.handleChange}
                autoComplete='off'
                onFocus={e => e.target.select()}
            />
            <TextField
                name={'fat'}
                label={'Fat'}
                type={'number'}
                value={formik.values.fat}
                onChange={formik.handleChange}
                autoComplete='off'
                onFocus={e => e.target.select()}
            />
            <TextField
                name={'carbs'}
                label={'Carbs'}
                type={'number'}
                value={formik.values.carbs}
                onChange={formik.handleChange}
                autoComplete='off'
                onFocus={e => e.target.select()}
            />
            {/* TODO: Make multi line */}
            <TextField
                name={'description'}
                label={'Description'}
                value={formik.values.description}
                onChange={formik.handleChange}
                autoComplete='off'
            />
            <Button onClick={formik.handleSubmit}>OK</Button>
        </div>
    );
}

export default FoodEdit;