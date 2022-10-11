import axios from "axios";
import { TOGGLED } from "../actionTypes";

const updateTodo = (id, completed) => async (dispatch) => {
    await axios.patch(`http://localhost:9000/todos/${id}`, { completed: !completed});
    dispatch({
        type: TOGGLED,
        payload:  id
    })
}

export default updateTodo;