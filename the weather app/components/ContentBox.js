import styles from "./ContentBox.module.css";

export const Content = ({ children }) => {
    return <div className = { styles.wrapper } > { children } < /div>;
};