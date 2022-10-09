import React from "react";
import { connect } from "react-redux";

var timer = null;

class TaskCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curName: "",
      curTime: 0
    };
  }

  handleClick = () => {
    this.props.sendAddTask(this.state.curName, this.state.curTime);
    clearInterval(timer);
    this.setState({
      curName: this.state.curName,
      curTime: 0
    });
  };
  handleStartClick = () => {
    timer = setInterval(() => {
      const state = this.state;
      this.setState({
        curName: state.curName,
        curTime: +state.curTime + 1
      });
    }, 1000);
  };

  handleNameChange = (e) => {
    this.setState({
      curName: e.target.value,
      curTime: this.state.curTime
    });
  };
  handleTimeChange = (e) => {
    clearInterval(timer);
    this.setState({
      curName: this.state.curName,
      curTime: e.target.value
    });
  };
  render() {
    return (
      <>
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          onChange={this.handleNameChange}
        />
        <label htmlFor="timeField">Time Elapsed</label>
        <input
          type="number"
          id="timeField"
          name="timeField"
          value={this.state.curTime}
          onChange={this.handleTimeChange}
        />
        <button id="start" onClick={this.handleStartClick}>
          Start
        </button>
        <button id="stop" onClick={this.handleClick}>
          Stop
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendAddTask: (newName, newTime) => {
      dispatch({
        taskName: newName,
        timeField: newTime,
        type: "add_action"
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(TaskCreator);
