import React, {useEffect, useState} from 'react';
import "./BlockEvents.css"


const BlockEvents = () => {

const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/events`)
            .then(res => res.json())
            .then(res => setEvents(res))
    }, [])

console.log(events)

    return (
        <div className="notes-container">
            <p className="tittle-events">EVENTS</p>
            <div>
                {events.map(({nameEvent, selectedTime, participants, descriptionEvent}) => (
                    <div className="event-item">
                        <p>{nameEvent} в {selectedTime}</p>
                        <div>Участники: {participants}</div>
                        <div>Описание: {descriptionEvent}</div>
                    </div>
                    )
                )}

            </div>
        </div>
    );
};

export default BlockEvents;