import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';


class App extends Component {
  state = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0
  };

  componentDidMount(){
    setInterval(() => {
      this.setClock();
    }, 1000); // Change time every 1 second
  }

  setClock = () => {
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    this.setState({secondRatio: secondRatio});
    this.setState({minuteRatio: minuteRatio});
    this.setState({hourRatio: hourRatio});
  }

  render (){
    const { secondRatio, minuteRatio, hourRatio } = this.state;
    return (
      <Clock secondRatio={ secondRatio } minuteRatio={ minuteRatio } hourRatio={ hourRatio } />
    );
  }
}

export default App;
