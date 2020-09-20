import React, { Component } from "react";
import RenderList from "./RenderList";
import LengthInputTracker from "../component/search";
class mainPage extends Component {
  state = {
    list: ["owais", "ahsan"],
    showSearch: true,
  };
  constructor() {
    super();
  }
  update = (params) => {
    console.log("params: ", typeof params);
    let { list } = this.state;
    console.log("list: ", list);
    list.push(params);
    this.setState({
      list,
    });
  };
  render() {
    console.log("updated list", this.state.list);
    return (
      <div>
        counter app
        <button
          onClick={() => this.setState({ showSearch: !this.state.showSearch })}
        >
          Toggle Search
        </button>
        <div>
          {this.state.showSearch && (
            <LengthInputTracker
              // dangerColor="orange"
              // successColor="green"
              // maxLengthColor="blue"

              minLength={12}
              maxLength={20}
            />
          )}
        </div>
        <RenderList itemList={this.state}></RenderList>
      </div>
    );
  }
}

export default mainPage;
