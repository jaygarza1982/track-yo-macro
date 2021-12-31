import React, { useEffect, useState } from 'react';

const ConsumedMacro = ({ title, value, target }) => {
    return (
        <div className='consumed-macro'>
            <h4>{value} / {target || 0}</h4>
            <h4>{title}</h4>
        </div>
    )
}

const ConsumedMacros = ({ foods, consumed }) => {

    const [macros, setMacros] = useState({
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
    });

    useEffect(() => {
        if (foods && consumed) {
            const mappedFood = consumed.map(c => {
                return foods.find(f => f._id == c.foodId);
            });

            console.log('New mapped food', mappedFood);

            let newMacros = {
                calories: 0,
                protein: 0,
                fat: 0,
                carbs: 0,
            };

            mappedFood.forEach(f => {
                newMacros = {
                    // Foods do not have to have every macro, so we default to 0 if missing
                    calories: newMacros.calories + (f.calories || 0),
                    protein: newMacros.protein + (f.protein || 0),
                    fat: newMacros.fat + (f.fat || 0),
                    carbs: newMacros.carbs + (f.carbs || 0),
                }
            });
            
            setMacros(newMacros);            
        }
    }, [consumed]);
    
    return (
        <div className='consumed-macros'>
            <ConsumedMacro
                title={'Calories'}
                value={macros.calories}
                target={2000}
            />
            <ConsumedMacro
                title={'Protein'}
                value={macros.protein}
                target={180}
            />
            <ConsumedMacro
                title={'Fat'}
                value={macros.fat}
                target={65}
            />
            <ConsumedMacro
                title={'Carbs'}
                value={macros.carbs}
                target={250}
            />
        </div>
    );
}

export default ConsumedMacros;