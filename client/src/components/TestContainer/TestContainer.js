import React from "react";
import { connect } from "react-redux";

const TestContainer = props => {
  return <img src={props.greeting} alt="It's working gif" />;
};

const mapStateToProps = state => {
  console.log(state);
  return {
    greeting: state.mainReducer.greeting
  };
};

export default connect(mapStateToProps)(TestContainer);
