import React from 'react';

const ConsumedInfo = ({ consumed, food }) => {

    // If parameters are undefined
    const { calories, protein, carbs } = (food || {});
    const { timeConsumedEpoch } = (consumed || {});

    const formatTime = date => {
        try {
            return date.toLocaleString().split(',')[1];
        } catch (error) {
            console.log('Could not format date', error);
        }
    }

    return (
        <div className='consumed-info'>
            <strong>
                {timeConsumedEpoch && `${formatTime(new Date(timeConsumedEpoch))} `}
            </strong>
            { calories && `${calories} kcal `}
            { protein && `${protein} protein `}
            { carbs && `${carbs} carbs `}
        </div>
    );
}

export default ConsumedInfo;