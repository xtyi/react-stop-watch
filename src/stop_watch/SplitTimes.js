import React from "react";
import PropTypes from "prop-types";
import MajorClock from "./MajorClock";

const SplitTimes = ({ value = [] }) => {
  return value.map((item, index) => (
    <MajorClock key={index} milliseconds={item} />
  ));
};

SplitTimes.propTypes = {
  splits: PropTypes.arrayOf(PropTypes.number)
};

export default SplitTimes;
