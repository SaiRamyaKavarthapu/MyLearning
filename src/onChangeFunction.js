import React from 'react'

class Family extends React.Component{
    constructor(){
        super();
        this.state={
            text:"",
            list:[]
        }
       this.handleOnchange = this.handleOnchange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleOnchange(e){
      this.setState({text:e.target.value})
      console.log("text",this.state.text)
    }
    handleSubmit(e){
       e.preventDefault();

    //    this.setState({list: this.state.text})
       this.setState({text: ""})
        console.log("text1",this.state.text)
      }
    render(){
        return(<form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.text} onChange={this.handleOnchange}/>
            <button type="submit">Add</button>
           


        </form>)
    }
}
export default Family;