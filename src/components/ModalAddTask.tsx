import React, {useState} from 'react';
import './ModalAddTask.css'

const ModalAddTask = ({setClickedOpenModal, selectedDate, setFetch}:any | string) => {

    const timeZone = ["7:00","7:30","8:00","8:30","9:00","8:30","10:00","10:30","11:00","11:30","12:00","12:30"]

    const [nameEvent, setNameEvent] = useState("")
    const [descriptionEvent, setDescriptionEvent] = useState("")
    const [selectedTime,setSelectedTime] = useState("7:00")
    const [inputParticipants, setInputParticipants] = useState("")
    const [participants, setParticipants] = useState<any>([])


    const handleAddParticipants = (e:any) => {
        e.preventDefault();
        setParticipants([...participants, inputParticipants])
        setInputParticipants("")
    }
console.log(selectedDate)
 const event = {
     selectedDate,
     nameEvent,
     selectedTime,
     participants,
     descriptionEvent
 }
    const handleEventSave = (e:any) => {
        e.preventDefault()

        fetch(`http://localhost:5000/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })

        setClickedOpenModal(false)
        setFetch()
    }



    console.log(event)
    return (
        <div className="modal" onClick={() => setClickedOpenModal(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <form className="form-modal">
                    <button className="close-modal" onClick={()=> setClickedOpenModal(false)}>X</button>
                    <div className="tittle-modal">{selectedDate}</div>
                    <div className="name note">
                        <p>Name</p>
                        <input value={nameEvent} onChange={e => setNameEvent(e.target.value)} className=""></input>
                    </div>
                    <div>
                        <p>Time</p>
                        <select value={selectedTime} onChange={e=>setSelectedTime(e.target.value)} className="time-note">
                            {timeZone.map(item => (
                                <option>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="participants-note">
                        <p>Participants</p><input value={inputParticipants} onChange={e=> setInputParticipants(e.target.value)}/>
                        <button onClick={handleAddParticipants}>+</button>
                        <p>{participants.toString()}</p>
                    </div>
                    <div className="desc note">
                        <p>Description</p>
                        <textarea value={descriptionEvent} onChange={e => setDescriptionEvent(e.target.value)} className="description-modal"></textarea>
                    </div>

                    <button className="save-note" onClick={handleEventSave} >Save</button>
                </form>

            </div>

        </div>
    );
};

export default ModalAddTask;

//Требования:
// — добавление события (название, дата-время,
// участники, описание);
// — просмотр события по клику на него;
// — редактирование атрибутов события