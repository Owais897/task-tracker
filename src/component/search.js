import React, { Component } from "react";
import propTypes from "prop-types";

/**
 * @augments {Component<Props, State>}
 */
class LengthInputTracker extends Component {
  state = {
    searchInput: "",
  };

  onChangeValue(val) {
    if (val.length > this.props.maxLength) {
      val = val.slice(0, this.props.maxLength);
    }
    this.setState({ searchInput: val });
  }

  getActiveColor() {
    const val = this.state.searchInput;
    let activeColor =
      val.length < this.props.minLength
        ? this.props.dangerColor
        : val.length < this.props.maxLength
        ? this.props.successColor
        : this.props.maxLengthColor;
    return activeColor;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.searchInput}
          onChange={(e) => this.onChangeValue(e.target.value)}
          style={{
            color: this.getActiveColor(),
          }}
        />
        <div>
          {this.state.searchInput.length}/{this.props.maxLength}
        </div>
      </div>
    );
  }
}

LengthInputTracker.defaultProps = {
  dangerColor: "red",
  successColor: "green",
  maxLengthColor: "blue",
};

LengthInputTracker.propTypes = {
  minLength: propTypes.number.isRequired,
  maxLength: propTypes.number.isRequired,
  dangerColor: propTypes.string,
  successColor: propTypes.string,
  maxLengthColor: propTypes.string,
};

export default LengthInputTracker;
