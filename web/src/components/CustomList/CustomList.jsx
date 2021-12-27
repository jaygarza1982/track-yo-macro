import React from 'react';
import Box from '@mui/material/Box';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

const CustomList = ({ items }) => {
    return (
        <Box>
            {
                items?.map(item => {
                    return (
                        <ListItem key={item.key} component='div' disablePadding>
                            <ListItemButton onClick={item?.action || (() => {})}>
                                <ListItemText primary={item?.display || 'N/A'} />
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </Box>
    );
}

export default CustomList;