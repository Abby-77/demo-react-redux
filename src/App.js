import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import TaskCreator from "./pages/TaskCreator";
import TaskList from "./pages/TasksList";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskCreator />
        <TaskList />
      </div>
    </Provider>
  );
}
