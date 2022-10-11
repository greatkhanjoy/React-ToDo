import { textUpdated } from "../actions";

const updateText = (todoId, newText) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                text: newText,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        

        dispatch(textUpdated(todoId, newText));
    };
};

export default updateText;
