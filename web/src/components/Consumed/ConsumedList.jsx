import React from 'react';
import CustomList from '../CustomList/CustomList';
import useDialog from '../Hooks/useDialog';
import ConsumedInfo from './ConsumedInfo';
import FoodEdit from '../Food/FoodEdit';
import { useState } from 'react';
import { Box, Divider, ListItem, ListItemButton } from '@mui/material';

const ConsumedList = ({ foods, consumed }) => {

    const [selectedFood, setSelectedFood] = useState({});
    const [foodInfoDialog, setFoodInfoOpen] = useDialog('Food Info', <FoodEdit food={selectedFood} />);

    const showFood = food => {
        return () => {
            setSelectedFood(food);
            setFoodInfoOpen(true);
        }
    }

    const items = consumed?.map(c => {
        const mappedFood = foods?.find(food => food._id == c.foodId);

        return {
            display: mappedFood?.name,
            key: c._id,
            action: showFood(mappedFood),
            subDisplay: <ConsumedInfo consumed={c} food={mappedFood} />
        }
    })

    return (
        <div className='consumed-list'>
            <Box className='custom-list'>
                {
                    items?.map(item => {
                        return (
                            <div key={item.key} className='custom-list-item'>
                                <ListItem
                                    component='div'
                                    disablePadding
                                >
                                    {/* TODO: Message if consumed is empty or undefined like 'Nothing consumed for this date' */}
                                    <ListItemButton onClick={item?.action || (() => { })}>
                                        <div className='custom-list-item'>
                                            {item?.display || 'N/A'}
                                            {item.subDisplay || ''}
                                        </div>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </div>
                        )
                    })
                }
            </Box>
            {foodInfoDialog}
        </div>
    );
}

export default ConsumedList;