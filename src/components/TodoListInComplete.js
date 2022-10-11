import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import TodoIncomplete from "./TodoIncomplete";

export default function TodoListIncomplete() {
    const todos = useSelector((state) => state.todos);
    // const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos);
    }, [dispatch]);

    // const filterByStatus = (todo) => {
    //     const { status } = filters;
    //     switch (status) {
    //         case "Complete":
    //             return todo.completed;

    //         case "Incomplete":
    //             return !todo.completed;

    //         default:
    //             return true;
    //     }
    // };

   

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter(todo => todo.completed)
                .map((todo) => (
                    <TodoIncomplete todo={todo} key={todo.id} />
                ))}
        </div>
    );
}
