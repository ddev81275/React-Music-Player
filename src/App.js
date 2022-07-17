import React, { Component } from "react";
import LeftMenu from "./Components/LeftMenu";
import MainContainer from "./Components/MainContainer";
import RightMenu from "./Components/RightMenu";

export default class App extends Component {
  render() {
    return (
      <>
        <LeftMenu />
        <MainContainer />
        <RightMenu />
      </>
    );
  }
}
