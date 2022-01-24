import {useCallback, useEffect, useState} from 'react';
import axios from "axios";


const useFetchEvents = (url:any) => {

    const [events, setEvents] = useState<any | string>([])
    const [option, setOption] = useState({})
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const setFetch:any = useCallback((option = {}) => {
        setOption(option)
        setIsLoading(true)
    }, []);


    useEffect(() => {
        if(!isLoading) {
            return
        }
        const fetchData = async () => {
            const res = await axios(url, option)
            setEvents(res.data)
            setIsLoading(false)
        }
        fetchData()
        }, [isLoading, option, url])


    return [{events, isLoading}, setFetch]
};

export default useFetchEvents;