import React from "react";

class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 5
    };
  }

  tick() {
    const numSeconds = this.state.seconds - 1;
    this.setState(state => ({
      seconds: numSeconds
    }));
    if (numSeconds === 0) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
      {/* no props, setState, */}
    const color = this.state.seconds %2 ? 'red' : 'black'
    return (
      <div >
        <h1>Thank you for shopping at eGadget!</h1>
        <br />
        <h3>Please wait while we redirect you to the Home Page</h3>
        <div style={{color, fontSize: "100px", textAlign: "center"}}>{this.state.seconds}...</div>
      </div>
    );
  }
}

export default Done;
