export interface Dates {
    classes: string;
    d: number | any;
    active: boolean;
}

export interface Weekday {
    letter: string;
}
export interface Modal {
    visible: boolean,
    title: string,
    description: string
}
export interface IOp {
    type: string
}
export  interface IEvents {
    dateOfEvent: number | string,
    nameEvent: string,
    selectedTime: string,
    participants: Array<string>,
    descriptionEvent: string,
    id: number
}