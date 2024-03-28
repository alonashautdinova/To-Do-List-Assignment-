import React, { Component, useState } from "react";

class InputTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskDescription: "",
    };
  }
  handleTaskNameInput = (e) => {
    this.setState({ taskName: e.target.value });
  };
  handleDescriptionInput = (e) => {
    this.setState({ taskDescription: e.target.value });
  };
  handleAdd = () => {
    const { taskName, taskDescription } = this.state;
    if (taskName.trim() !== "") {
      this.props.onAdd({ taskName, taskDescription });
      this.setState({ taskName: "", taskDescription: "" });
    }
  };

  render() {
    const { taskName, taskDescription } = this.state;
    return (
      <div>
        <h3>New Task:</h3>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={this.handleTaskNameInput}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={this.handleDescriptionInput}
        />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default InputTask;
