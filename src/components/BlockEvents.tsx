import React, {useEffect, useState} from 'react';
import "./BlockEvents.css"


const BlockEvents = () => {

const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/events`)
            .then(res => res.json())
            .then(res => setEvents(res))
    }, [])



    return (
        <div className="event-container">
            <p className="tittle-events">EVENTS</p>
            <div className="events-block">
                {events.map(({nameEvent, selectedTime, participants, descriptionEvent, selectedDate}) => (
                    <div className="event-item">
                        <p><b>{selectedDate}</b></p>
                        <p><b>{nameEvent}</b></p>
                        <div><b>Время:</b> {selectedTime}</div>
                        <div><b>Участники:</b> {participants}</div>
                        <div><b>Описание:</b> {descriptionEvent}</div>
                    </div>
                    )
                )}
            </div>
        </div>
    );
};

export default BlockEvents;