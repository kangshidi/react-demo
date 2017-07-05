import React from "react";

class Child extends React.Component {
  render() {
    return (
      <div>
        <span>请输入{this.props.name}的年龄：</span>
        <input onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default class CompoB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "张三",
      age: "?",
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      age: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name} {this.state.age}岁</h1>
        <Child name={this.state.name}
          onChange={this.onInputChange} />
      </div>
    );
  }
}
