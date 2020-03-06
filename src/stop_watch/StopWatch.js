import React, { Component, Fragment } from "react";
import MajorClock from "./MajorClock";
import ControlButtons from "./ControlButtons";
import SplitTimes from "./SplitTimes";

class StopWatch extends Component {
  state = {
    isStarted: false,
    isFirst: true,
    startTime: null,
    currentTime: null,
    splits: []
  };

  render() {
    const { isStarted, currentTime, startTime, splits } = this.state;
    const { onStart, onPause, onSplit, onReset } = this;
    return (
      <Fragment>
        <MajorClock milliseconds={currentTime - startTime} />
        <ControlButtons
          activated={isStarted}
          onStart={onStart}
          onPause={onPause}
          onReset={onReset}
          onSplit={onSplit}
        />
        <SplitTimes value={splits} />
      </Fragment>
    );
  }

  onStart = () => {
    this.setState(state => ({
      isStarted: true,
      startTime: state.isFirst
        ? new Date()
        : new Date() - (state.currentTime - state.startTime),
      currentTime: new Date(),
      isFirst: false
    }));

    this.intervalHandle = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000 / 60);
  };

  onPause = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false
    });
  };

  onReset = () => {
    this.setState({
      isFirst: true,
      startTime: null,
      currentTime: null,
      splits: []
    });
  };

  onSplit = () => {
    this.setState(state => ({
      splits: [...state.splits, state.currentTime - state.startTime]
    }));
  };
}

export default StopWatch;
