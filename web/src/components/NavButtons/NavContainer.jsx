import { FormatListBulleted, FoodBank, QueryStats } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavContainer = props => {

    const navigate = useNavigate();

    return (
        <>
            {
                true && (
                    <div className='nav-button-container'>
                        <div className='nav-button-grid'>
                            <div className='nav-button'>
                                <IconButton onClick={() => { navigate('/'); }}>
                                    <FormatListBulleted />
                                </IconButton>
                            </div>
                            <div className='nav-button'>
                                <IconButton>
                                    <FoodBank />
                                </IconButton>
                            </div>
                            <div className='nav-button'>
                                <IconButton>
                                    <QueryStats onClick={() => { navigate('/'); }} />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default NavContainer;