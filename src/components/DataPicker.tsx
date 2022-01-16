import React, {useState} from 'react';
import Calendar from "./Calendar";
import BlockEvents from "./BlockEvents";
import ModalAddTask from "./ModalAddTask";



export const DataPicker: React.FC<boolean | any> = () => {

    const [clickedOpenModal, setClickedOpenModal] = useState<boolean | any>(false)
    const [selectedDate, setSelectedDate] = useState<null | any>(0)
    const openModalAddTask = () => {
        setClickedOpenModal(true)
    }
    const getSelectedDate = (selectedDate:any) => {
        setSelectedDate(selectedDate)
       // console.log(selectedDate)
    }

    return (
        <div className="dataPicker-container">
            <Calendar openModalAddTask={openModalAddTask} getSelectedDate={getSelectedDate}/>
            <BlockEvents/>
            {clickedOpenModal ? <ModalAddTask  setClickedOpenModal={setClickedOpenModal} selectedDate={selectedDate}/>: null}
        </div>
    );
};


