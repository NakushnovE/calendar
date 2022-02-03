import React, {useEffect, useState} from 'react';
import Calendar from "./Calendar";
import BlockEvents from "./BlockEvents";
import ModalAddTask from "./ModalAddTask";
import useFetchEvents from "../hooks/useFetchEvents";
import {IEvents} from "../configs/types";
import {log} from "util";


export const DatePicker: React.FC<boolean | any | IEvents> = () => {

    const [clickedOpenModal, setClickedOpenModal] = useState<boolean | any>(false)
    const [selectedDay, setSelectedDay] = useState<null | any>(0)
    const [dayFirst, setDayFirst] = useState<any>(0)
    const [dayLast, setDayLast] = useState<any>(0)
    const openModalAddTask = () => {
        setClickedOpenModal(true)
    }
    const getSelectedDay = (Day:any) => {
        setSelectedDay(Day)
    }
    const getDayFirst = (day:any) => {
        setDayFirst(day)
    }
    const getDayLast = (day:any) => {
        setDayLast(day)
    }
const dateOfEvent = selectedDay.valueOf()/1000


 const qwe: number | undefined = (dayFirst.valueOf()/1000)
 const qwq: number | undefined = (dayLast.valueOf()/1000)


    const format = (day: any) => {
        const addZeroDate = (num: number) => {
            return  num < 10? "0" + num: num
        }
        let a = new Date(day*1000)
        let dmg = `${addZeroDate(a.getDate())}.${addZeroDate(a.getMonth()+1)}.${a.getFullYear()}`
        return dmg
    }
    const formatDate = format(dateOfEvent)

const url = `http://localhost:5000/events?dateOfEvent_gte=${qwe}&dateOfEvent_lte=${qwq}`
    console.log(url)
    console.log(dateOfEvent)
    console.log(formatDate)
    const [{events, isLoading}, setFetch] = useFetchEvents(url)

    useEffect(() => {
        setFetch()
        console.log(events)
    },[setFetch, url])

    //console.log(url)
    return (
        <div className="dataPicker-container">
            <Calendar openModalAddTask={openModalAddTask} getSelectedDay={getSelectedDay} getDayFirst={getDayFirst} getDayLast={getDayLast}/>
            <BlockEvents events={events} format={format}/>
            {clickedOpenModal ? <ModalAddTask
                setClickedOpenModal={setClickedOpenModal} dateOfEvent={dateOfEvent} setFetch={setFetch} format={format}/>: null}
        </div>
    );
};


