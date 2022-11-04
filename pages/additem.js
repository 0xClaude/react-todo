import { Button, TextField } from "@material-ui/core"

export default function AddItem(props) {

    function handleChange(e) {
        props.setItem(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.setList((prevList) => {
            return [...prevList, props.item];
        });
        props.setItem("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField id="item" label="Add to your list" onChange={handleChange} value={props.item} />
                <Button color="primary" variant="contained" size="large">Add</Button>
            </form>
        </>
    )
}