import React from 'react';

const ConsumedInfo = ({ food }) => {

    // If food is undefined
    const { calories, protein, carbs } = (food || {});

    return (
        <div className='consumed-info'>
            { calories && `${calories} kcal `}
            { protein && `${protein} protein `}
            { carbs && `${carbs} carbs `}
        </div>
    );
}

export default ConsumedInfo;