import React, {useEffect, useState} from 'react';
import "./BlockEvents.css"
import {IEvents} from "../configs/types";
import useGetEvents from "../hooks/useGetEvents";


const BlockEvents = () => {

/*const [events, setEvents] = useState<any | string>([])

    useEffect(() => {
        fetch(`http://localhost:5000/events`)
            .then(res => res.json())
            .then(res => setEvents(res))
    }, [])*/

    // @ts-ignore
    const [events, setEvents] = useGetEvents<any | string>([])
console.log(events)

    return (
        <div className="event-container">
            <p className="tittle-events">EVENTS</p>
            <div className="events-block">
                 {events.map((event: IEvents | any | undefined | null) => (
                    <div className="event-item">
                        <p><b>{event.selectedDate}</b></p>
                        <p><b>{event.nameEvent}</b></p>
                        <div><b>Время:</b> {event.selectedTime}</div>
                        <div><b>Участники: </b>
                            {event.participants.join(', ')}
                        </div>
                        <div><b>Описание:</b> {event.descriptionEvent}</div>
                    </div>
                    )
                )}
            </div>
        </div>
    );
};

export default BlockEvents;