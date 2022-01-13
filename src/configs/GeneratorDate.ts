export const Weekdays: Array<string> = ['Mon','Tues','Wed','Thu','Fri','Sat','Sun']
export const Months: Array<string> = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export const getDatesOfMonth = (date: Date): { d: Date; classes: string}[] => {

    const today = new Date()
    const checkedToday = new Date(today.getFullYear(), today.getMonth(),today.getDate()).getDate()
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let firstDayOfMonthWeekDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    if(firstDayOfMonthWeekDay == 0) {
        firstDayOfMonthWeekDay = 7
    }
    let dayInWeek = 7
    const lastDayOfMonthWeekDay = lastDayOfMonth.getDay();
    if(firstDayOfMonthWeekDay < 5 || (lastDayOfMonthWeekDay+firstDayOfMonthWeekDay >8 && lastDayOfMonthWeekDay > 4)) {
        dayInWeek =14
    }
    const previousMonth = new Date(date.getFullYear(), date.getMonth(), 0);
    const previousMonthLastDay = new Date(
        previousMonth.getFullYear(),
        previousMonth.getMonth() + 1,
        0
    );
//console.log(firstDayOfMonthWeekDay)
//console.log(lastDayOfMonthWeekDay)


    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0);

    const dates: { d: Date; classes: string}[] = [];

    for (let i = 1; i < firstDayOfMonthWeekDay; i++) {
        dates.push({
            d: new Date(
                previousMonth.getFullYear(),previousMonth.getMonth(),
                previousMonthLastDay.getDate() - firstDayOfMonthWeekDay + i + 1
            ),
            classes: "prevDaysOfMonth",
        });
    }
    for (let i = 0; i < lastDayOfMonth.getDate(); i++) {
        dates.push({
            d: new Date(date.getFullYear(), date.getMonth(), i + 1),
            classes: "",
        });
    }
    for (let i = 0; i < dayInWeek - lastDayOfMonthWeekDay; i++) {
        dates.push({
            d: new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i + 1),
            classes: "nextDaysOfMonth",
        });
    }
    return dates;
};