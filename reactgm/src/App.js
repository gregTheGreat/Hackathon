import React, { Component } from "react";
import Home from "home/Home";
// import styles from "./App.module.css";
// import axios from "axios";

// const gm = window.gm;

class App extends Component {
  state = {
    // vin: "pending...",
    // message: ""
  };

  componentDidMount() {
    // const vin = gm.info.getVIN();
    // this.setState({ vin });
    // axios.get("http://localhost:61467/api/test?message=Hello").then(res => {
    //   this.setState({ message: res.data }).catch(err => {
    //     console.error(err);
    //   });
    // });
  }

  // handleClose = () => {
  //   gm.system.closeApp();
  // };

  render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
      // <div className={styles.root}>
      //   <div>VIN: {this.state.vin}</div>
      //   <button onClick={this.handleClose}>Close</button>
      //   <p>{this.state.message}</p>
      // </div>
    );
  }
}

export default App;
