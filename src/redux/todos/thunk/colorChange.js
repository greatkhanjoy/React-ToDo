import axios from "axios";
import { COLORSELECTED } from "../actionTypes";

const colorChange = (todoId, color) => async (dispatch) => {
    await axios.patch(`http://localhost:9000/todos/${todoId}`, { color});
    
    dispatch({
        type: COLORSELECTED,
        payload: {todoId, color}
    })
}

export default colorChange;