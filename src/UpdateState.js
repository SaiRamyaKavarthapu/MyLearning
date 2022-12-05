import React from "react";
import Questions from "./Questions";

class UpdateState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964,
        s1:5
      };
    }
    changeColor = () => {
      this.setState({s1: this.state.s1+5});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.s1}
            {this.state.model}
            from {this.state.year}.
          </p>
          {this.state.s1 <= Questions.values.length}
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }
  export default UpdateState;
  
  