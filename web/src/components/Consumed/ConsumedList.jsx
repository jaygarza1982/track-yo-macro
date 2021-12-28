import React from 'react';
import CustomList from '../CustomList/CustomList';

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
                        }
                    })
                }
            />
        </div>
    );
}

export default ConsumedList;