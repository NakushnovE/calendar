import React, {useEffect, useState} from 'react';
import {getDatesOfMonth, Months, Weekdays} from "../configs/GeneratorDate";
import {Dates} from "../configs/types";




export const Calendar: React.FC<{} | any | boolean> = ({openModalAddTask, getSelectedDay, getDayFirst, getDayLast}) => {

    const [dayOfMonth, setDayOfMonth] = useState<any>(new Date())
    const [selectedDate, setSelectedDate] = useState<null | any>(0)
    const [selectedDay, setSelectedDay] = useState<null | any>(0)
    const [firstDay, setFirstDay] = useState<null | any>(0)
    const [lastDay, setLastDay] = useState<null | any>(0)




    const handleSelectedDate = (e: any) => {
        setSelectedDate(formattedDate(e))
        setSelectedDay(e)
    }

    const addZeroDate = (num: number) => {
       return  num < 10? "0" + num: num
    }


    getSelectedDay(selectedDay)

    const formattedDate = (date: any | number | string) => {
        const formatted: string = `${addZeroDate(date.getDate())}.${addZeroDate(date.getMonth() + 1)}.${date.getFullYear()}`
        return formatted
    }


    const today = new Date()
    const monthIndex = dayOfMonth.getMonth()

    const blockOfDaysOfMonth: { d: Date; classes: string}[] = getDatesOfMonth(dayOfMonth)

    const handlePrevMonth = () =>  {
        setDayOfMonth(() => new Date(dayOfMonth.getFullYear(), dayOfMonth.getMonth() - 1, 1))

        console.log(dayOfMonth)
    }
    const handleNextMonth = () =>  {
        setDayOfMonth(() => new Date(dayOfMonth.getFullYear(), dayOfMonth.getMonth() + 1, 1))

    }

 useEffect(() => {
     setFirstDay(blockOfDaysOfMonth[0].d)
     setLastDay(blockOfDaysOfMonth[blockOfDaysOfMonth.length-1].d)
 }, [dayOfMonth])



    //const first: any = blockOfDaysOfMonth[0].d
    //const last:any = blockOfDaysOfMonth[blockOfDaysOfMonth.length-1].d



    getDayFirst(firstDay)
    getDayLast(lastDay)


    const generateWeeks = (obj: { d: Date; classes: string }[]) => {
        let daysInWeek = 7;
        let monthDividedWeek: Dates[] | any = [];
        for(let i = 0; i < obj.length; i+= daysInWeek) {
            monthDividedWeek.push(obj.slice(i, i+daysInWeek))
        }
        return monthDividedWeek;
    }
     const weekOfMonth: Dates[] | any = generateWeeks(blockOfDaysOfMonth)





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

