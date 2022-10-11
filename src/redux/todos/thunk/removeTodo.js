import axios from "axios";
import { DELETED } from "../actionTypes";
const removeTodo = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:9000/todos/${id}`);
    dispatch({
        type: DELETED,
        payload: id
    })
}

export default removeTodo;