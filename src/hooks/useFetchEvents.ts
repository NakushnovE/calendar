import {useCallback, useEffect, useState} from 'react';
import axios from "axios";


const useFetchEvents = (url:any) => {

    const [data, setData] = useState<any | string>([])
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
            setData(res.data)
            setIsLoading(false)
        }
        fetchData()
        }, [isLoading, option, url])


    return [{data, isLoading}, setFetch]
};

export default useFetchEvents;