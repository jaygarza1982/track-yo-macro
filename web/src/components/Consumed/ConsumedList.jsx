import React from 'react';
import CustomList from '../CustomList/CustomList';
import ConsumedInfo from './ConsumedInfo';

const ConsumedList = ({ foods, consumed }) => {
    return (
        <div className='consumed-list'>
            <CustomList
                items={
                    consumed?.map(c => {
                        const mappedFood = foods?.find(food => food._id == c.foodId);

                        return {
                            display: mappedFood?.name,
                            key: c._id,
                            // TODO: Dialog box with consume info
                            action: () => { console.log('Consumed clicked', c); },
                            secondaryAction: <ConsumedInfo food={mappedFood} />
                        }
                    })
                }
            />
        </div>
    );
}

export default ConsumedList;