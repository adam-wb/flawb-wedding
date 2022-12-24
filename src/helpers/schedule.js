export const CEREMONY = new Date("06/04/2023, 13:30");
export const DRINKS_RECEPTION = new Date("06/04/2023, 14:30");
export const WEDDING_BREAKFAST = new Date("06/04/2023, 15:30");
export const EVENING_RECEPTION = new Date("06/04/2023, 19:30");
export const CARRIAGES = new Date("06/05/2023, 00:00");
export const MORNING_BREAKFAST = new Date("06/05/2023, 7:30");
export const MORNING_BREAKFAST_END = new Date("06/05/2023, 10:00");
export const CHECKOUT = new Date("06/05/2023, 11:00");

export const toSimpleTimeString = (date) => {
    const hours = date.getHours();
    const minutes = date.toTimeString().substring(2, 5)
    const suffix = hours >= 12 ? "pm" : "am";
    const twelveHourConversion = hours >= 12 ? hours - 12 : hours;
    return twelveHourConversion + minutes + suffix;
}