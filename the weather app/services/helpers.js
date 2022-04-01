import {
    unixToLocalTime,
    kmToMiles,
    mpsToMph,
    timeTo24HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMaps) =>
    unitSystem == "metric" ? windInMaps : mpsToMph(windInMaps);

export const getVisibility = (unitSystem, vicibilityInMeters) =>
    unitSystem == "metric" ?
    (vicibilityInMeters / 1000).toFixed(1) :
    kmToMiles(visibilityInMeters / 1000);

export const getTime = (unitSystem, currentTime, timezone) =>
    unitSystem == "metric" ?
    unixToLocalelTime(currentTime, timezone) :
    timeTo24HourFormat(unixToLocalTime(currentTime, timezone));


export const getAPM = (unitSystem, currentTime, timezone) =>
    unitSystem === 'imperial' ?
    unixToLocaleTime(currentTime, timezone).split(":")[0] >= 12 ?
    "PM" :
    "AM" :
    "";

export const getWeekDay = (weatherData) => {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return weekday[
        new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
    ];
};