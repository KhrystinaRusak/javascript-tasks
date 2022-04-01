import { getWeekDay, getTime, getAPM } from "..//sewrvices/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
    return ( <
        div className = { styles.wrapper } >
        <
        h2 > { `${getWeekDay(weatherData)}, ${getTime(
                    unitSystem,
                    weatherData.dt,
                    weatherData.timezone
                )} ${getAPM(unitSystem, weatherData.dt, weatherData.timezone)}` } <
        /h2>  <
        /div>
    );
};