import { useEffect, useState } from 'react';
import axios from 'axios';

export default (url, axiosHeaders) => {
    const [returnData, setData] = useState([]);
    const [failed, setFailed] = useState(false);

    const load = async () => {
        try {
            // Pass axios headers if exists, pass nothing if not
            const { data } = await axios.get(url, axiosHeaders ? { headers: axiosHeaders } : undefined);

            setData(data);
        } catch (error) {
            console.log('Failed to fetch', error);
            setFailed(true);
        }
    }

    useEffect(() => {
        load();
    }, []);

    return [returnData, failed, load];
}