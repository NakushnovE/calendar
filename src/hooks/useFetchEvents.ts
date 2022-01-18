import {useEffect, useState} from 'react';


const useFetchEvents = (url:any) => {

    const [events, setEvents] = useState<any | string>([])

    function fetchEvents(url:any) {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setEvents(res)
            })
    }

    useEffect(() => {
        if(url) {
            fetchEvents(url)
        }
    }, [])
console.log(events)



    return {events, fetchEvents}
};

export default useFetchEvents;