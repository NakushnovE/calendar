import {useEffect, useState} from 'react';

const useGetEvents = () => {

    const [events, setEvents] = useState<any | string>([])

    useEffect(() => {
        fetch(`http://localhost:5000/events`)
            .then(res => res.json())
            .then(res => setEvents(res))
    }, [setEvents])
console.log(events)
    return [events]
};

export default useGetEvents;