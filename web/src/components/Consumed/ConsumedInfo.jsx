import React from 'react';

const ConsumedInfo = ({ consumed, food }) => {

    // If parameters are undefined
    const { calories, protein } = (food || {});
    const { timeConsumedEpoch } = (consumed || {});

    const formatTime = date => {
        try {
            const [hour, minute] = date.toLocaleString().split(',')[1].split(':').splice(0, 2);
            const amPM = date.toLocaleString().split(',')[1].split(' ')[2];

            return `${hour}:${minute} ${amPM}`;
        } catch (error) {
            console.log('Could not format date', error);
        }
    }

    return (
        <div className='consumed-info'>
            <div>
                {timeConsumedEpoch && `${formatTime(new Date(timeConsumedEpoch))} `}
            </div>
            <div>{calories && `${calories} kcal`}</div>
            <div>{protein && `${protein} protein`}</div>
        </div>
    );
}

export default ConsumedInfo;