import React from "react";
import { connect } from "react-redux";

import NavBar from '../NavBar/NavBar';

const TestContainer = props => {
  return (
    <div>
      <NavBar />
      <div className="horse-container">
        <div className="horse">🐴🐎</div>
      </div>
      <img src={props.greeting} alt="It's working gif" />
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    greeting: state.mainReducer.greeting
  };
};

export default connect(mapStateToProps)(TestContainer);