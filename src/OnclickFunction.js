import React from "react";


class Car extends React.Component{

constructor(){
    super();
    this.state={
        colorChange:false
    }
    this.handleClick=this.handleClick.bind(this)
}
handleClick(){
    this.setState({ colorChange: true})

}
render(){
    return(<>
    <div
        style={{
          backgroundColor: this.state.colorChange ? 'salmon' : '',
          color: this.state.colorChange ? 'blue' : '',
        }}
        onClick={this.handleClick}
      >
      Hello</div>

    <div><button class="primary" onClick={this.handleClick}>changeColor</button></div></>
)
}

}
export default Car;