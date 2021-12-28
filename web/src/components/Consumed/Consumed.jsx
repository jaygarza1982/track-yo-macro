import React from 'react';
import useFetch from '../Hooks/useFetch';
import ConsumedList from './ConsumedList';

const Consumed = () => {

    const [foods] = useFetch('/api/food/list');
    const [consumed,, loadConsumed] = useFetch('/api/consumed/list');

    return (
        <div className='consumed'>
            <ConsumedList
                foods={foods}
                consumed={consumed}
            />
        </div>
    );
}

export default Consumed;