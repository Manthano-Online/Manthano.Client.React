import React from "react";
import { connect } from "react-redux";
import "./styles/App.scss";

function App(props) {
  return (
    <div className="App">
      <img src={props.greeting} alt="It's working gif" />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    greeting: state.mainReducer.greeting
  };
};

export default connect(mapStateToProps)(App);
