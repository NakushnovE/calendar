import React, {useEffect, useState} from 'react';
import Calendar from "./Calendar";
import BlockEvents from "./BlockEvents";
import ModalAddTask from "./ModalAddTask";
import useFetchEvents from "../hooks/useFetchEvents";
import {IEvents} from "../configs/types";



export const DatePicker: React.FC<boolean | any | IEvents> = () => {

    const [clickedOpenModal, setClickedOpenModal] = useState<boolean | any>(false)
    const [selectedDate, setSelectedDate] = useState<null | any>(0)
    const openModalAddTask = () => {
        setClickedOpenModal(true)
    }
    const getSelectedDate = (selectedDate:any) => {
        setSelectedDate(selectedDate)
    }

    const [{data, isLoading}, setFetch] = useFetchEvents('http://localhost:5000/events')

    useEffect(() => {
        setFetch()
        console.log(data)
    },[setFetch])


    return (
        <div className="dataPicker-container">
            <Calendar openModalAddTask={openModalAddTask} getSelectedDate={getSelectedDate}/>
            <BlockEvents events={data}/>
            {clickedOpenModal ? <ModalAddTask
                setClickedOpenModal={setClickedOpenModal} selectedDate={selectedDate} setFetch={setFetch}/>: null}
        </div>
    );
};


