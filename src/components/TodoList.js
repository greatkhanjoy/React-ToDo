import { useSelector } from "react-redux";
import Todo from "./Todo";



export default function TodoList() {
    


    const filters = useSelector(state => state.filters);
    const todos = useSelector(state => state.todos);

    const filterByStatus = (todo) => {
        switch(filters.status) {
            case 'complete':
                return todo.completed;
            
            case 'incomplete':
                return !todo.completed;
                   
            default:
                return true;
        }
    }   

const filterByColor = (todo) => {
    if(filters.colors.length === 0) {
        return true;
    }
    return filters.colors.includes(todo?.color);
}
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
            .filter(filterByStatus)
            .filter(filterByColor)
            .map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    );
}
