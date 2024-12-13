// TimerContainer.jsx
import React from "react";
import Timer from "./Timer";

class TimerContainer extends React.Component {
  state = {
    time: 0,
  };

  componentDidMount() {
    this.id = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  getHours = () => Math.floor(this.state.time / 3600);

  getMinutes = () => Math.floor((this.state.time % 3600) / 60);

  getSeconds = () => this.state.time % 60;

  render() {
    return (
      <Timer
        hours={this.getHours()}
        minutes={this.getMinutes()}
        seconds={this.getSeconds()}
      />
    );
  }
}

export default TimerContainer;
