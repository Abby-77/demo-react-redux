const initState = {
  tasks: [],
  nextId: 1
};

exports.reducer = (state = initState, action) => {
  switch (action.type) {
    case "add_action":
      // check if not a new task
      for (var i = 0; i < state.tasks.length; i++) {
        // iterate each task
        var curTask = state.tasks[i];
        if (curTask.taskName === action.taskName) {
          curTask.timeField = +curTask.timeField + +action.timeField;
          return {
            tasks: [...state.tasks],
            nextId: state.nextId
          };
        }
      }
      // if it is a new task
      const newTask = {
        id: state.nextId,
        taskName: action.taskName,
        timeField: action.timeField
      };
      return {
        tasks: [...state.tasks, newTask],
        nextId: state.nextId + 1
      };
    default:
      return state;
  }
};
