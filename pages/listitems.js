import styles from "../styles/motodo.module.css";
import { Button } from "@material-ui/core";

export default function ListItems(props) {

    function handleClick(index) {
        props.setList(props.list.filter((item, i) => {
            return i != index;
        }));
    }

    return (
        <div className={styles.todolist}>
            <ul>
                {props.list.slice(0).reverse().map((item, index) => {
                    return <li onClick={() => handleClick(index)} key={index}>
                        {item}
                    </li>
                })}
            </ul>
        </div>
    );
}