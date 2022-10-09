import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../Redux/filters/action";

export default function Footer() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);
    const todos = useSelector(state => state.todos);
    const remainingTodos = todos.filter(todo => !todo.completed).length;
    

    const statusHandler = (status) => {
        dispatch(statusChanged(status));
    }

    const colorHandler = (color) => {
        if(filters.colors.includes(color)) {
            dispatch(colorChanged(color, 'removed'));
        }else{
            dispatch(colorChanged(color, 'added'));
        }
    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{remainingTodos} {remainingTodos > 1 ? 'tasks' : 'task'} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => statusHandler('all')} className={`cursor-pointer ${filters.status === 'all' && 'font-bold'}`}>All</li>
                <li>|</li>
                <li onClick={() => statusHandler('incomplete')}  className={`cursor-pointer ${filters.status === 'incomplete' && 'font-bold'}`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => statusHandler('complete')} className={`cursor-pointer ${filters.status === 'complete' && 'font-bold'}`}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={() => colorHandler('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer  ${filters.colors.includes('green') && 'bg-green-500'} `}></li>
                <li onClick={() => colorHandler('red')} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filters.colors.includes('red') && 'bg-red-500'} `}></li>
                <li onClick={() => colorHandler('yellow')} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filters.colors.includes('yellow') && 'bg-yellow-500'} `}></li>
            </ul>
        </div>
    );
}
