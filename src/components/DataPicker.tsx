import React, {useState} from 'react';
import Calendar from "./Calendar";
import BlockEvents from "./BlockEvents";
import ModalAddTask from "./ModalAddTask";



export const DataPicker: React.FC<boolean | any> = () => {

    const [clickedOpenModal, setClickedOpenModal] = useState<boolean | any>(false)
    const openModalAddTask = () => {
        setClickedOpenModal(true)
    }

    return (
        <div className="dataPicker-container">
            <Calendar openModalAddTask={openModalAddTask}/>
            <BlockEvents/>
            {clickedOpenModal ? <ModalAddTask  setClickedOpenModal={setClickedOpenModal} />: null}
        </div>
    );
};


