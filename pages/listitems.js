import styles from "../styles/motodo.module.css";

export default function ListItems(props) {
    return (
        <div className={styles.todolist}>
            <ul>
                {props.list.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    );
}