import React from "react";
import { connect } from "react-redux";
import store from "../../store";

class TaskList extends React.Component {
  render() {
    const lis = [];
    const tasks = store.getState().tasks;
    tasks.forEach((task) => {
      lis.push(
        <li className="task">
          <span className="id">{task.id} </span>
          <span className="name">{task.taskName} </span>
          <span className="time">{task.timeField}</span>
        </li>
      );
    });
    return <>{lis}</>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(TaskList);
