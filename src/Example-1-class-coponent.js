import React, { Component } from 'react';

class Example1 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0  }
  }
  clickBtn() {
    this.setState({ count: (this.state.count + 1) })
  }
  componentDidMount() {
    console.log(`componentDidMount ---> You clicked button ${ this.state.count } times` )
  }
  componentDidUpdate() {
    console.log(`componentDidMount ---> You clicked button ${ this.state.count } times` )
  }
  render() { 
    return ( 
      <div>
          <h4> You clicked button { this.state.count } times </h4>
          <button onClick={this.clickBtn.bind(this)}>Click me</button>
      </div>
     );
  }
}
 
export default Example1;