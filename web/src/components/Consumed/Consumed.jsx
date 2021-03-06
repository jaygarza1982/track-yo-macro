import React, { useState } from 'react';
import useFetch from '../Hooks/useFetch';
import ConsumedList from './ConsumedList';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { TextField } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useEffect } from 'react';
import ConsumedMacros from './ConsumedMacros';

const Consumed = () => {

    const [foods] = useFetch('/api/food/list', {
        'Authorization': window.localStorage.getItem('authToken')
    });
    const [consumed,, loadConsumed] = useFetch('/api/consumed/list', {
        'Authorization': window.localStorage.getItem('authToken')
    });

    const [consumedFiltered, setConsumedFiltered] = useState(consumed);
    const [consumedDate, setConsumedDate] = useState(new Date());

    // On load, set date and filter to load today's consumed
    useEffect(() => {
        handleDateChange(new Date());
    }, [consumed]);

    const handleDateChange = date => {
        setConsumedDate(date);

        // Filter consumed food by selected date
        setConsumedFiltered(
            consumed?.filter(c => {
                const { timeConsumedEpoch } = c;
                const consumedDate = new Date(timeConsumedEpoch);

                const consumedDateString = consumedDate.toISOString().split('T')[0];
                const selectedDateString = date.toISOString().split('T')[0];

                return consumedDateString == selectedDateString;
            })
        );
    }

    return (
        <div className='consumed'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div style={{ padding: 10 }}>
                    <MobileDatePicker
                        label="Date Consumed"
                        inputFormat="MM/dd/yyyy"
                        value={consumedDate}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </div>
            </LocalizationProvider>
            <ConsumedMacros
                foods={foods}
                consumed={consumedFiltered}
            />
            <ConsumedList
                foods={foods}
                consumed={consumedFiltered}
            />
        </div>
    );
}

export default Consumed;