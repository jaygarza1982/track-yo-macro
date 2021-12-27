import { useEffect, useState } from 'react';
import axios from 'axios';

export default url => {
    const [returnData, setData] = useState([]);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(url);

                setData(data);
            } catch (error) {
                console.log('Failed to fetch', error);
                setFailed(true);
            }
        })();
    }, []);

    return [returnData, failed];
}