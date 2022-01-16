import React, {useState} from 'react';
import {getDatesOfMonth, Months, Weekdays} from "../configs/GeneratorDate";
import {Dates} from "../configs/types";





export const Calendar: React.FC<{} | any | boolean> = ({openModalAddTask, getSelectedDate}) => {

    const [dayOfMonth, setDayOfMonth] = useState<any>(new Date())
    const [selectedDate, setSelectedDate] = useState<null | any>(0)


    const handleSelectedDate = (e: any) => {
        setSelectedDate(formattedDate(e))

    }
    getSelectedDate(selectedDate)
    const formattedDate = (date: any) => {
        const formatted: string = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        return formatted
    }

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


    console.log(selectedDate)
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

