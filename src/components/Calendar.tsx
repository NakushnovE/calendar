import React, {useState} from 'react';
import {getDatesOfMonth, Months, Weekdays} from "../configs/GeneratorDate";
import {Dates} from "../configs/types";
import useFetchEvents from "../hooks/useFetchEvents";





export const Calendar: React.FC<{} | any | boolean> = ({openModalAddTask, getSelectedDate}) => {

    const [dayOfMonth, setDayOfMonth] = useState<any>(new Date())
    const [selectedDate, setSelectedDate] = useState<null | any>(0)

    const {events, fetchEvents} = useFetchEvents('http://localhost:5000/events')
    console.log(events)

    const handleSelectedDate = (e: any) => {
        setSelectedDate(formattedDate(e))
    }

    const addZeroDate = (num: number) => {
       return  num < 10? "0" + num: num
    }

    getSelectedDate(selectedDate)
    const formattedDate = (date: any | number | string) => {

        const formatted: string = `${addZeroDate(date.getMonth() + 1)}.${addZeroDate(date.getDate())}.${date.getFullYear()}`

        return formatted
    }
    console.log(selectedDate)
    const today = new Date()
    const monthIndex = dayOfMonth.getMonth()

    const handlePrevMonth = () =>  {
        setDayOfMonth(() => new Date(dayOfMonth.getFullYear(), dayOfMonth.getMonth() - 1, 1))
    }
    const handleNextMonth = () =>  {
        setDayOfMonth(() => new Date(dayOfMonth.getFullYear(), dayOfMonth.getMonth() + 1, 1))
    }

    const mo: { d: Date; classes: string}[] = getDatesOfMonth(dayOfMonth)


    const generateWeeks = (obj: { d: Date; classes: string }[]) => {
        let daysInWeek = 7;
        let monthDividedWeek: Dates[] | any = [];
        for(let i = 0; i < obj.length; i+= daysInWeek) {
            monthDividedWeek.push(obj.slice(i, i+daysInWeek))
        }
        return monthDividedWeek;
    }
     const weekOfMonth: Dates[] | any = generateWeeks(mo)



    return (
        <div className="calendar-container">
            <div className="selection-month">
                <button className="btn-selection-month" onClick={handlePrevMonth}>{'<'}</button>
                {`${Months[monthIndex]} ${dayOfMonth.getFullYear()}`}
                <button className="btn-selection-month" onClick={handleNextMonth}>{'>'}</button>
            </div>
            <table className="">
                <thead>
                    <tr>
                        {Weekdays.map(weekDay => {
                          return  <th className={weekDay == "Sat" || weekDay == "Sun"? "dayOff": ""}>{weekDay}</th>
                        })}
                    </tr>
                </thead>
                <tbody className="bodyCalendar">
                {
                    weekOfMonth.map((week: any[]) => {
                        return <tr>
                            {week.map(day => (
                                <td className={`${day.classes} ${formattedDate(day.d) == selectedDate ? "selected":""} ${formattedDate(day.d) == formattedDate(today)?"today" : ""}`}
                                    onClick={()=>handleSelectedDate(day.d)}
                                    onDoubleClick={openModalAddTask}
                                >
                                    {day.d.getDate()}
                                </td>
                            ))}
                        </tr>
                    })
                }
                </tbody>
            </table>


        </div>
    );
};

export default Calendar;

