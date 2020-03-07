import React from "react";
import PropTypes from "prop-types";
import "./ControlButtons.css";

const ControlButtons = React.memo(
  ({ activated, onStart, onPause, onReset, onSplit }) => {
    if (activated) {
      return (
        <div>
          <button className="btn left" onClick={onSplit}>
            计次
          </button>
          <button className="btn right" onClick={onPause}>
            停止
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="btn left" onClick={onReset}>
            复位
          </button>
          <button className="btn right" onClick={onStart}>
            启动
          </button>
        </div>
      );
    }
  }
);

ControlButtons.propTypes = {
  activated: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onSplit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default ControlButtons;
