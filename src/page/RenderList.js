import React, { Component } from "react";

class RenderList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // print = (v) => {
  //   console.log("ppppppppp", v);
  //   return <div>v</div>;
  // };
  componentDidMount() {}
  render() {
    console.log("this.props.itemList.list: ", this.props.itemList.list);
    return (
      <div>
        <div>listttttt</div>
        {this.props.itemList.list.map((v, i) => {
          {
            return <div key={i}>{v}</div>;
            // print(v);
          }
        })}
      </div>
    );
  }
}

export default RenderList;
