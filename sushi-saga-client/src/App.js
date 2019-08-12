import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    currentBalance: 100,
    ateSushiPrice: ''
  }

  HandleChange = () => {
    this.setState(prevState => prevState.eaten.push(1))
  }

  handleAteSushi = (eatenSushiId) => {
    let eatenSushi = this.state.sushis.find(sushi => sushi.id === eatenSushiId)
    this.setState(prevState => ({
      currentBalance: prevState.currentBalance - eatenSushi.price
    }));
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState(
        {
          sushis: sushis
        }
      ))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis}
                        eaten={this.state.eaten}
                        onChange={this.HandleChange}
                        onEatenSushi={this.handleAteSushi}
                        balance={this.state.currentBalance}/>
        <Table addPlate={this.state.eaten}
               currentBalance={this.state.currentBalance}
               ateSushiPrice={this.state.ateSushiPrice}/>
      </div>
    );
  }
}

export default App;
