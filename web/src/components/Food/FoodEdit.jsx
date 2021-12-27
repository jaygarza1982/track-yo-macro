import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';

const FoodEdit = ({ food, submit, submitCallback }) => {

    const formik = useFormik({
        initialValues: {
            name: food?.name || '',
            description: food?.description || '',
        },
        onSubmit: values => {
            if (submit) submit(values);
            if (submitCallback) submitCallback();
        }
    });

    return (
        <div className='food-edit'>
            <TextField
                name={'name'}
                label={'Name'}
                value={formik.values.name}
                onChange={formik.handleChange}
                autoComplete='off'
            />
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