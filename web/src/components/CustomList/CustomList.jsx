import React from 'react';
import Box from '@mui/material/Box';
import { Divider, ListItem, ListItemButton } from '@mui/material';

const CustomList = ({ items, secondaryAction }) => {
    return (
        <Box>
            {
                items?.map(item => {
                    return (
                        <div key={item.key} className='custom-list-item'>
                            <ListItem
                                component='div'
                                disablePadding
                                secondaryAction={item?.secondaryAction || <></>}
                            >
                                <ListItemButton onClick={item?.action || (() => { })}>
                                    <div className='custom-list-item'>
                                        { item?.display || 'N/A' }
                                    </div>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </div>
                    )
                })
            }
        </Box>
    );
}

export default CustomList;