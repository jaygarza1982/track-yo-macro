import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const FoodChart = ({ food }) => {

    // If we are not given a food prop, do not render
    if (!food) return <></>

    const fat = food?.fat || 0;
    const protein = food?.protein || 0;
    const carbs = food?.carbs || 0;

    const nutritionSum = fat + protein + carbs;

    // Do not display chart if sum of macros is <= 0
    if (nutritionSum <= 0) return <></>

    const proteinPercent = (protein / nutritionSum) * 100;
    const carbsPercent = (carbs / nutritionSum) * 100;
    const fatPercent = (fat / nutritionSum) * 100;

    return (
        <div className='food-chart' style={{ width: '50%', height: '50%', margin: 'auto'}}>
            <PieChart
                // Only display label if data has value
                label={({ dataEntry }) => (dataEntry.value > 0 ? dataEntry.title : '')}
                labelStyle={{ fontSize: '0.5rem' }}
                data={[
                    // TODO: Find better colors
                    { title: 'Fat', value: fatPercent, color: '#E38627' },
                    { title: 'Carbs', value: carbsPercent, color: '#6A2135' },
                    { title: 'Protein', value: proteinPercent, color: '#C13C37' },
                ]}
            />
        </div>
    );
}

export default FoodChart;