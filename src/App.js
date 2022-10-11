import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoListIncomplete from "./components/TodoListInComplete";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
                <Navbar />
            <div className="flex flex-col space-y-10">
                {/* Complete  */}
                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                    <Header />

                    <hr className="mt-4" />

                    <TodoList />

                    <hr className="mt-4" />

                    <Footer />
                </div>
                {/* Incomplete */}

                    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                        

                        <hr className="mt-4" />

                        <TodoListIncomplete />

                        <hr className="mt-4" />
                    </div>
                </div>

            </div>
        </Provider>
    );
}

export default App;
